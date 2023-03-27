import { Race } from "./race.js";
import { Classe } from "./classe.js";
const levelTable = [
    { experienceMin: 0, experienceMax: 999, level: 1 },
    { experienceMin: 1000, experienceMax: 2249, level: 2 },
    { experienceMin: 2250, experienceMax: 3749, level: 3 },
    { experienceMin: 3750, experienceMax: 5499, level: 4 },
    { experienceMin: 5500, experienceMax: 7499, level: 5 },
    { experienceMin: 7500, experienceMax: 9999, level: 6 },
    { experienceMin: 10000, experienceMax: 12999, level: 7 },
    { experienceMin: 13000, experienceMax: 16499, level: 8 },
    { experienceMin: 16500, experienceMax: 20499, level: 9 },
    { experienceMin: 20500, experienceMax: 25999, level: 10 },
    { experienceMin: 26000, experienceMax: 31999, level: 11 },
    { experienceMin: 32000, experienceMax: 38999, level: 12 },
    { experienceMin: 39000, experienceMax: 46999, level: 13 },
    { experienceMin: 47000, experienceMax: 56999, level: 14 },
    { experienceMin: 57000, experienceMax: 68999, level: 15 },
    { experienceMin: 69000, experienceMax: 82999, level: 16 },
    { experienceMin: 83000, experienceMax: 98999, level: 17 },
    { experienceMin: 99000, experienceMax: 118999, level: 18 },
    { experienceMin: 119000, experienceMax: 142999, level: 19 },
    { experienceMin: 143000, experienceMax: 174999, level: 20 },
    { experienceMin: 175000, experienceMax: 209999, level: 21 },
    { experienceMin: 210000, experienceMax: 254999, level: 22 },
    { experienceMin: 255000, experienceMax: 309999, level: 23 },
    { experienceMin: 310000, experienceMax: 374999, level: 24 },
    { experienceMin: 375000, experienceMax: 449999, level: 25 },
    { experienceMin: 450000, experienceMax: 549999, level: 26 },
    { experienceMin: 550000, experienceMax: 674999, level: 27 },
    { experienceMin: 675000, experienceMax: 824999, level: 28 },
    { experienceMin: 825000, experienceMax: 999999, level: 29 },
    { experienceMin: 1000000, experienceMax: 1000000000, level: 30 }
];
export class Personnage {
    constructor(force, constitution, dexterite, intelligence, sagesse, charisme, experience, idRace, idClasse) {
        this.idrace = "";
        this.idclasse = "";
        this.pointExperience = 0;
        this.Bforce = 0;
        this.Bconstitution = 0;
        this.Bdexterite = 0;
        this.Bintelligence = 0;
        this.Bsagesse = 0;
        this.Bcharisme = 0;
        //console.log('ici cest bien Personnage');
        //console.log(idRace);
        this.Bforce = force;
        this.Bconstitution = constitution;
        this.Bdexterite = dexterite;
        this.Bintelligence = intelligence;
        this.Bsagesse = sagesse;
        this.Bcharisme = charisme;
        this.pointExperience = experience;
        this.idrace = idRace;
        this.idclasse = idClasse;
        this.race = new Race(this.idrace);
        this.classe = new Classe(this.idclasse);
    }
    get niveau() { return this.getLevelFromExperience(this.pointExperience); }
    get demiNiveau() { return Math.floor(this.niveau / 2); }
    getLevelFromExperience(experience) {
        const levelData = levelTable.find((data) => experience >= data.experienceMin && experience <= data.experienceMax);
        return levelData ? levelData.level : levelTable[levelTable.length - 1].level;
    }
    get PV() { return 0; }
    get Peril() { return Math.floor(this.PV / 2); }
    get Recuperation() { return Math.floor(this.PV / 4); }
    get RecuperationParjour() { return 0; }
    getCalculModCarac(caractersitique) {
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
            }
            else {
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
    get Pforce() { return this.Bforce + this.race.Rforce; }
    get Pconstitution() { return this.Bconstitution + this.race.Rconstitution; }
    get Pdexterite() { return this.Bdexterite + this.race.Rdexterite; }
    get Pintelligence() { return this.Bintelligence + this.race.Rintelligence; }
    get Psagesse() { return this.Bsagesse + this.race.Rsagesse; }
    get Pcharisme() { return this.Bcharisme + this.race.Rcharisme; }
    get ModForce() { return this.getCalculModCarac(this.Pforce); }
    get ModConstitution() { return this.getCalculModCarac(this.Pconstitution); }
    get ModDexterite() { return this.getCalculModCarac(this.Pdexterite); }
    get ModIntelligence() { return this.getCalculModCarac(this.Pintelligence); }
    get ModSagesse() { return this.getCalculModCarac(this.Psagesse); }
    get ModCharisme() { return this.getCalculModCarac(this.Pcharisme); }
    get CA() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModDexterite, this.ModIntelligence);
    }
    get Vigueur() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModForce, this.ModConstitution) + this.classe.vigueur;
    }
    get Reflexes() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModDexterite, this.ModIntelligence) + this.classe.reflexe;
    }
    get Volonte() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModSagesse, this.ModCharisme) + this.classe.volonte;
    }
    CompareCarac(carac1, carac2) {
        var caracRetour = 0;
        if (carac1 > carac2) {
            caracRetour = carac1;
        }
        else {
            caracRetour = carac2;
        }
        return caracRetour + 10 + this.demiNiveau;
    }
    get Initiative() { return 0; }
    get Vitesse() { return 0; }
    get VoieParangonique() { return 0; }
    get DestineeEpique() { return 0; }
}
