export class Cours {
    constructor({nomMatiere,domaine,coefficient,description}) {
        this._nomMatiere = nomMatiere;
        this._domaine = domaine;
        this._coefficient = coefficient;
        this._description = description;
        this.listEvaluation = [];
        
    }
    listCours=[];

    get nomMatiere(){return this._nomMatiere};
    get domaine(){ return this._domaine};
    get coefficient(){return this._coefficient};
    get description(){return this._description};

    set nomMatiere(value){this._nomMatiere = value};
    set domaine(value){this._domaine=value};
    set coefficient(value){this._coefficient=(value>0)?value:0};
    set domaine(value){this._description=value};



}