import { Personnage } from "./model/personnage.js";
import { RaceData } from "./data/RaceData.js";
import { ClasseData } from "./data/ClasseData.js";
import { Race } from "./model/race.js";
import { Classe } from "./model/classe.js";

populateDropdownList('ddlRace', RaceData, 'IdRace', 'NomRace');
populateDropdownList('ddlClasse', ClasseData, 'IdClasse', 'NomClasse');
var testPerso = new Personnage(
  parseInt((document.getElementById('txtForce') as HTMLInputElement)?.value),
  parseInt((document.getElementById('txtConstitution') as HTMLInputElement)?.value),
  parseInt((document.getElementById('txtDexterite') as HTMLInputElement)?.value),
  parseInt((document.getElementById('txtIntelligence') as HTMLInputElement)?.value),
  parseInt((document.getElementById('txtSagesse') as HTMLInputElement)?.value),
  parseInt((document.getElementById('txtCharisme') as HTMLInputElement)?.value),
  parseInt((document.getElementById('txtPointExperience') as HTMLInputElement)?.value)
  ,(document.getElementById('ddlRace') as HTMLSelectElement)?.value
  ,(document.getElementById('ddlClasse') as HTMLSelectElement)?.value
);

export function maFunction() {
    //console.log('ici cest bien App');
    //console.log((document.getElementById('ddlRace') as HTMLSelectElement)?.value);
    testPerso.Bforce = parseInt((document.getElementById('txtForce') as HTMLInputElement)?.value);
    testPerso.Bconstitution = parseInt((document.getElementById('txtConstitution') as HTMLInputElement)?.value);
    testPerso.Bdexterite = parseInt((document.getElementById('txtDexterite') as HTMLInputElement)?.value);
    testPerso.Bintelligence = parseInt((document.getElementById('txtIntelligence') as HTMLInputElement)?.value);
    testPerso.Bsagesse = parseInt((document.getElementById('txtSagesse') as HTMLInputElement)?.value);
    testPerso.Bcharisme = parseInt((document.getElementById('txtCharisme') as HTMLInputElement)?.value);
    testPerso.race = new Race((document.getElementById('ddlRace') as HTMLSelectElement)?.value);
    testPerso.classe = new Classe((document.getElementById('ddlClasse') as HTMLSelectElement)?.value);
    testPerso.pointExperience = parseInt((document.getElementById('txtPointExperience') as HTMLInputElement)?.value);
    document.getElementById("spNiveau")!.innerHTML = testPerso.niveau.toString();
    document.getElementById("spVoieParangonique")!.innerHTML = testPerso.VoieParangonique.toString();
    document.getElementById("spDestineeEpique")!.innerHTML = testPerso.DestineeEpique.toString();
    document.getElementById("spForce")!.innerHTML = testPerso.Pforce.toString();
    document.getElementById("spConstitution")!.innerHTML = testPerso.Pconstitution.toString();
    document.getElementById("spDexterite")!.innerHTML = testPerso.Pdexterite.toString();
    document.getElementById("spIntelligence")!.innerHTML = testPerso.Pintelligence.toString();
    document.getElementById("spSagesse")!.innerHTML = testPerso.Psagesse.toString();
    document.getElementById("spCharisme")!.innerHTML = testPerso.Pcharisme.toString();
    document.getElementById("spCA")!.innerHTML = testPerso.CA.toString();
    document.getElementById("spVigueur")!.innerHTML = testPerso.Vigueur.toString();
    document.getElementById("spReflexes")!.innerHTML = testPerso.Reflexes.toString();
    document.getElementById("spVolonte")!.innerHTML = testPerso.Volonte.toString();
    document.getElementById("spInitiative")!.innerHTML = testPerso.Initiative.toString();
    document.getElementById("spVitesse")!.innerHTML = testPerso.Vitesse.toString();
    document.getElementById("spPV")!.innerHTML = testPerso.PV.toString();
    document.getElementById("spPéril")!.innerHTML = testPerso.Peril.toString();
    document.getElementById("spRecuperation")!.innerHTML = testPerso.Recuperation.toString();
    document.getElementById("spRecuperationParjour")!.innerHTML = testPerso.RecuperationParjour.toString();
    document.getElementById("spDemiNiveau")!.innerHTML = testPerso.demiNiveau.toString();
    document.getElementById("spModForce")!.innerHTML = testPerso.ModForce.toString();
    document.getElementById("spModConstitution")!.innerHTML = testPerso.ModConstitution.toString();
    document.getElementById("spModDexterite")!.innerHTML = testPerso.ModDexterite.toString();
    document.getElementById("spModIntelligence")!.innerHTML = testPerso.ModIntelligence.toString();
    document.getElementById("spModSagesse")!.innerHTML = testPerso.ModSagesse.toString();
    document.getElementById("spModCharisme")!.innerHTML = testPerso.ModCharisme.toString();
//Affichage des compétences
    document.getElementById('spAcrobaties')!.innerHTML = testPerso.PAcrobaties.toString();
    document.getElementById('spArcanes')!.innerHTML = testPerso.PArcanes.toString();
    document.getElementById('spAthletisme')!.innerHTML = testPerso.PAthletisme.toString();
    document.getElementById('spBluff')!.innerHTML = testPerso.PBluff.toString();
    document.getElementById('spConn de la rue')!.innerHTML = testPerso.PConnDeLaRue.toString();
    document.getElementById('spDiplomatie')!.innerHTML = testPerso.PDiplomatie.toString();
    document.getElementById('spDiscretion')!.innerHTML = testPerso.PDiscretion.toString();
    document.getElementById('spEndurance')!.innerHTML = testPerso.PEndurance.toString();
    document.getElementById('spExploration')!.innerHTML = testPerso.PExploration.toString();
    document.getElementById('spHistoire')!.innerHTML = testPerso.PHistoire.toString();
    document.getElementById('spIntimidation')!.innerHTML = testPerso.PIntimidation.toString();
    document.getElementById('spIntuition')!.innerHTML = testPerso.PIntuition.toString();
    document.getElementById('spLarcin')!.innerHTML = testPerso.PLarcin.toString();
    document.getElementById('spNature')!.innerHTML = testPerso.PNature.toString();
    document.getElementById('spPerception')!.innerHTML = testPerso.PPerception.toString();
    document.getElementById('spReligion')!.innerHTML = testPerso.PReligion.toString();
    document.getElementById('spSoins')!.innerHTML = testPerso.PSoins.toString();
    console.log(testPerso);
}
(window as any).maFunction = maFunction;
interface HTMLData {
  HTMLValue: string;
  HTMLText: string;
}
async function populateDropdownList(DDL: string, dataSource: any, valueFieldName: string, textFieldName: string): Promise<void> {
  const htmlData = dataSource.map((data: any) => {
    return {
      HTMLValue: data[valueFieldName],
      HTMLText: data[textFieldName],
    };
  });
  const ddlARemplir = document.getElementById(DDL) as HTMLSelectElement;
  if (ddlARemplir !== null) {
      htmlData.forEach((item: any) => {
      const option = document.createElement('option');
      option.value = item.HTMLValue;
      option.text = item.HTMLText;
      ddlARemplir.add(option);
      });
  } else {
    console.error("Element with ID 'ddl' not found");
  }    
}
(document.getElementById('txtForce') as HTMLInputElement)!.onchange = function(monEvent: any) {
  maFunction();
};
(document.getElementById('txtConstitution') as HTMLInputElement)!.onchange = function(monEvent: any) {
  maFunction();
};
(document.getElementById('txtDexterite') as HTMLInputElement)!.onchange = function(monEvent: any) {
  maFunction();
};
(document.getElementById('txtIntelligence') as HTMLInputElement)!.onchange = function(monEvent: any) {
  maFunction();
};
(document.getElementById('txtSagesse') as HTMLInputElement)!.onchange = function(monEvent: any) {
  maFunction();
};
(document.getElementById('txtCharisme') as HTMLInputElement)!.onchange = function(monEvent: any) {
  maFunction();
};
(document.getElementById('ddlRace') as HTMLSelectElement)!.onchange = function(monEvent: any) {
  maFunction();
};

