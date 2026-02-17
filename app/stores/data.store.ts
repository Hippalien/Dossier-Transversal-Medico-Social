import { defineStore } from 'pinia'
import type { DossierComplet, Evenement } from "~/types/dossier";
import initialData from "~/assets/data/test.json";

    export const useDataStore = defineStore('data', () => {

    const dossier = ref<DossierComplet>(initialData as DossierComplet)
        

async function addEvent(newEvent: Omit<Evenement, 'id'>) {
    const eventWithId = {
        ...newEvent,
        id: `evt-${Math.random().toString(36).substr(2, 9)}`
    };
    dossier.value.parcours.push(eventWithId);
}

async function exportData() {
    const dataString = JSON.stringify(dossier.value, null, 2);
    const blob = new Blob([dataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dossier_${dossier.value.id}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}   

return {
    dossier,
    addEvent,
    exportData        
    }
    })