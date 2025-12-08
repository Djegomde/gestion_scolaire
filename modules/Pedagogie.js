export class Cours {
    constructor(nomMatiere,domaine,coefficient,classe,enseignant) {
        this._nomMatiere = nomMatiere;
        this._domaine = domaine;
        this._coefficient = coefficient;
        this.classe = classe;
        this.enseignant = enseignant;

    }


    get nomMatiere(){return this._nomMatiere};
    get domaine(){ return this._domaine};
    get coefficient(){return this._coefficient};

    set nomMatiere(value){this._nomMatiere = value};
    set domaine(value){this._domaine=value};
    set coefficient(value){this._coefficient=(value>0)?value:0};
    set domaine(value){this._description=value};

      get description() {
        return `Cours : ${this.nomMatiere} (Coef: ${this.coefficient})
                Enseignant : ${this.enseignant.nom}
                Classe : ${this.classe.nom}`;
    }

}