(document.getElementById('ddlClasse') as HTMLSelectElement)!.onchange = function(monEvent: any) {
  const divComp = document.getElementById('chkCompetence') as HTMLDivElement;
  divComp.replaceChildren();
  const spanAlerte = document.getElementById('spanAlerte') as HTMLSpanElement;
  spanAlerte.style.display = "none";
  
  //Object.keys(testPerso).filter(key => key.startsWith("F")).forEach(key => testPerso[key] = 0);
  testPerso.FAcrobaties = 0;
  testPerso.FArcanes = 0;
  testPerso.FAthletisme = 0;
  testPerso.FBluff = 0;
  testPerso.FConnDeLaRue = 0;
  testPerso.FDiplomatie = 0;
  testPerso.FDiscretion = 0;
  testPerso.FEndurance = 0;
  testPerso.FExploration = 0;
  testPerso.FHistoire = 0;
  testPerso.FIntimidation = 0;
  testPerso.FIntuition = 0;
  testPerso.FLarcin = 0;
  testPerso.FNature = 0;
  testPerso.FPerception = 0;
  testPerso.FReligion = 0;
  testPerso.FSoins = 0;
  //console.log(monEvent);
  const choixIdClasse = monEvent.target.selectedOptions[0].value;
  const choixClasse = ClasseData.find(classe => classe.IdClasse === choixIdClasse);  
  const comptenceClasse = Object.entries(choixClasse?.Competence as any);
  //Récupération du nombre de compétence.
  let nbComptence: number = 0;
  comptenceClasse.forEach((item: any) => {
    if (item[1] === 'x') {
      nbComptence ++;
    }
  })
  //Affichage du nombre de compétence au dessus de la liste.
  const lblAffichageComptenceAChoisir = document.createElement('span');
  lblAffichageComptenceAChoisir.textContent = 'Nombre de compétences à choisir : ' + choixClasse?.NombreCompetence?.toString();
  lblAffichageComptenceAChoisir.style.display = "Block";
  const lblAffichageComptenceChoisie = document.createElement('span');
  lblAffichageComptenceChoisie.textContent = 'Nombre de compétences choisies : 0';
  lblAffichageComptenceChoisie.style.display = "Block";
  lblAffichageComptenceChoisie.id = "spanComptageCompetence"
  divComp.appendChild(lblAffichageComptenceAChoisir);  
  divComp.appendChild(lblAffichageComptenceChoisie);
  //Affichage des cases à cocher pour les compétences disponbiles par classe.
  comptenceClasse.forEach((item: any) => {
    const leBR = document.createElement('br');
    const caseAcocher = document.createElement('input');
    caseAcocher.type = 'checkbox';
    caseAcocher.id = "id" + item[0];
    caseAcocher.name = "nom" + item[0];
    caseAcocher.setAttribute("data-oblige", item[1]);
    caseAcocher.onchange = function(event) { 
      comptageCaseCoche(choixClasse?.NombreCompetence !== undefined ? choixClasse.NombreCompetence : 0,caseAcocher.id); 
    };
    if (item[1] === 'o') {
      caseAcocher.checked = true;
      caseAcocher.disabled = true;
    }
    divComp.appendChild(caseAcocher);
    const labelCHK = document.createElement('label') as HTMLLabelElement;
    labelCHK.textContent = item[0];
    labelCHK.htmlFor = caseAcocher.id;
    divComp.appendChild(labelCHK);    
    divComp.appendChild(leBR);
  })
  maFunction();
};

