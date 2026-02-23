<script setup lang="ts">
import { FunnelIcon } from '@heroicons/vue/24/outline'

interface filtersContent {
  label: string
  value: number
}

const filters = ref<filtersContent[]>([
  { label: 'Tous', value: 23 },
  { label: 'Santé', value: 6 },
  { label: 'Administratif', value: 5 },
  { label: 'Educatif', value: 12 },
])
</script>

<template>
  <div class="border border-gray-200 shadow-md w-full rounded-xl bg-white p-4 flex items-center gap-4">
    <p class="flex items-center gap-1">
      <FunnelIcon class="w-4 h-4 font-semibold text-gray-800" />
      Filtrer par type :
    </p>
    <AppButton v-for="filter in filters" :key="filter.label">
      {{ filter.label }} (
      {{ filter.value }} )
    </AppButton>
  </div>
</template>
