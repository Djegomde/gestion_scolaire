import { Cours } from "./modules/Pedagogie.js";
import { Eleve,Enseignant } from "./modules/Personnes.js";
import { Etablissement,Classe } from "./modules/Structure.js";


let eleveTest = {
    nom : "Djegomde",
    prenom : "Hippolyte",
    sexe : "M",
    date_naiss:"18/12/1996",
    lieu_naiss : "Ndjamena"
}
let eleve1 = new Eleve(eleveTest);
console.log(eleve1);

let enstes = {
    nom : "Djegomde",
    prenom : "Hippolyte",
    sexe : "M",
    date_naiss:"18/12/1965",
    diplome :"licence",
    telephone : "758853550",
    email : "hippolyte@gmail.com"
}
let ens=new Enseignant(enstes);
console.log(ens.fullName)

console.log("test structure")

let cl2 = new Classe({nom:"1L", anneScolaire: "2021"});
let cl3 = new Classe({nom:"3e", anneScolaire: "2021"});
let cl1 = new Classe({nom:"2nd",anneScolaire:"2023"});
let cl4 = new Classe({nom:"4e",anneScolaire:"2023"});
//console.log(cl1)

let etab1 = new Etablissement("pandaré")
etab1.addClass(cl2);
etab1.addClass(cl1);
etab1.addClass(cl1);
etab1.addClass(cl3);
//etab1.addClass(cl4);
//etab1.deleteClasse(cl4);
etab1.updateClasse(cl1,"Terminale","2026");
console.log(etab1)

//console.log(etab1.searchClass("2nd"));

let enseignant = new Enseignant(enstes)
let cours1 = new Cours("Mathématique","scientifique",4,cl1,enseignant);
console.log(cours1.description);