async function comptageCaseCoche(nbComptence: number, chkID: string) {
  const divComp = document.getElementById('chkCompetence') as HTMLDivElement;
  // Récupérer toutes les cases à cocher dans le DIV avec toutes les conditions exprimées en une fois
  const checkboxes = divComp.querySelectorAll('input[type="checkbox"][data-oblige="x"]:checked');
  // Compter le nombre de cases cochées par le longueur du tableau
  let checked = Array.from(checkboxes).length;
  //Tester si on ne dépasse pas la limite du nombre de compétences.
  const spanAlerte = document.getElementById('spanAlerte') as HTMLSpanElement;
  const chkCompetence = document.getElementById(chkID) as HTMLInputElement
  if (checked > nbComptence) {        
    spanAlerte.style.display = "block";    
    chkCompetence.checked = false;
    checked --;    
  }
  else
  {
    spanAlerte.style.display = "none";
    let valueFormation: number = 0;
    if (chkCompetence.checked) {
      valueFormation = 5
    }
    else
    {valueFormation = 0}
    switch (chkID) {
      case 'idAcrobaties':
        testPerso.FAcrobaties = valueFormation;
        break;
      case 'idArcanes': 
        testPerso.FArcanes = valueFormation;
        break;
      case 'idAthletisme':
        testPerso.FAthletisme = valueFormation;        
        break;
      case 'idBluff': 
        testPerso.FBluff = valueFormation;
        break;
      case 'idConnDeLaRue': 
        testPerso.FConnDeLaRue = valueFormation;
        break;
      case 'idDiplomatie':
        testPerso.FDiplomatie = valueFormation;
        break;
      case 'idDiscretion':
        testPerso.FDiscretion = valueFormation;
        break;
      case 'idEndurance':
        testPerso.FEndurance = valueFormation;
        break;
      case 'idExploration':
        testPerso.FExploration = valueFormation;
        break;
      case 'idHistoire':
        testPerso.FHistoire = valueFormation;
        break;
      case 'idIntimidation':
        testPerso.FIntimidation = valueFormation;
        break;
      case 'idIntuition':
        testPerso.FIntuition = valueFormation;
        break;
      case 'idLarcin':
        testPerso.FLarcin = valueFormation;
        break;
      case 'idNature':
        testPerso.FNature = valueFormation;
        break;
      case 'idPerception':
        testPerso.FPerception = valueFormation;
        break;
      case 'idReligion':
        testPerso.FReligion = valueFormation;
        break;
      case 'idSoins':
        testPerso.FSoins = valueFormation;
        break;
      default:
        break;
    }
  }
  // Afficher le comaptge dans le SPAN prévu à cet effet.  
  const spanComptageCompetence = document.getElementById('spanComptageCompetence') as HTMLSpanElement;
  spanComptageCompetence.textContent = 'Nombre de compétences choisies : ' + checked;
  maFunction();
}