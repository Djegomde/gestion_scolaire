export class Evaluation {
    constructor(valeur,type,date,cours,eleve) {
        this._valeur = valeur;
        this._type = type;
        this._dateEvaluation = date;
        this.cours = cours;
        this.eleve = eleve;
    }

      get observation() {
        const note = this._valeur;
        switch (true) {
            case (note < 0 || note > 20): return "Note invalide";
            case (note <= 5):  return "Nulle";
            case (note <= 7):  return "Médiocre";
            case (note < 10):  return "Insuffisant";
            case (note < 11):  return "Moyen";     
            case (note < 12):  return "Passable"; 
            case (note < 14):  return "Assez-Bien";
            case (note < 16):  return "Bien";
            case (note < 19):  return "Très-Bien";
            case (note <= 20): return "Excellent";
            default: return "Non noté";
        }
    }

    
    get description(){
        return `Evaluation :  
          Type : ${this._type}\n
          Note obtenue = ${this._valeur}/20 => Observation : ${this.observation}\n
          Date :  ${this._dateEvaluation}\n
          Cours : ${this.cours.nomMatiere}\n
          Eleve : ${this.eleve.nom}\n
          Classe : ${this.cours.classe.nom}\n
          `;
    }

}

export class Bulletin {
    constructor(trimestre,eleve,ensembleNotes) {
        this._trimestre = trimestre;
        this.eleve = eleve;
        this.ensembleNotes = ensembleNotes.filter(item =>  item.eleve.prenom===this.eleve.prenom && item.eleve.nom===this.eleve.nom);
    }
   
    tabDiscipline(){
        let tabDiscipline = [];
         for (const key in this.ensembleNotes) {
         tabDiscipline .push(this.ensembleNotes[key].cours.nomMatiere);
        }
        return tabDiscipline;

    }

    tabCoef(){
        let tabcoefs = [];
        for (const key in this.ensembleNotes) {
         tabcoefs.push(this.ensembleNotes[key].cours.coefficient);
        }
        return tabcoefs;
    }

    tabMoyenDevoir(){
        let tabMoyDev = [];
        for (const key in this.ensembleNotes) {
            if (this.ensembleNotes[key].type==="Devoir") {
                tabMoyDev.push(this.ensembleNotes[key].valeur);
            }
            
        }

        return tabMoyDev;
    }

      tabMoyenCompo(){
        let tabMoyCompo = [];
        for (const key in this.ensembleNotes) {
            if (this.ensembleNotes[key].type==="Composition") {
                tabMoyCompo.push(this.ensembleNotes[key].valeur);
            }
            
        }

        return tabMoyCompo;
    }


   
    tabMoyenneDes2(){
        let tabMoyDes2 = [];
        let tab1 = this.tabMoyenDevoir();
        let tab2 = this.tabMoyenCompo();
        for (let index1 = 0; index1 < tab1.length; index1++) {
          
            for (let index2 = 0; index2 < tab2.length; index2++) {
                if (index1===index2) {
                    let moy = (tab1[index1]+tab2[index2])/2;
                    tabMoyDes2.push(moy);
                }
                
            }
            
        }

        return tabMoyDes2;
    }


    tabMoyenneCoef(){
        let tabMoyCoef = [];
        let tab1 = this.tabCoef();
        let tab2 =  this.tabMoyenneDes2();

        for (let index1 = 0; index1 < tab1.length; index1++) {
          
            for (let index2 = 0; index2 < tab2.length; index2++) {
                
                if (index1===index2) {
                    let moy = tab1[index1]*tab2[index2];
                     tabMoyCoef.push(moy);
                }

               
            }
            
        }
        return tabMoyCoef;
    }


    sommeCoef = ()=>this.tabCoef().reduce((acc, current) =>  acc+current, 0);
    sommeMoyCoef = ()=>this.tabMoyenneCoef().reduce((acc,current)=>acc+current,0);

    moyenne(){
        return this.sommeMoyCoef()/this.sommeCoef();
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