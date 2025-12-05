import { Cours } from "./Pedagogie";
import { Eleve } from "./Personnes";

export class Evaluation {
    constructor(valeur,type,date,appreciation) {
        this._valeur = valeur;
        this._type = type;
        this._dateEvaluation = date;
        this._appreciation = appreciation;
        this.cours = Cours;
        this.eleve = Eleve;
    }
}

export class Bulletin {
    constructor(eleve,trimestre,ensembleNotes) {
        this._trimestre = trimestre;
        this._moyenne = moyenne;
        this._appreciationProf = appreciationProf;
        this._appreciationConseil = appreciationConseil;
        this._sanction = sanction;
        this._distinction = distinction;

    }
}


export const Saction = Object.freeze({
    AVERTISSEMENT1: "Avert.Conduite",
    AVERTISSEMENT2: "Avert.Travail",
    BLAME1: "Blâme Conduite",
    BLAME2 : "Blâme Travail"
});

export const Disctinction = Object.freeze({
    FELICITATION : "Félicitation",
    ENCOURAGEMENT : "Encouragement",
    TABLEAU :"Tableau d'honneur"
})

export const appreciation = Object.freeze({
    MOYEN : "Moyen",
    PASSABLE : "Passable",
    ASSEZ_BIEN:"Assez-Bien",
    TRES_BIEN : "Très-Bien",
    EXCELLENT: "Excellent"
})