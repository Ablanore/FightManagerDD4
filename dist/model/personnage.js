import { BaseClass } from "./baseclass.js";
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
export class Personnage extends BaseClass {
    constructor(force, constitution, dexterite, intelligence, sagesse, charisme, experience, idRace) {
        super();
        this.idrace = "";
        this.race = new Race(this.idrace);
        this.classe = new Classe();
        this.pointExperience = 0;
        /*this.race = new Race(idRace)
        this.carac.force = force + this.race.carac.force;
        this.carac.constitution = constitution + this.race.carac.constitution;
        this.carac.dexterite = dexterite + this.race.carac.dexterite;
        this.carac.intelligence = intelligence + this.race.carac.intelligence;
        this.carac.sagesse = sagesse + this.race.carac.sagesse;
        this.carac.charisme = charisme + this.race.carac.charisme;
        */
        console.log('biloute' && this.race.carac.dexterite);
        this.carac.force = force;
        this.carac.constitution = constitution;
        this.carac.dexterite = dexterite;
        this.carac.intelligence = intelligence;
        this.carac.sagesse = sagesse;
        this.carac.charisme = charisme;
        this.pointExperience = experience;
        this.idrace = idRace;
        /*const raceSelect = document.getElementById("race") as HTMLSelectElement;
        raceSelect.addEventListener("change", () => {
        const raceName = raceSelect.value;
        this.race = this.chargerRace(raceName);
        this.calculerCaracteristiques();
        }
        );*/
        // Charge la race par défaut
        //this.race = this.chargerRace(raceSelect.value);
        //this.calculerCaracteristiques();
    }
    /*
        private chargerRace(nomRace: string): Race {
            const races = this.chargerRaces();
            const raceData = races[nomRace];
            const race = new Race(this.idrace);
            race.nom = raceData.nom;
            race.carac = new Caracteristique(
              raceData.carac.force,
              raceData.carac.dexterite,
              raceData.carac.constitution,
              raceData.carac.intelligence,
              raceData.carac.sagesse,
              raceData.carac.charisme
            );
            return race;
          }
        
          private chargerRaces(): { [key: string]: any } {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "races.json", false);
            xhr.send();
            return JSON.parse(xhr.responseText);
          }
        
          private calculerCaracteristiques(): void {
            // ... calcule les caractéristiques du personnage en fonction de la race
          }
    
    */
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
    get ModForce() { return this.getCalculModCarac(this.carac.force); }
    get ModConstitution() { return this.getCalculModCarac(this.carac.constitution); }
    get ModDexterite() { return this.getCalculModCarac(this.carac.dexterite); }
    get ModIntelligence() { return this.getCalculModCarac(this.carac.intelligence); }
    get ModSagesse() { return this.getCalculModCarac(this.carac.sagesse); }
    get ModCharisme() { return this.getCalculModCarac(this.carac.charisme); }
    get CA() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModDexterite, this.ModIntelligence);
    }
    get Vigueur() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModForce, this.ModConstitution);
    }
    get Reflexes() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModDexterite, this.ModIntelligence);
    }
    get Volonte() {
        //Le 10 plus le demi niveau est ajouter dans le comparecarac()
        return this.CompareCarac(this.ModSagesse, this.ModCharisme);
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
