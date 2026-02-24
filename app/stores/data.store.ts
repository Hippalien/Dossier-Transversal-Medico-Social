import type { CategorieEvenement, DossierComplet, Evenement, Importance } from '~/types/dossier'
import { defineStore } from 'pinia'
import initialData from '~/assets/data/test.json'

interface CategoryStyle {
  bg: string
  text: string
  dot: string
  border: string
  badge: string
}

const categoryStyles: Record<CategorieEvenement, CategoryStyle> = {
  Administratif: { bg: 'bg-blue-500', text: 'text-blue-500', dot: 'bg-blue-500', border: 'border-blue-500', badge: 'bg-blue-100 text-blue-700' },
  Éducatif: { bg: 'bg-green-500', text: 'text-green-500', dot: 'bg-green-500', border: 'border-green-500', badge: 'bg-green-100 text-green-700' },
  Santé: { bg: 'bg-red-500', text: 'text-red-500', dot: 'bg-red-500', border: 'border-red-500', badge: 'bg-red-100 text-red-700' },
  Famille: { bg: 'bg-amber-500', text: 'text-amber-500', dot: 'bg-amber-500', border: 'border-amber-500', badge: 'bg-amber-100 text-amber-700' },
}

const defaultStyle: CategoryStyle = { bg: 'bg-gray-800', text: 'text-gray-500', dot: 'bg-gray-400', border: 'border-gray-300', badge: 'bg-gray-100 text-gray-700' }

export function getCategoryStyle(type: CategorieEvenement): CategoryStyle {
  return categoryStyles[type] ?? defaultStyle
}

const importanceBorders: Record<Importance, string> = {
  haute: 'border-red-500',
  moyenne: 'border-yellow-500',
  basse: 'border-gray-300',
}

export function getImportanceBorder(importance: Importance): string {
  return importanceBorders[importance] ?? 'border-gray-300'
}

export const useDataStore = defineStore('data', () => {
  const dossier = ref<DossierComplet>(initialData as DossierComplet)

  const activeFilter = ref<CategorieEvenement | null>(null)

  const filteredParcours = computed(() => {
    if (!activeFilter.value) return dossier.value.parcours
    return dossier.value.parcours.filter(e => e.type === activeFilter.value)
  })

  function setFilter(type: CategorieEvenement | null) {
    activeFilter.value = activeFilter.value === type ? null : type
  }

  async function addEvent(newEvent: Omit<Evenement, 'id'>) {
    const eventWithId = {
      ...newEvent,
      id: `evt-${Math.random().toString(36).substr(2, 9)}`,
    }
    dossier.value.parcours.push(eventWithId)
  }

  async function exportData() {
    const dataString = JSON.stringify(dossier.value, null, 2)
    const blob = new Blob([dataString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `dossier_${dossier.value.id}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return {
    dossier,
    activeFilter,
    filteredParcours,
    setFilter,
    addEvent,
    exportData,
  }
})
