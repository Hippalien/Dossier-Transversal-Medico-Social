<script setup lang="ts">
interface StatElement {
  label: string
  value: number
  icon: string
  color: string
}

const statCards = ref<StatElement[]>([
  { label: 'Total évènements', value: 23, icon: 'i-heroicons-calendar', color: 'text-black' },
  { label: 'Santé', value: 6, icon: 'i-heroicons-exclamation-circle', color: 'text-red-500' },
  { label: 'Administratif', value: 5, icon: 'i-heroicons-document-text', color: 'text-blue-500' },
  { label: 'Educatif', value: 12, icon: 'i-heroicons-building-office-2', color: 'text-green-500' },
])
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
  </div>
</template>
