import { Personnage } from "./model/personnage.js";
import { RaceData } from "./data/RaceData.js";
import { ClasseData } from "./data/ClasseData.js";
import { Race } from "./model/race.js";
import { Classe } from "./model/classe.js";
import { listeTalent } from "./model/talent.js";
for (let i = 0; i < 30; i++) {
    let tex1 = "Caractéristique : " + i + " Modificateur : ";
    let tex2 = "<br/>";
    document.getElementById('spanTest').innerHTML += tex1 + (Math.ceil((i - 11) / 2)).toString() + tex2;
    /*if(i > 10){
      (document.getElementById('spanTest') as HTMLSpanElement).innerHTML += tex1 + (Math.ceil((i-11)/2)).toString() + tex2;
    }
    else {
      (document.getElementById('spanTest') as HTMLSpanElement).innerHTML += tex1 + (Math.floor((i-10)/2)).toString() + tex2;
    }*/
}
populateDropdownList('ddlRace', RaceData, 'IdRace', 'NomRace');
populateDropdownList('ddlClasse', ClasseData, 'IdClasse', 'NomClasse');
var testPerso = new Personnage(parseInt(document.getElementById('txtForce')?.value), parseInt(document.getElementById('txtConstitution')?.value), parseInt(document.getElementById('txtDexterite')?.value), parseInt(document.getElementById('txtIntelligence')?.value), parseInt(document.getElementById('txtSagesse')?.value), parseInt(document.getElementById('txtCharisme')?.value), parseInt(document.getElementById('txtPointExperience')?.value), document.getElementById('ddlRace')?.value, document.getElementById('ddlClasse')?.value);
listeTalent(testPerso);
export function maFunction() {
    //console.log('ici cest bien App');
    //console.log((document.getElementById('ddlRace') as HTMLSelectElement)?.value);
    testPerso.Bforce = parseInt(document.getElementById('txtForce')?.value);
    testPerso.Bconstitution = parseInt(document.getElementById('txtConstitution')?.value);
    testPerso.Bdexterite = parseInt(document.getElementById('txtDexterite')?.value);
    testPerso.Bintelligence = parseInt(document.getElementById('txtIntelligence')?.value);
    testPerso.Bsagesse = parseInt(document.getElementById('txtSagesse')?.value);
    testPerso.Bcharisme = parseInt(document.getElementById('txtCharisme')?.value);
    testPerso.race = new Race(document.getElementById('ddlRace')?.value);
    testPerso.classe = new Classe(document.getElementById('ddlClasse')?.value);
    testPerso.pointExperience = parseInt(document.getElementById('txtPointExperience')?.value);
    formationCompetence();
    //Etat civil du personnage
    //document.getElementById("spRace")!.innerHTML = testPerso.race.nomRace.toString();
    //document.getElementById("spClasse")!.innerHTML = testPerso.classe.nomClasse.toString();
    document.getElementById("spVoieParangonique").innerHTML = testPerso.VoieParangonique.toString();
    document.getElementById("spDestineeEpique").innerHTML = testPerso.DestineeEpique.toString();
    document.getElementById("spNiveau").innerHTML = testPerso.niveau.toString();
    document.getElementById("spDemiNiveau").innerHTML = testPerso.demiNiveau.toString();
    //Caractéristiqueq du personnage
    document.getElementById("spForce").innerHTML = testPerso.Pforce.toString();
    document.getElementById("spConstitution").innerHTML = testPerso.Pconstitution.toString();
    document.getElementById("spDexterite").innerHTML = testPerso.Pdexterite.toString();
    document.getElementById("spIntelligence").innerHTML = testPerso.Pintelligence.toString();
    document.getElementById("spSagesse").innerHTML = testPerso.Psagesse.toString();
    document.getElementById("spCharisme").innerHTML = testPerso.Pcharisme.toString();
    document.getElementById("spModForce").innerHTML = testPerso.ModForce.toString();
    document.getElementById("spModConstitution").innerHTML = testPerso.ModConstitution.toString();
    document.getElementById("spModDexterite").innerHTML = testPerso.ModDexterite.toString();
    document.getElementById("spModIntelligence").innerHTML = testPerso.ModIntelligence.toString();
    document.getElementById("spModSagesse").innerHTML = testPerso.ModSagesse.toString();
    document.getElementById("spModCharisme").innerHTML = testPerso.ModCharisme.toString();
    //Défenses du personnage
    document.getElementById("spCA").innerHTML = testPerso.CA.toString();
    document.getElementById("spVigueur").innerHTML = testPerso.Vigueur.toString();
    document.getElementById("spReflexes").innerHTML = testPerso.Reflexes.toString();
    document.getElementById("spVolonte").innerHTML = testPerso.Volonte.toString();
    //les autres trucs du personnage
    document.getElementById("spInitiative").innerHTML = testPerso.Initiative.toString();
    document.getElementById("spVitesse").innerHTML = testPerso.Vitesse.toString();
    document.getElementById("spPV").innerHTML = testPerso.PV.toString();
    document.getElementById("spPéril").innerHTML = testPerso.Peril.toString();
    document.getElementById("spRecuperation").innerHTML = testPerso.Recuperation.toString();
    document.getElementById("spRecuperationParjour").innerHTML = testPerso.RecuperationParjour.toString();
    //Affichage des compétences
    document.getElementById('spAcrobaties').innerHTML = testPerso.PAcrobaties.toString();
    document.getElementById('spArcanes').innerHTML = testPerso.PArcanes.toString();
    document.getElementById('spAthletisme').innerHTML = testPerso.PAthletisme.toString();
    document.getElementById('spBluff').innerHTML = testPerso.PBluff.toString();
    document.getElementById('spConn de la rue').innerHTML = testPerso.PConnDeLaRue.toString();
    document.getElementById('spDiplomatie').innerHTML = testPerso.PDiplomatie.toString();
    document.getElementById('spDiscretion').innerHTML = testPerso.PDiscretion.toString();
    document.getElementById('spEndurance').innerHTML = testPerso.PEndurance.toString();
    document.getElementById('spExploration').innerHTML = testPerso.PExploration.toString();
    document.getElementById('spHistoire').innerHTML = testPerso.PHistoire.toString();
    document.getElementById('spIntimidation').innerHTML = testPerso.PIntimidation.toString();
    document.getElementById('spIntuition').innerHTML = testPerso.PIntuition.toString();
    document.getElementById('spLarcin').innerHTML = testPerso.PLarcin.toString();
    document.getElementById('spNature').innerHTML = testPerso.PNature.toString();
    document.getElementById('spPerception').innerHTML = testPerso.PPerception.toString();
    document.getElementById('spReligion').innerHTML = testPerso.PReligion.toString();
    document.getElementById('spSoins').innerHTML = testPerso.PSoins.toString();
    //console.log(testPerso);
}
window.maFunction = maFunction;
document.getElementById('txtForce').onchange = function (monEvent) {
    maFunction();
};
document.getElementById('txtConstitution').onchange = function (monEvent) {
    maFunction();
};
document.getElementById('txtDexterite').onchange = function (monEvent) {
    maFunction();
};
document.getElementById('txtIntelligence').onchange = function (monEvent) {
    maFunction();
};
document.getElementById('txtSagesse').onchange = function (monEvent) {
    maFunction();
};
document.getElementById('txtCharisme').onchange = function (monEvent) {
    maFunction();
};
document.getElementById('ddlRace').onchange = function (monEvent) {
    maFunction();
    listeTalent(testPerso);
};
document.getElementById('txtPointExperience').onchange = function (monEvent) {
    maFunction();
};
document.getElementById('ddlClasse').onchange = function (monEvent) {
    const divComp = document.getElementById('chkCompetence');
    divComp.replaceChildren();
    const spanAlerte = document.getElementById('spanAlerte');
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
    const comptenceClasse = Object.entries(choixClasse?.Competence);
    //Récupération du nombre de compétence.
    let nbComptence = 0;
    comptenceClasse.forEach((item) => {
        if (item[1] === 'x') {
            nbComptence++;
        }
    });
    //Affichage du nombre de compétence au dessus de la liste.
    const lblAffichageComptenceAChoisir = document.createElement('span');
    lblAffichageComptenceAChoisir.textContent = 'Nombre de compétences à choisir : ' + choixClasse?.NombreCompetence?.toString();
    lblAffichageComptenceAChoisir.style.display = "Block";
    const lblAffichageComptenceChoisie = document.createElement('span');
    lblAffichageComptenceChoisie.textContent = 'Nombre de compétences choisies : 0';
    lblAffichageComptenceChoisie.style.display = "Block";
    lblAffichageComptenceChoisie.id = "spanComptageCompetence";
    divComp.appendChild(lblAffichageComptenceAChoisir);
    divComp.appendChild(lblAffichageComptenceChoisie);
    //Affichage des cases à cocher pour les compétences disponbiles par classe.
    comptenceClasse.forEach((item) => {
        const leBR = document.createElement('br');
        const caseAcocher = document.createElement('input');
        caseAcocher.type = 'checkbox';
        caseAcocher.id = "id" + item[0];
        caseAcocher.name = "nom" + item[0];
        caseAcocher.setAttribute("data-oblige", item[1]);
        caseAcocher.onchange = function (event) {
            comptageCaseCoche(choixClasse?.NombreCompetence !== undefined ? choixClasse.NombreCompetence : 0, caseAcocher.id);
        };
        if (item[1] === 'o') {
            caseAcocher.checked = true;
            caseAcocher.disabled = true;
        }
        divComp.appendChild(caseAcocher);
        const labelCHK = document.createElement('label');
        labelCHK.textContent = item[0];
        labelCHK.htmlFor = caseAcocher.id;
        divComp.appendChild(labelCHK);
        divComp.appendChild(leBR);
    });
    maFunction();
    listeTalent(testPerso);
};
//Cette fonction permet de peupler une DDL avec des données venant d'une struture JSON qui mise en place grâce à l'interface HTMLData.
async function populateDropdownList(DDL, dataSource, valueFieldName, textFieldName) {
    const htmlData = dataSource.map((data) => {
        return {
            HTMLValue: data[valueFieldName],
            HTMLText: data[textFieldName],
        };
    });
    const ddlARemplir = document.getElementById(DDL);
    if (ddlARemplir !== null) {
        htmlData.forEach((item) => {
            const option = document.createElement('option');
            option.value = item.HTMLValue;
            option.text = item.HTMLText;
            ddlARemplir.add(option);
        });
    }
    else {
        console.error("Element with ID 'ddl' not found");
    }
}
//Cette fonction sert à gérer le comptage de compétences choisies en fonction du nombre de compétence que la classe permet de prendre.
async function comptageCaseCoche(nbComptence, chkID) {
    const classeChoisie = document.getElementById('ddlClasse');
    //Gestion du cas particulier du Rôdeur
    if (classeChoisie.value === "Rodeur") {
        const competenceJusteCLicke = document.getElementById(chkID);
        ;
        const exploration = document.getElementById('idExploration');
        const nature = document.getElementById('idNature');
        if (chkID === 'idExploration' && exploration.checked && !nature.checked) {
            nature.setAttribute('data-oblige', "x");
            exploration.setAttribute('data-oblige', "oc");
        }
        else if (chkID === 'idNature' && !exploration.checked && nature.checked) {
            exploration.setAttribute('data-oblige', "x");
            nature.setAttribute('data-oblige', "oc");
        }
        else if (chkID === 'idExploration' && !exploration.checked && !nature.checked) {
            nature.setAttribute('data-oblige', "c");
            exploration.setAttribute('data-oblige', "c");
        }
        else if (chkID === 'idNature' && !exploration.checked && !nature.checked) {
            nature.setAttribute('data-oblige', "c");
            exploration.setAttribute('data-oblige', "c");
        }
        else if (chkID === 'idExploration' && exploration.checked && nature.checked) {
        }
        else if (chkID === 'idNature' && exploration.checked && nature.checked) {
        }
        else if (chkID === 'idExploration' && !exploration.checked && nature.checked) {
            if (nature.getAttribute('data-oblige') === "x") {
                nature.setAttribute('data-oblige', "oc");
                exploration.setAttribute('data-oblige', "x");
            }
        }
        else if (chkID === 'idNature' && exploration.checked && !nature.checked) {
            if (exploration.getAttribute('data-oblige') === "x") {
                exploration.setAttribute('data-oblige', "oc");
                nature.setAttribute('data-oblige', "x");
            }
        }
    }
    // Récupérer toutes les cases à cocher dans le DIV chkCompetence avec toutes les conditions exprimées en une fois
    const checkboxes = document.querySelectorAll('#chkCompetence > input[type="checkbox"][data-oblige="x"]:checked');
    // Compter le nombre de cases cochées par le longueur du tableau
    let checked = Array.from(checkboxes).length;
    //Tester si on ne dépasse pas la limite du nombre de compétences.
    const spanAlerte = document.getElementById('spanAlerte');
    const chkCompetence = document.getElementById(chkID);
    if (checked > nbComptence) {
        spanAlerte.style.display = "block";
        chkCompetence.checked = false;
        checked--;
    }
    else {
        spanAlerte.style.display = "none";
    }
    // Afficher le comptage dans le SPAN prévu à cet effet.  
    document.getElementById('spanComptageCompetence').textContent = 'Nombre de compétences choisies : ' + checked;
    //spanComptageCompetence.textContent = 'Nombre de compétences choisies : ' + checked;
    maFunction();
}
//Cette fonction sert gérer la formation des compétences en focntion de la classe choisie
function formationCompetence() {
    // Récupérer toutes les cases à cocher dans le DIV chkCompetence avec toutes les conditions exprimées en une fois
    const checkboxes = document.querySelectorAll('#chkCompetence > input[type="checkbox"]');
    checkboxes.forEach((item) => {
        const chk = item;
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
    });
}
//Cette fonction est appellée par formationCompetence pour attribuer les 5 points dans la propriété de Personnage en cas de cochage de la compétence
function attributionFormationCompetence(chk) {
    if (chk) {
        return 5;
    }
    else {
        return 0;
    }
}
