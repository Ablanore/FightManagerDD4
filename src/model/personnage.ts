import { BaseClass } from "./baseclass.js";
import { Race } from "./race.js";
import { Classe } from "./classe.js";
//import { Caracteristique } from "./caracteristique.js";
interface LevelData {
    experienceMin: number;
    experienceMax: number;
    level: number;
}
const levelTable: LevelData[] = [
    { experienceMin: 0, experienceMax: 999, level: 1},
    { experienceMin: 1000, experienceMax: 2249, level: 2},
    { experienceMin: 2250, experienceMax: 3749, level: 3},
    { experienceMin: 3750, experienceMax: 5499, level: 4},
    { experienceMin: 5500, experienceMax: 7499, level: 5},
    { experienceMin: 7500, experienceMax: 9999, level: 6},
    { experienceMin: 10000, experienceMax: 12999, level: 7},
    { experienceMin: 13000, experienceMax: 16499, level: 8},
    { experienceMin: 16500, experienceMax: 20499, level: 9},
    { experienceMin: 20500, experienceMax: 25999, level: 10},
    { experienceMin: 26000, experienceMax: 31999, level: 11},
    { experienceMin: 32000, experienceMax: 38999, level: 12},
    { experienceMin: 39000, experienceMax: 46999, level: 13},
    { experienceMin: 47000, experienceMax: 56999, level: 14},
    { experienceMin: 57000, experienceMax: 68999, level: 15},
    { experienceMin: 69000, experienceMax: 82999, level: 16},
    { experienceMin: 83000, experienceMax: 98999, level: 17},
    { experienceMin: 99000, experienceMax: 118999, level: 18},
    { experienceMin: 119000, experienceMax: 142999, level: 19},
    { experienceMin: 143000, experienceMax: 174999, level: 20},
    { experienceMin: 175000, experienceMax: 209999, level: 21},
    { experienceMin: 210000, experienceMax: 254999, level: 22},
    { experienceMin: 255000, experienceMax: 309999, level: 23},
    { experienceMin: 310000, experienceMax: 374999, level: 24},
    { experienceMin: 375000, experienceMax: 449999, level: 25},
    { experienceMin: 450000, experienceMax: 549999, level: 26},
    { experienceMin: 550000, experienceMax: 674999, level: 27},
    { experienceMin: 675000, experienceMax: 824999, level: 28},
    { experienceMin: 825000, experienceMax: 999999, level: 29},
    { experienceMin: 1000000, experienceMax: 1000000000, level: 30}
];

export class Personnage extends BaseClass {
    private idrace: string = "";
    private idclasse: string = "";
    public race: Race = new Race(this.idrace);
    public classe: Classe = new Classe(this.idclasse);
    public pointExperience: number = 0;
    public Bforce: number = 0
    public Bconstitution: number = 0
    public Bdexterite: number = 0
    public Bintelligence: number = 0
    public Bsagesse: number = 0
    public Bcharisme: number = 0

    constructor(force: number, constitution: number, dexterite: number, intelligence: number, sagesse: number, charisme: number,
        experience: number, idRace:string, idClasse: string) {
        super();
        this.Bforce = force;
        this.Bconstitution = constitution;
        this.Bdexterite = dexterite;
        this.Bintelligence = intelligence;
        this.Bsagesse = sagesse;
        this.Bcharisme = charisme;
        this.pointExperience = experience;
        this.idrace = idRace;
        this.idclasse = idClasse;
    }

    public get niveau(): number { return this.getLevelFromExperience(this.pointExperience);}
    public get demiNiveau(): number{ return Math.floor(this.niveau/2);}
    public getLevelFromExperience(experience: number): number {
        const levelData = levelTable.find((data) => experience >= data.experienceMin && experience <= data.experienceMax);
        return levelData ? levelData.level : levelTable[levelTable.length - 1].level;
    }    
    public get PV(): number { return 0;}
    public get Peril(): number { return Math.floor(this.PV/2);}
    public get Recuperation(): number { return Math.floor(this.PV/4);}
    public get RecuperationParjour(): number { return 0;}    

    public getCalculModCarac(caractersitique: number): number {        
        const ranges = ["1", "2-3", "4-5", "6-7", "8-9", "10-11", "12-13", "14-15", "16-17", "18-19", "20-21", "22-23", "24-25"];
        const mods = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
        
        for (let i = 0; i < ranges.length; i++) {
            const range = ranges[i];
            const [min, max] = range.split("-");
            if (max) {
            const minNum = parseInt(min, 10);
            const maxNum = parseInt(max, 10);
            if (caractersitique >= minNum && caractersitique <= maxNum) {
                return mods[i];
            }
            } else {
            if (caractersitique === parseInt(min, 10)) {
                return mods[i];
            }
            }
        }
        return 0;
        /*if(caractersitique > 10){
            return Math.floor((caractersitique-11)/2);
        }
        else {
            return Math.floor((caractersitique-10)/2);
        } */       
    }
    public get Pforce(): number { return this.Bforce + this.race.Rforce;}
    public get Pconstitution(): number { return this.Bconstitution + this.race.Rconstitution;}
    public get Pdexterite(): number { return this.Bdexterite + this.race.Rdexterite;}
    public get Pintelligence(): number { return this.Bintelligence + this.race.Rintelligence;}
    public get Psagesse(): number { return this.Bsagesse + this.race.Rsagesse;}
    public get Pcharisme(): number { return this.Bcharisme + this.race.Rcharisme;}

    public get ModForce(): number { return this.getCalculModCarac(this.Pforce);}
    public get ModConstitution(): number { return this.getCalculModCarac(this.Pconstitution);}
    public get ModDexterite(): number { return this.getCalculModCarac(this.Pdexterite);}
    public get ModIntelligence(): number { return this.getCalculModCarac(this.Pintelligence);}
    public get ModSagesse(): number { return this.getCalculModCarac(this.Psagesse);}
    public get ModCharisme(): number { return this.getCalculModCarac(this.Pcharisme);}

    public get CA(): number { 
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModDexterite, this.ModIntelligence);
    }
    public get Vigueur(): number { 
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModForce, this.ModConstitution) + this.classe.vigueur;
    }
    public get Reflexes(): number { 
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModDexterite, this.ModIntelligence) + this.classe.reflexe;
    }
    public get Volonte(): number { 
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModSagesse, this.ModCharisme) + this.classe.volonte;
    }
    public CompareCarac(carac1: number, carac2: number): number {
        var caracRetour: number = 0;
        if (carac1 > carac2) { caracRetour = carac1;}
        else
        { caracRetour = carac2;}
        return caracRetour + 10 + this.demiNiveau;
    }
    public get Initiative(): number { return 0;}
    public get Vitesse(): number { return 0;}
    public get VoieParangonique(): number { return 0;}
    public get DestineeEpique(): number { return 0;}
}