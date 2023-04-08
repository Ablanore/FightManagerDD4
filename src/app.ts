import { Personnage } from "./model/personnage.js";
import { RaceData } from "./data/RaceData.js";
import { ClasseData } from "./data/ClasseData.js";
import { Race } from "./model/race.js";
import { Classe } from "./model/classe.js";
import { Talent, listeTalent } from "./model/talent.js";

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
listeTalent(testPerso);
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
    formationCompetence();
    //Etat civil du personnage
    //document.getElementById("spRace")!.innerHTML = testPerso.race.nomRace.toString();
    //document.getElementById("spClasse")!.innerHTML = testPerso.classe.nomClasse.toString();
    document.getElementById("spVoieParangonique")!.innerHTML = testPerso.VoieParangonique.toString();
    document.getElementById("spDestineeEpique")!.innerHTML = testPerso.DestineeEpique.toString();
    document.getElementById("spNiveau")!.innerHTML = testPerso.niveau.toString();
    document.getElementById("spDemiNiveau")!.innerHTML = testPerso.demiNiveau.toString();
    //Caractéristiqueq du personnage
    document.getElementById("spForce")!.innerHTML = testPerso.Pforce.toString();
    document.getElementById("spConstitution")!.innerHTML = testPerso.Pconstitution.toString();
    document.getElementById("spDexterite")!.innerHTML = testPerso.Pdexterite.toString();
    document.getElementById("spIntelligence")!.innerHTML = testPerso.Pintelligence.toString();
    document.getElementById("spSagesse")!.innerHTML = testPerso.Psagesse.toString();
    document.getElementById("spCharisme")!.innerHTML = testPerso.Pcharisme.toString();
    document.getElementById("spModForce")!.innerHTML = testPerso.ModForce.toString();
    document.getElementById("spModConstitution")!.innerHTML = testPerso.ModConstitution.toString();
    document.getElementById("spModDexterite")!.innerHTML = testPerso.ModDexterite.toString();
    document.getElementById("spModIntelligence")!.innerHTML = testPerso.ModIntelligence.toString();
    document.getElementById("spModSagesse")!.innerHTML = testPerso.ModSagesse.toString();
    document.getElementById("spModCharisme")!.innerHTML = testPerso.ModCharisme.toString();
    //Défenses du personnage
    document.getElementById("spCA")!.innerHTML = testPerso.CA.toString();
    document.getElementById("spVigueur")!.innerHTML = testPerso.Vigueur.toString();
    document.getElementById("spReflexes")!.innerHTML = testPerso.Reflexes.toString();
    document.getElementById("spVolonte")!.innerHTML = testPerso.Volonte.toString();
    //les autres trucs du personnage
    document.getElementById("spInitiative")!.innerHTML = testPerso.Initiative.toString();
    document.getElementById("spVitesse")!.innerHTML = testPerso.Vitesse.toString();
    document.getElementById("spPV")!.innerHTML = testPerso.PV.toString();
    document.getElementById("spPéril")!.innerHTML = testPerso.Peril.toString();
    document.getElementById("spRecuperation")!.innerHTML = testPerso.Recuperation.toString();
    document.getElementById("spRecuperationParjour")!.innerHTML = testPerso.RecuperationParjour.toString();
    
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
    //console.log(testPerso);
}
(window as any).maFunction = maFunction;
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
  listeTalent(testPerso);
};
(document.getElementById('txtPointExperience') as HTMLSelectElement)!.onchange = function(monEvent: any) {
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
  listeTalent(testPerso);
};

