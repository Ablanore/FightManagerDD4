import { BaseClass } from "./baseclass.js";
export class Race extends BaseClass {
    constructor(IdRace) {
        super();
        /*const raceData = dataRaces.find((race) => race.IdRace === IdRace);
        if (raceData) {
            this.nom = raceData.NomRace;
            if (raceData.Force !== undefined && raceData.Constitution !== undefined && raceData.Dexterite !== undefined && raceData.Intelligence !== undefined && raceData.Sagesse !== undefined && raceData.Charisme !== undefined) {
                this.carac = new Caracteristique(
                    raceData.Force, raceData.Constitution, raceData.Dexterite, raceData.Intelligence, raceData.Sagesse, raceData.Charisme);
            } else {
                throw new Error(`La race avec l'ID "${IdRace}" manque une valeur de carac.`);
            };
        } else {
            throw new Error(`La race avec l'ID "${IdRace}" n'existe pas.`);
        }*/
    }
}
