export class Etablissement {
    constructor(nom){
        this.nom  = nom;
        this.listeClasse = [{}];

    }

    // Ajouter une classe 
    addClass({nom,anneScolair}){
        try {
            if (nom && anneScolair) {
               if (this.listeClasse.some(classe=>classe.nom!==nom)) {
                this.listeClasse.push(new Classe({nom,anneScolaire}));
               }else{
                console.log(`${nom} existe dejà dans la liste!`);
               }
            }else{
                console.log("veuiller remplir tous les champs!");
            }
        } catch (error) {
            console.error(`Une erreur est survenu : ${error}`);
        }
    }

// Supprimer une classe à travers son nom
    deleteClasse(nom){
        let index = this.listeClasse.findIndex((classe)=>classe.nom===nom);
            if (index!==-1) {
                this.listeClasse.splice(index,1);
            }
    }
// Afficher la liste des classes de l'établissement
    displayClasse(){
        return this.listeClasse.forEach((classe)=>console.log(`${classe.nom}  ${classe.anneScolair}`))
    }


}

export class Classe {
    constructor({nom,anneScolaire}) {
        this._nom = nom;
        this._anneScolaire = anneScolaire;
        this.listeEleve = [];
        this.listeCours = [];
    }
}