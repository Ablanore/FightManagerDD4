import { BaseClass } from "./baseclass.js";
import { RaceData } from "../data/RaceData.js";
export class Race extends BaseClass {
    constructor(IdRace) {
        super();
        this.Rforce = 0;
        this.Rconstitution = 0;
        this.Rdexterite = 0;
        this.Rintelligence = 0;
        this.Rsagesse = 0;
        this.Rcharisme = 0;
        //console.log('ici cest bien Race');
        //console.log(IdRace);
        const raceData = RaceData.find((race) => race.IdRace === IdRace);
        if (raceData) {
            this.nom = raceData.NomRace !== undefined ? raceData.NomRace : "";
            this.Rforce = raceData.Force !== undefined ? raceData.Force : 0;
            this.Rconstitution = raceData.Constitution !== undefined ? raceData.Constitution : 0;
            this.Rdexterite = raceData.Dexterite !== undefined ? raceData.Dexterite : 0;
            this.Rintelligence = raceData.Intelligence !== undefined ? raceData.Intelligence : 0;
            this.Rsagesse = raceData.Sagesse !== undefined ? raceData.Sagesse : 0;
            this.Rcharisme = raceData.Charisme !== undefined ? raceData.Charisme : 0;
        }
        else {
            throw new Error(`La race avec l'ID "${IdRace}" n'existe pas.`);
        }
    }
}
