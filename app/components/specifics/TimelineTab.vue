<script setup lang="ts">
import { getCategoryStyle } from '~/stores/data.store'

const { dossier } = useDataStore()

interface StatElement {
  label: string
  value: number
  icon: string
  color: string
}

const statCards = computed<StatElement[]>(() => {
  const parcours = dossier.parcours
  return [
    { label: 'Total évènements', value: parcours.length, icon: 'i-heroicons-calendar', color: 'text-black' },
    { label: 'Santé', value: parcours.filter(e => e.type === 'Santé').length, icon: 'i-heroicons-exclamation-circle', color: getCategoryStyle('Santé').text },
    { label: 'Administratif', value: parcours.filter(e => e.type === 'Administratif').length, icon: 'i-heroicons-document-text', color: getCategoryStyle('Administratif').text },
    { label: 'Educatif', value: parcours.filter(e => e.type === 'Éducatif').length, icon: 'i-heroicons-building-office-2', color: getCategoryStyle('Éducatif').text },
  ]
})
</script>

<template>
  <div class="p-2">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <AppStatCard
        v-for="card in statCards"
        :key="card.label"
        :item="card"
      />
    </div>

    <TimelineFilters class="mt-6" />

    <EventList />
  </div>
</template>
