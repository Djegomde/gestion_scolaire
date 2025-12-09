import { Bulletin, Evaluation } from "./modules/evaluation.js";
import { Cours } from "./modules/Pedagogie.js";
import { Eleve,Enseignant } from "./modules/Personnes.js";
import { Etablissement,Classe } from "./modules/Structure.js";





// Liste des Eleves
const listeEleve  = [
    {
        nom: "Diallo",
        prenom: "Aminata",
        sexe: "F",
        date_naiss: "2007-03-15",
        lieu_naiss: "N'Djamena"
    },
    {
        nom: "Ngaryo",
        prenom: "Brahim",
        sexe: "M",
        date_naiss: "2006-11-02",
        lieu_naiss: "Moundou"
    },
    {
        nom: "Tchoumba",
        prenom: "Mariam",
        sexe: "F",
        date_naiss: "2008-06-21",
        lieu_naiss: "Sarh"
    },
    {
        nom: "Oumar",
        prenom: "Ismaël",
        sexe: "M",
        date_naiss: "2007-01-10",
        lieu_naiss: "Abéché"
    },
    {
        nom: "Kassir",
        prenom: "Sara",
        sexe: "F",
        date_naiss: "2006-09-30",
        lieu_naiss: "Bongor"
    }
];

// Listes de Cours 
const matieres = [
    {
        nomMatiere: "Mathématiques",
        domaine: "Sciences",
        coefficient: 5,
        classe: "2nd",
        enseignant: "Mme Dupont"
    },
    {
        nomMatiere: "Physique-Chimie",
        domaine: "Sciences",
        coefficient: 4,
        classe: "1ère S",
        enseignant: "M. Leroy"
    },
    {
        nomMatiere: "Histoire-Géographie",
        domaine: "Lettres & Sciences humaines",
        coefficient: 3,
        classe: "Terminale",
        enseignant: "Mme Bernard"
    },
    {
        nomMatiere: "Anglais",
        domaine: "Langues",
        coefficient: 2,
        classe: "2nd",
        enseignant: "M. Johnson"
    },
    {
        nomMatiere: "Informatique",
        domaine: "Technologie",
        coefficient: 4,
        classe: "1ère STI2D",
        enseignant: "Mme Fontaine"
    }
];
// Liste des evalautions 
const evaluations = [
    // --- Élève : Aminata Diallo (4 évaluations) ---
    {
        valeur: 14,
        type: "Devoir",
        date: "2024-10-05",
        cours: {
            nomMatiere: "Mathématiques",
            domaine: "Sciences",
            coefficient: 5,
            classe: "2nd",
            enseignant: "Mme Dupont"
        },
        eleve: {
            nom: "Diallo",
            prenom: "Aminata",
            sexe: "F",
            date_naiss: "2007-03-15",
            lieu_naiss: "N'Djamena"
        }
    },
    {
        valeur: 16,
        type: "Devoir",
        date: "2024-11-12",
        cours: {
            nomMatiere: "Anglais",
            domaine: "Langues",
            coefficient: 2,
            classe: "2nd",
            enseignant: "M. Johnson"
        },
        eleve: {
            nom: "Diallo",
            prenom: "Aminata",
            sexe: "F",
            date_naiss: "2007-03-15",
            lieu_naiss: "N'Djamena"
        }
    },
    {
        valeur: 12,
        type: "Composition",
        date: "2024-12-01",
        cours: {
            nomMatiere: "Anglais",
            domaine: "Langues",
            coefficient: 2,
            classe: "1ère S",
            enseignant: "M. Leroy"
        },
        eleve: {
            nom: "Diallo",
            prenom: "Aminata",
            sexe: "F",
            date_naiss: "2007-03-15",
            lieu_naiss: "N'Djamena"
        }
    },
    {
        valeur: 15,
        type: "Composition",
        date: "2024-12-18",
        cours: {
            nomMatiere: "Mathématiques",
            domaine: "Sciences",
            coefficient: 5,
            classe: "2nd",
            enseignant: "Mme Dupont"
        },
        eleve: {
            nom: "Diallo",
            prenom: "Aminata",
            sexe: "F",
            date_naiss: "2007-03-15",
            lieu_naiss: "N'Djamena"
        }
    },

    // --- Élève : Brahim Ngaryo ---
    {
        valeur: 10,
        type: "Devoir",
        date: "2024-10-09",
        cours: {
            nomMatiere: "Informatique",
            domaine: "Technologie",
            coefficient: 4,
            classe: "1ère STI2D",
            enseignant: "Mme Fontaine"
        },
        eleve: {
            nom: "Ngaryo",
            prenom: "Brahim",
            sexe: "M",
            date_naiss: "2006-11-02",
            lieu_naiss: "Moundou"
        }
    },

    // --- Élève : Mariam Tchoumba ---
    {
        valeur: 13,
        type: "composition",
        date: "2024-11-28",
        cours: {
            nomMatiere: "Histoire-Géographie",
            domaine: "Lettres & Sciences humaines",
            coefficient: 3,
            classe: "Terminale",
            enseignant: "Mme Bernard"
        },
        eleve: {
            nom: "Tchoumba",
            prenom: "Mariam",
            sexe: "F",
            date_naiss: "2008-06-21",
            lieu_naiss: "Sarh"
        }
    },

    // --- Élève : Ismaël Oumar ---
    {
        valeur: 17,
        type: "devoir",
        date: "2024-10-20",
        cours: {
            nomMatiere: "Mathématiques",
            domaine: "Sciences",
            coefficient: 5,
            classe: "2nd",
            enseignant: "Mme Dupont"
        },
        eleve: {
            nom: "Oumar",
            prenom: "Ismaël",
            sexe: "M",
            date_naiss: "2007-01-10",
            lieu_naiss: "Abéché"
        }
    },

    // --- Élève : Sara Kassir ---
    {
        valeur: 9,
        type: "devoir",
        date: "2024-09-18",
        cours: {
            nomMatiere: "Anglais",
            domaine: "Langues",
            coefficient: 2,
            classe: "2nd",
            enseignant: "M. Johnson"
        },
        eleve: {
            nom: "Kassir",
            prenom: "Sara",
            sexe: "F",
            date_naiss: "2006-09-30",
            lieu_naiss: "Bongor"
        }
    },
    {
        valeur: 11,
        type: "composition",
        date: "2024-12-10",
        cours: {
            nomMatiere: "Informatique",
            domaine: "Technologie",
            coefficient: 4,
            classe: "1ère STI2D",
            enseignant: "Mme Fontaine"
        },
        eleve: {
            nom: "Kassir",
            prenom: "Sara",
            sexe: "F",
            date_naiss: "2006-09-30",
            lieu_naiss: "Bongor"
        }
    },

    // --- Encore Brahim ---
    {
        valeur: 14,
        type: "composition",
        date: "2024-12-15",
        cours: {
            nomMatiere: "Physique-Chimie",
            domaine: "Sciences",
            coefficient: 4,
            classe: "1ère S",
            enseignant: "M. Leroy"
        },
        eleve: {
            nom: "Ngaryo",
            prenom: "Brahim",
            sexe: "M",
            date_naiss: "2006-11-02",
            lieu_naiss: "Moundou"
        }
    }
];

const eleveAminata = {
 
            nom: "Diallo",
            prenom: "Aminata",
            sexe: "F",
            date_naiss: "2007-03-15",
            lieu_naiss: "N'Djamena"
    
}
let eleve1 = new Eleve(eleveAminata);


let bulletin1 = new Bulletin(1,eleve1,evaluations);
console.log(bulletin1);
console.log(bulletin1. moyenne());

/*let enstes = {
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
//console.log(cours1.description);


let evaluation = new Evaluation(15,"devoir","12/12/2025",cours1,eleve1);
console.log(evaluation.description);*/
