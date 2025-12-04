export class Personne{
    constructor({nom,prenom,sexe,date_naiss}){
        this._nom = nom;
        this._prenom = prenom;
        this._sexe = sexe;
        this._dateNaiss = date_naiss;
    }

    get nom () { return this._nom}
    get prenom() {return this._prenom}
    get sexe(){return this._sexe}
    get date_naiss(){ return this._dateNaiss};

    get fullName(){return this._nom+" "+this._prenom};

    set nom(n){
        if (n!==null && n.length!==0) {
            this._nom = n;
        }
    };

    set prenom (pr) {
        if (pr!==null && pr.length!==0) {
            this._prenom=pr
        }
    }

    set sexe (value) {
        this._sexe = value;
    }

    set dateNaiss(dateN){
        if (dateN!==null) {
            this._dateNaiss = dateN;
        }
    }
}

export class Eleve extends Personne {
    _lieuNaiss;
    constructor({nom,prenom,sexe,date_naiss,lieu_naiss}){
        super({nom,prenom,sexe,date_naiss});
        this._lieuNaiss = lieu_naiss;
        this.listeEvaluation = [];
      
    }

    get matricule () { return this.matricule = (this.sexe==="F")?"00"+this.sexe+this.fullName.slice(0,3):"00"+this.sexe+this.fullName.slice(0,3)};
    get lieu_naiss(){ return this._lieuNaiss}

    set lieuNaiss (lieu) {
        if (lieu!==null &&lieu.length!==0) {
            this._lieuNaiss=lieu;
        }
    }
    
}

export class Enseignant extends Personne {
    constructor({nom,prenom,sexe,date_naiss,diplome,telephone,email}){
         super({nom,prenom,sexe,date_naiss});
         this._diplome=diplome;
         this._telephone=telephone;
         this._email = email;
         this.listeCours = [];
    }
   
    get diplome () { return this._diplome };
    get telephone(){return this._telephone};
    get email(){return this._email};

    set diplome (diplome) { this._diplome = diplome; }
    set telephone(tel){this._telephone = tel}
    set email(email){this._email = email}


}

