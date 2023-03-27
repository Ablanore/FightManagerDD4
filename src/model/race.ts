import { BaseClass } from "./baseclass.js";
import dataRaces from "../data/Race.json";

export class Race extends BaseClass {
    public Rforce: number = 0
    public Rconstitution: number = 0
    public Rdexterite: number = 0
    public Rintelligence: number = 0
    public Rsagesse: number = 0
    public Rcharisme: number = 0

    constructor(IdRace: string) {
        super();
        const raceData = dataRaces.find((race) => race.IdRace === IdRace);
        if (raceData) {
            this.nom = raceData.NomRace !== undefined ? raceData.NomRace : "";
            this.Rforce = raceData.Force !== undefined ? raceData.Force : 0;
            this.Rconstitution = raceData.Constitution !== undefined ? raceData.Constitution : 0;
            this.Rdexterite = raceData.Dexterite !== undefined ? raceData.Dexterite : 0;
            this.Rintelligence = raceData.Intelligence !== undefined ? raceData.Intelligence : 0;
            this.Rsagesse = raceData.Sagesse !== undefined ? raceData.Sagesse : 0;
            this.Rcharisme = raceData.Charisme !== undefined ? raceData.Charisme : 0;
        } else {
            throw new Error(`La race avec l'ID "${IdRace}" n'existe pas.`);
        }
    }
}