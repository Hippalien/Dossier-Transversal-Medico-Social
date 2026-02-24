<script setup lang="ts">
import { getCategoryStyle } from '~/stores/data.store'

const store = useDataStore()
const { dossier, filteredParcours } = storeToRefs(store)
</script>

<template>
  <div class="flex flex-col border border-gray-200 shadow-md w-full h-fit rounded-xl bg-white p-4 gap-4 mt-6">
    <p class="font-bold text-black text-lg">
      Parcours de vie - {{ dossier.parcours.length }} évènements
    </p>

    <div class="flex flex-col">
      <div v-for="event in filteredParcours" :key="event.id" class="flex gap-4">
        <div class="flex flex-col items-center">
          <div class="w-4 h-4 rounded-full shrink-0 mt-1 border-2 border-gray-300 bg-white flex items-center justify-center">
            <div class="w-2 h-2 rounded-full" :class="getCategoryStyle(event.type).dot" />
          </div>
          <div class="w-0.5 flex-1 bg-gray-300" />
        </div>
        <div class="pb-6 flex-1">
          <AppEventTile :content="event" />
        </div>
      </div>
    </div>
  </div>
</template>
