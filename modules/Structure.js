export class Etablissement {
    constructor(nom){
        this._nom  = nom;
        this.listeClasse = [];
    }

    get nom(){return this._nom};

    // Ajouter une classe 
    addClass(cl){
        if (cl instanceof Classe) {
      let exist = this.listeClasse.some(classe=>classe.nom===cl.nom && classe.anneScolaire===cl.anneScolaire);

      if(!exist){
        this.listeClasse.push(cl);
      }

        }
    }
   
    

// Supprimer une classe
    deleteClasse(cl){
        if (cl instanceof Classe) {
             let index = this.listeClasse.findIndex((classe)=>classe.nom===cl.nom && classe.anneScolaire ===cl.anneScolaire);
            if (index!==-1) {
                this.listeClasse.splice(index,1);
                this.displayClasse(); 
            }else{
                console.log("Aucun élément correspondant!")
            }
        }
       

        
    }
// Afficher la liste des classes de l'établissement
    displayClasse(){
        return this.listeClasse.forEach((classe)=>console.log(`${classe.nom}  ${classe.anneScolaire}`))
    }

    // Mise à jour une classe

    updateClasse(cl, nom, anneSco){
        if (cl instanceof Classe) {
             let findIndexClass = this.listeClasse.findIndex(classe=>classe.nom===cl.nom && classe.anneScolaire===cl.anneScolaire);

             if (findIndexClass!==-1) {
                this.listeClasse[findIndexClass]._nom = nom;
                this.listeClasse[findIndexClass]._anneScolaire = anneSco;
             }
        }
       
    }


}

export class Classe {
    constructor({nom,anneScolaire}) {
        this._nom = nom;
        this._anneScolaire = anneScolaire;
        this.listeEleve = [];
        this.listeCours = [];
    }

    get nom () { return this._nom;}
    get anneScolaire(){return this._anneScolaire};
}

