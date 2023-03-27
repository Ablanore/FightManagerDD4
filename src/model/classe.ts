import { BaseClass } from "./baseclass.js";
import dataClasses from "../data/Classe.json";

export class Classe extends BaseClass {
    //public IdClasse: string = ""
    public nomClasse: string = ""
    public pointVieBase: number = 0
    public pointVieNiveau: number = 0
    public recuperation: number = 0
    public nombreCompetence: number = 0
    public reflexe: number = 0
    public volonte: number = 0
    public vigueur: number = 0

    constructor(IdClasse: string) {
        super();
        const classeData = dataClasses.find((classe) => classe.IdClasse === IdClasse);
        if (classeData) {
            this.nomClasse = classeData.NomClasse !== undefined ? classeData.NomClasse : "";
            this.pointVieBase = classeData.PointVieBase !== undefined ? classeData.PointVieBase : 0;
            this.pointVieNiveau = classeData.PointVieNiveau !== undefined ? classeData.PointVieNiveau : 0;
            this.recuperation = classeData.Recuperation !== undefined ? classeData.Recuperation : 0;
            this.nombreCompetence = classeData.NombreCompetence !== undefined ? classeData.NombreCompetence : 0;
            this.reflexe = classeData.Reflexe !== undefined ? classeData.Reflexe : 0;
            this.volonte = classeData.Volonte !== undefined ? classeData.Volonte : 0;
            this.vigueur = classeData.Vigueur !== undefined ? classeData.Vigueur : 0;
        } else {
            throw new Error(`La race avec l'ID "${IdClasse}" n'existe pas.`);
        }
    }
}