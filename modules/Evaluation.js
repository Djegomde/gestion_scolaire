export class Evaluation {
    constructor(valeur,type,date,appreciation) {
        this._valeur = valeur;
        this._type = type;
        this._date = date;
        this._appreciation = appreciation;
    }
}

export class Bulletin {
    constructor(trimestre,moyenneGenerale,appreciationConseil,sanction,distinction) {
        this._trimestre = trimestre;
        this._moyenneGenerale = moyenneGenerale;
        this._appreciationConseil = appreciationConseil;
        this._sanction = sanction;
        this._distinction = distinction;
    }
}

