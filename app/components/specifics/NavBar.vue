<script setup lang="ts">
import AppButton from '../generics/AppButton.vue';

const dataStore = useDataStore()
const userFullName = computed(() => {
  const profil = dataStore.dossier.profil
  return `${profil.prenom} ${profil.nom}`
})
</script>


<template>
  <nav class="flex items-center justify-between py-2 bg-white">
        <div class="flex items-center gap-2">
            <UAvatar class="m-2 rounded-md" src="https://github.com/benjamincanac.png" size="xl" /> 
        </div>
    <div class="flex flex-col">
        <p class="font-bold text-xl text-gray-900 leading-tight">{{ userFullName }}</p>
       <p class="text-xs text-slate-500 tracking-tight">Dossier Transversal Médico-Social</p> 
    </div>

    <ul class="flex items-center gap-1.5">
        <li><AppButton size="sm" icon="i-heroicons-qr-code">QR Code</AppButton></li>
        <li><AppButton size="sm" icon="i-heroicons-arrow-down-tray">Exporter</AppButton></li>
        <li><AppButton size="sm" icon="i-heroicons-arrow-up-tray">Importer</AppButton></li>
    </ul>
  </nav>
</template>