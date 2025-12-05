import { Evaluation } from "./evaluation";

export class Cours {
    constructor({nomMatiere,domaine,coefficient,description}) {
        this._nomMatiere = nomMatiere;
        this._domaine = domaine;
        this._coefficient = coefficient;
        this._description = description;
        this.listEvaluation = [];
        
    }


    get nomMatiere(){return this._nomMatiere};
    get domaine(){ return this._domaine};
    get coefficient(){return this._coefficient};
    get description(){return this._description};

    set nomMatiere(value){this._nomMatiere = value};
    set domaine(value){this._domaine=value};
    set coefficient(value){this._coefficient=(value>0)?value:0};
    set domaine(value){this._description=value};


// Ajouter Evaluation
    addEvaluation(value){
        if (value instanceof Evaluation) {
            let existEval = this.listEvaluation.some(evaluation=>evaluation._nomMatiere===value._nomMatiere);

            if (!existEval) {
                this.listEvaluation.push(value)
            }
            
        }
    }

// Supprimer une Evaluation de la liste des Evaluations
deleteEvaluation(value){
    if (value instanceof Evaluation) {
        let findIndexEval = this.listEvaluation.findIndex(evaluation=>evaluation._nomMatiere===value._nomMatiere);
        if (findIndexEval!==-1) {
            this.listEvaluation.splice(findIndexEval,1);
        }
    }
}

// Afficher les Evaluations
displayEvaluation(){
    return this.listEvaluation.forEach(evaluation=>console.log(`${evaluation._nomMatiere} - ${evaluation._coefficient} - ${evaluation._domaine}`))
}



}