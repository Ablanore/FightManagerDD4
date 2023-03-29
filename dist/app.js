import { Personnage } from "./model/personnage.js";
import { RaceData } from "./data/RaceData.js";
import { ClasseData } from "./data/ClasseData.js";
export function maFunction() {
    //console.log('ici cest bien App');
    //console.log((document.getElementById('ddlRace') as HTMLSelectElement)?.value);
    var testPerso = new Personnage(parseInt(document.getElementById('txtForce')?.value), parseInt(document.getElementById('txtConstitution')?.value), parseInt(document.getElementById('txtDexterite')?.value), parseInt(document.getElementById('txtIntelligence')?.value), parseInt(document.getElementById('txtSagesse')?.value), parseInt(document.getElementById('txtCharisme')?.value), parseInt(document.getElementById('txtPointExperience')?.value), document.getElementById('ddlRace')?.value, document.getElementById('ddlClasse')?.value);
    document.getElementById("spNiveau").innerHTML = testPerso.niveau.toString();
    document.getElementById("spVoieParangonique").innerHTML = testPerso.VoieParangonique.toString();
    document.getElementById("spDestineeEpique").innerHTML = testPerso.DestineeEpique.toString();
    document.getElementById("spForce").innerHTML = testPerso.Pforce.toString();
    document.getElementById("spConstitution").innerHTML = testPerso.Pconstitution.toString();
    document.getElementById("spDexterite").innerHTML = testPerso.Pdexterite.toString();
    document.getElementById("spIntelligence").innerHTML = testPerso.Pintelligence.toString();
    document.getElementById("spSagesse").innerHTML = testPerso.Psagesse.toString();
    document.getElementById("spCharisme").innerHTML = testPerso.Pcharisme.toString();
    document.getElementById("spCA").innerHTML = testPerso.CA.toString();
    document.getElementById("spVigueur").innerHTML = testPerso.Vigueur.toString();
    document.getElementById("spReflexes").innerHTML = testPerso.Reflexes.toString();
    document.getElementById("spVolonte").innerHTML = testPerso.Volonte.toString();
    document.getElementById("spInitiative").innerHTML = testPerso.Initiative.toString();
    document.getElementById("spVitesse").innerHTML = testPerso.Vitesse.toString();
    document.getElementById("spPV").innerHTML = testPerso.PV.toString();
    document.getElementById("spPéril").innerHTML = testPerso.Peril.toString();
    document.getElementById("spRecuperation").innerHTML = testPerso.Recuperation.toString();
    document.getElementById("spRecuperationParjour").innerHTML = testPerso.RecuperationParjour.toString();
    document.getElementById("spDemiNiveau").innerHTML = testPerso.demiNiveau.toString();
    document.getElementById("spModForce").innerHTML = testPerso.ModForce.toString();
    document.getElementById("spModConstitution").innerHTML = testPerso.ModConstitution.toString();
    document.getElementById("spModDexterite").innerHTML = testPerso.ModDexterite.toString();
    document.getElementById("spModIntelligence").innerHTML = testPerso.ModIntelligence.toString();
    document.getElementById("spModSagesse").innerHTML = testPerso.ModSagesse.toString();
    document.getElementById("spModCharisme").innerHTML = testPerso.ModCharisme.toString();
}
window.maFunction = maFunction;
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
populateDropdownList('ddlRace', RaceData, 'IdRace', 'NomRace');
populateDropdownList('ddlClasse', ClasseData, 'IdClasse', 'NomClasse');
