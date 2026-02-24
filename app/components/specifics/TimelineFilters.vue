<script setup lang="ts">
import type { CategorieEvenement } from '~/types/dossier'
import { FunnelIcon } from '@heroicons/vue/24/outline'
import { getCategoryStyle } from '~/stores/data.store'

const store = useDataStore()
const { dossier, activeFilter } = storeToRefs(store)
const { setFilter } = store

function activeClass(type: CategorieEvenement | null) {
  if (activeFilter.value !== type)
    return ''
  const bg = type
    ? getCategoryStyle(type).bg
    : 'bg-gray-800'
  return `${bg} text-white`
}

interface FilterItem {
  label: string
  value: number
  type: CategorieEvenement | null
}

const filters = computed<FilterItem[]>(() => {
  const parcours = dossier.value.parcours
  return [
    { label: 'Tous', value: parcours.length, type: null },
    { label: 'Santé', value: parcours.filter(e => e.type === 'Santé').length, type: 'Santé' },
    { label: 'Administratif', value: parcours.filter(e => e.type === 'Administratif').length, type: 'Administratif' },
    { label: 'Éducatif', value: parcours.filter(e => e.type === 'Éducatif').length, type: 'Éducatif' },
  ]
})
</script>

<template>
  <div class="border border-gray-200 shadow-md w-full rounded-xl bg-white p-4 flex items-center gap-4">
    <p class="flex items-center gap-1">
      <FunnelIcon class="w-4 h-4 font-semibold text-gray-800" />
      Filtrer par type :
    </p>
    <AppButton
      v-for="filter in filters"
      :key="filter.label"
      :class="activeClass(filter.type)"
      @click="setFilter(filter.type)"
    >
      {{ filter.label }} ({{ filter.value }})
    </AppButton>
  </div>
</template>
