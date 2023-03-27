import { Caracteristique } from "./caracteristique.js";
export class BaseClass {
    constructor() {
        this.nom = '';
        this.carac = new Caracteristique(0, 0, 0, 0, 0, 0);
    }
}
