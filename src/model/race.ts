import { RaceData } from "../data/RaceData.js";

export class Race {
    public nomRace: string = "";
    public Rforce: number = 0
    public Rconstitution: number = 0
    public Rdexterite: number = 0
    public Rintelligence: number = 0
    public Rsagesse: number = 0
    public Rcharisme: number = 0
    //Les Compétences récupérée des datas
    public RAcrobaties: number = 0
    public RArcanes: number = 0
    public RAthletisme: number = 0
    public RBluff: number = 0
    public RConnDeLaRue: number = 0
    public RDiplomatie: number = 0
    public RDiscretion: number = 0
    public REndurance: number = 0
    public RExploration: number = 0
    public RHistoire: number = 0
    public RIntuition: number = 0
    public RIntimidation: number = 0
    public RLarcin: number = 0
    public RNature: number = 0
    public RPerception: number = 0
    public RReligion: number = 0
    public RSoins: number = 0
    //les autres trucs de la race
    public vitesse: number = 0
    constructor(IdRace: string) {
        //console.log('ici cest bien Race');
        //console.log(IdRace);
        const raceData = RaceData.find((race) => race.IdRace === IdRace);
        if (raceData) {
            this.nomRace = raceData.NomRace !== undefined ? raceData.NomRace : "";
            this.Rforce = raceData.Force !== undefined ? raceData.Force : 0;
            this.Rconstitution = raceData.Constitution !== undefined ? raceData.Constitution : 0;
            this.Rdexterite = raceData.Dexterite !== undefined ? raceData.Dexterite : 0;
            this.Rintelligence = raceData.Intelligence !== undefined ? raceData.Intelligence : 0;
            this.Rsagesse = raceData.Sagesse !== undefined ? raceData.Sagesse : 0;
            this.Rcharisme = raceData.Charisme !== undefined ? raceData.Charisme : 0;
            //Les compétences
            this.RAcrobaties = raceData.Acrobaties !== undefined ? raceData.Acrobaties : 0;
            this.RArcanes = raceData.Arcanes !== undefined ? raceData.Arcanes : 0;
            this.RAthletisme = raceData.Athletisme !== undefined ? raceData.Athletisme : 0;
            this.RBluff = raceData.Bluff !== undefined ? raceData.Bluff : 0;
            this.RConnDeLaRue = raceData.ConnDeLaRue !== undefined ? raceData.ConnDeLaRue : 0;
            this.RDiplomatie = raceData.Diplomatie !== undefined ? raceData.Diplomatie : 0;
            this.RDiscretion = raceData.Discretion !== undefined ? raceData.Discretion : 0;
            this.REndurance = raceData.Endurance !== undefined ? raceData.Endurance : 0;
            this.RExploration = raceData.Exploration !== undefined ? raceData.Exploration : 0;
            this.RHistoire = raceData.Histoire !== undefined ? raceData.Histoire : 0;
            this.RIntuition = raceData.Intuition !== undefined ? raceData.Intuition : 0;
            this.RIntimidation = raceData.Intimidation !== undefined ? raceData.Intimidation : 0;
            this.RLarcin = raceData.Larcin !== undefined ? raceData.Larcin : 0;
            this.RNature = raceData.Nature !== undefined ? raceData.Nature : 0;
            this.RPerception = raceData.Perception !== undefined ? raceData.Perception : 0;
            this.RReligion = raceData.Religion !== undefined ? raceData.Religion : 0;
            this.RSoins = raceData.Soins !== undefined ? raceData.Soins : 0;
            //Les autres trucs de la race
            this.vitesse = raceData.Vitesse !== undefined ? raceData.Vitesse : 0;
        } else {
            throw new Error(`La race avec l'ID "${IdRace}" n'existe pas.`);
        }
    }
}