interface HTMLData {
  HTMLValue: string;
  HTMLText: string;
}
//Cette fonction permet de peupler une DDL avec des données venant d'une struture JSON qui mise en place grâce à l'interface HTMLData.
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
//Cette fonction sert à gérer le comptage de compétences choisies en fonction du nombre de compétence que la classe permet de prendre.
async function comptageCaseCoche(nbComptence: number, chkID: string) {
  
  const classeChoisie = document.getElementById('ddlClasse') as HTMLSelectElement;
  //Gestion du cas particulier du Rôdeur
  if (classeChoisie.value === "Rodeur") {    
    const competenceJusteCLicke  = document.getElementById(chkID) as HTMLInputElement;;
    const exploration = document.getElementById('idExploration') as HTMLInputElement;
    const nature = document.getElementById('idNature') as HTMLInputElement;

    if (chkID === 'idExploration' && exploration.checked && !nature.checked) {
      nature.setAttribute('data-oblige',"x");
      exploration.setAttribute('data-oblige',"oc");
    }
    else if (chkID === 'idNature' && !exploration.checked && nature.checked) {
      exploration.setAttribute('data-oblige',"x");      
      nature.setAttribute('data-oblige',"oc");
    }
    else if (chkID === 'idExploration' && !exploration.checked && !nature.checked) {
      nature.setAttribute('data-oblige',"c");
      exploration.setAttribute('data-oblige',"c");
    }
    else if (chkID === 'idNature' && !exploration.checked && !nature.checked) {
      nature.setAttribute('data-oblige',"c");
      exploration.setAttribute('data-oblige',"c");
    }
    else if (chkID === 'idExploration' && exploration.checked && nature.checked) {
      
    }
    else if (chkID === 'idNature' && exploration.checked && nature.checked) {
      
    }
    else if (chkID === 'idExploration' && !exploration.checked && nature.checked) {
      if(nature.getAttribute('data-oblige') === "x"){
        nature.setAttribute('data-oblige',"oc");
        exploration.setAttribute('data-oblige',"x");
      }
    }
    else if (chkID === 'idNature' && exploration.checked && !nature.checked) {
      if(exploration.getAttribute('data-oblige') === "x"){
        exploration.setAttribute('data-oblige',"oc");
        nature.setAttribute('data-oblige',"x");
      }
    }
  }
  // Récupérer toutes les cases à cocher dans le DIV chkCompetence avec toutes les conditions exprimées en une fois
  const checkboxes = document.querySelectorAll('#chkCompetence > input[type="checkbox"][data-oblige="x"]:checked');
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
  }
  // Afficher le comptage dans le SPAN prévu à cet effet.  
  (document.getElementById('spanComptageCompetence') as HTMLSpanElement).textContent = 'Nombre de compétences choisies : ' + checked;
  //spanComptageCompetence.textContent = 'Nombre de compétences choisies : ' + checked;
  maFunction();
}
//Cette fonction sert gérer la formation des compétences en focntion de la classe choisie
function formationCompetence() {
  // Récupérer toutes les cases à cocher dans le DIV chkCompetence avec toutes les conditions exprimées en une fois
  const checkboxes = document.querySelectorAll('#chkCompetence > input[type="checkbox"]');
  checkboxes.forEach((item: any) => {
    const chk: HTMLInputElement = item;
    switch (chk.id) {
      case 'idAcrobaties':
        testPerso.FAcrobaties = attributionFormationCompetence(chk.checked);
        break;
      case 'idArcanes': 
        testPerso.FArcanes = attributionFormationCompetence(chk.checked);
        break;
      case 'idAthletisme':
        testPerso.FAthletisme = attributionFormationCompetence(chk.checked);
        break;
      case 'idBluff': 
      testPerso.FBluff = attributionFormationCompetence(chk.checked);
        break;
      case 'idConnDeLaRue': 
      testPerso.FConnDeLaRue = attributionFormationCompetence(chk.checked);
        break;
      case 'idDiplomatie':
        testPerso.FDiplomatie = attributionFormationCompetence(chk.checked);
        break;
      case 'idDiscretion':
        testPerso.FDiscretion = attributionFormationCompetence(chk.checked);
        break;
      case 'idEndurance':
        testPerso.FEndurance = attributionFormationCompetence(chk.checked);
        break;
      case 'idExploration':
        testPerso.FExploration = attributionFormationCompetence(chk.checked);
        break;
      case 'idHistoire':
        testPerso.FHistoire = attributionFormationCompetence(chk.checked);
        break;
      case 'idIntimidation':
        testPerso.FIntimidation = attributionFormationCompetence(chk.checked);
        break;
      case 'idIntuition':
        testPerso.FIntuition = attributionFormationCompetence(chk.checked);
        break;
      case 'idLarcin':
        testPerso.FLarcin = attributionFormationCompetence(chk.checked);
        break;
      case 'idNature':
        testPerso.FNature = attributionFormationCompetence(chk.checked);
        break;
      case 'idPerception':
        testPerso.FPerception = attributionFormationCompetence(chk.checked);
        break;
      case 'idReligion':
        testPerso.FReligion = attributionFormationCompetence(chk.checked);
        break;
      case 'idSoins':
        testPerso.FSoins = attributionFormationCompetence(chk.checked);
        break;
      default:
        break;
    }
  })
}
//Cette fonction est appellée par formationCompetence pour attribuer les 5 points dans la propriété de Personnage en cas de cochage de la compétence
function attributionFormationCompetence(chk: boolean): number {
  if (chk) { return 5; } 
  else { return 0; }
}