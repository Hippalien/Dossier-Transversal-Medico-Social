<script setup lang="ts">
const { dossier } = useDataStore()
</script>

<template>
  <div class="flex flex-col border border-gray-200 shadow-md w-full h-fit rounded-xl bg-white p-4 gap-4 mt-6">
    <p class="font-bold text-black text-lg">
      Parcours de vie - {{ dossier.parcours.length }} évènements
    </p>
    <AppEventTile
      v-for="event in dossier.parcours"
      :key="event.id"
      :content="event"
    />
  </div>
</template>
