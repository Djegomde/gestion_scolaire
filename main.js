import { Eleve,Enseignant } from "./modules/Personnes.js";

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
console.log(ens)