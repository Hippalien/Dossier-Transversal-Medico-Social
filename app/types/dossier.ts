export type Importance = 'basse' | 'moyenne' | 'haute'
export type CategorieEvenement = 'Administratif' | 'Éducatif' | 'Santé' | 'Famille'
export interface Evenement {
  id: string
  date: string
  type: CategorieEvenement
  titre: string
  description: string
  structure: string
  auteur: string
  documents?: string[]
  importance: Importance
}

export interface ProfilUsager {
  nom: string
  prenom: string
  dateNaissance: string
  sexe: 'M' | 'F' | 'Autre'
  numeroSecu: string
  allergies: string[]
  regimeAlimentaire: string
  modesCommunication: string[]
  handicaps: string[]
  referentLegal: {
    nom: string
    prenom: string
    lien: string
    telephone: string
    email: string
  }
}

export interface PartageActif {
  id: string
  structure: string
  professionnel: string
  email: string
  dateDebut: string
  dateFin?: string | null
  niveauAcces: string
  permissions: ('lecture' | 'ecriture' | 'ajoutDocument')[]
}

export interface DossierComplet {
  id: string
  profil: ProfilUsager
  parcours: Evenement[]
  partagesActifs: PartageActif[]
  metadata: {
    version: string
    derniereModification: string
    creePar: string
    standardFHIR: string
    consentementUsager: boolean
    consentementDate: string
  }
}
