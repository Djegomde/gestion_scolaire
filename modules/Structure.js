import { Eleve } from "./Personnes";

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
    }

    get nom () { return this._nom;}
    get anneScolaire(){return this._anneScolaire};

    // Ajouter un eleve
    addStudent(elev){
        if (elev instanceof Eleve) {
            let existEleve = this.listeEleve.some(eleve=>eleve._nom===elev._nom && eleve._prenom===elev._prenom);
            if (!existEleve) {
                this.listeEleve.push(elev);
            }else{
                console.log(`${elev._nom} ${elev._prenom} existe déjà dans la liste!`)
            }
            
        }
    }
// delete Eleve
    deleteStudent(elev){
        if (elev instanceof Eleve) {
            let indexEleveToDelete = this.listeEleve.findIndex(eleve=>eleve.matricule===elev.matricule);
            if (confirm(`Voulez-vous  vraiment supprimer ${elev.fullName}`)) {
                this.listeEleve.splice(indexEleveToDelete,1);
            }
        }
    }

// Update Eleve
    updateStudent(elevA,eleveN){
    if (elevA && eleveN instanceof Eleve) {
        let indexEleveToUpdate = this.listeEleve.findIndex(eleve=>eleve.matricule===elevA.matricule);
        if (indexEleveToUpdate!==-1) {
            this.listeEleve[indexEleveToUpdate] = eleveN;
        }
    }
    }

 // Trouver un eleve
    findStudent(nom){
        let findit = this.listeCours.find(eleve=>eleve._nom===nom);
        if (findit) {
            console.log(`${findit._nom} ${findit._prenom}`)
        }else{
            console.log("Cet eleve n'existe pas !")
        }
    }   
// Affiche la liste des elèves

    displayStudent(){
        return this.listeEleve.forEach(eleve=>console.log(`${eleve._nom} - ${eleve._prenom} - ${this._nom}`))
    }

  //   Nombre Totale des Eleves dans une classe

    nbTotalEleves = ()=> this.listeEleve.length;

    nbTotalEleveFille = ()=>this.listeEleve.filter(eleve=>eleve.sexe==="F").length;

    nbTotalEleveGarçon=()=>this.listeEleve.filter(eleve=>eleve.sexe==="M").length;


}

