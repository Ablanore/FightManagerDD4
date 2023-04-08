import { TalentData } from "../data/TalentData.js";
import { Personnage } from "./personnage.js";
export class Talent {}

function retourData(unPersonnage: Personnage): any {
    const selectedRace = (document.getElementById('ddlRace') as HTMLSelectElement).value;
    const selectedClasse = (document.getElementById('ddlClasse') as HTMLSelectElement).value;
    console.log(selectedClasse + ' ' + selectedRace);
    const htmlDataTalent = TalentData.filter(dataTalent=> 
        (dataTalent.Race === undefined || dataTalent.Race === selectedRace) &&
        (dataTalent.Classe === undefined || dataTalent.Classe === selectedClasse) &&
        (dataTalent.Force === undefined || unPersonnage.Pforce >= dataTalent.Force) &&
        (dataTalent.Constitution === undefined || unPersonnage.Pconstitution >= dataTalent.Constitution) &&
        (dataTalent.Dexterite === undefined || unPersonnage.Pdexterite >= dataTalent.Dexterite) &&
        (dataTalent.Intelligence === undefined || unPersonnage.Pintelligence >= dataTalent.Intelligence) &&
        (dataTalent.Sagesse === undefined || unPersonnage.Psagesse >= dataTalent.Sagesse) &&
        (dataTalent.Charisme === undefined || unPersonnage.Pcharisme >= dataTalent.Charisme)
        //&& checkCompetences(dataTalent.competences)

        ).map((dataTalent: any) => {
        return {
            HTMLValue: dataTalent.IDTalent,
            HTMLText: dataTalent.NomTalent,
        };
        });
    (document.getElementById('spNbTalent') as HTMLSpanElement).innerHTML = htmlDataTalent.length.toString();
    return htmlDataTalent;
  }
  
/*function retourData(): any{
    const htmlDataTalent = TalentData.map((dataTalent: any) => {
        return {
          HTMLValue: dataTalent["IDTalent"],
          HTMLText: dataTalent["NomTalent"],
        };
      });
    return htmlDataTalent;
}*/

export function listeTalent(unPersonnage: Personnage): void {
    //Montage du DIV qui va conteinr les cases à cocher des Talents.
    const divTalent = document.getElementById('chkTalent') as HTMLDivElement;
    divTalent.replaceChildren();
    //Création de la liste des Talents
    const htmlDataTalent = retourData(unPersonnage);
    //Génération des case à cocher pour les talents disponibles
    htmlDataTalent.forEach((item: any) => {
    const leBR = document.createElement('br');
    const caseAcocher = document.createElement('input');
    caseAcocher.type = 'checkbox';
    caseAcocher.id = "id" + item["HTMLValue"];
    //caseAcocher.name = "nom" + item["HTMLText"];
    //caseAcocher.setAttribute("data-oblige", item[1]);
    caseAcocher.onchange = function(event) {
      //comptageCaseCoche(choixClasse?.NombreCompetence !== undefined ? choixClasse.NombreCompetence : 0,caseAcocher.id);
      //voir à donner un autre nom à la fonction d'Event
    };    
    divTalent.appendChild(caseAcocher);
    const labelCHK = document.createElement('label') as HTMLLabelElement;
    labelCHK.textContent = item["HTMLText"];
    labelCHK.htmlFor = caseAcocher.id;
    divTalent.appendChild(labelCHK);    
    divTalent.appendChild(leBR);
  })
}