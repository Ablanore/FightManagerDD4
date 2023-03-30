import { Personnage } from "./model/personnage.js";
import { RaceData } from "./data/RaceData.js";
import { ClasseData } from "./data/ClasseData.js";

export function maFunction() {
    //console.log('ici cest bien App');
    //console.log((document.getElementById('ddlRace') as HTMLSelectElement)?.value);
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
populateDropdownList('ddlRace', RaceData, 'IdRace', 'NomRace');
populateDropdownList('ddlClasse', ClasseData, 'IdClasse', 'NomClasse');

(document.getElementById('ddlClasse') as HTMLSelectElement)!.onchange = function(monEvent: any) {
  const divComp = document.getElementById('chkCompetence') as HTMLDivElement;
  divComp.replaceChildren();
  console.log(monEvent);
  const choixIdClasse = monEvent.target.selectedOptions[0].value;
  const choixClasse = ClasseData.find(classe => classe.IdClasse === choixIdClasse);  
  const comptenceClasse = Object.entries(choixClasse?.Competence as any);
  comptenceClasse.forEach((item: any) => {
    const caseAcocher = document.createElement('input');
    caseAcocher.type = 'checkbox';
    caseAcocher.id = "id" + item[0];
    caseAcocher.name = "nom" + item[0];
    if (item[1] === 'o') {
      caseAcocher.checked = true;
      caseAcocher.disabled = true;
    }
    divComp.appendChild(caseAcocher);
    const labelCHK = document.createElement('label') as HTMLLabelElement;
    labelCHK.textContent = item[0];
    labelCHK.htmlFor = caseAcocher.id;
    divComp.appendChild(labelCHK);
    const leBR = document.createElement('br');
    divComp.appendChild(leBR);
  })
};