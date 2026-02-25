<script setup lang="ts">
import AppButton from '../generics/AppButton.vue'

const dataStore = useDataStore()
const userFullName = computed(() => {
  const profil = dataStore.dossier.profil
  return `${profil.prenom} ${profil.nom}`
})
</script>

<template>
  <nav class="flex items-center justify-between py-2 bg-white">
    <div class="flex items-center gap-2">
      <UAvatar class="m-2 rounded-md" src="https://pic.clubic.com/v1/images/2165707/raw?fit=smartCrop&width=1600&height=1068&hash=23679cb003728bda3defc434b454861b7f1d05df" size="xl" />

      <div class="flex flex-col">
        <p class="font-bold text-xl text-gray-900 leading-tight">
          {{ userFullName }}
        </p>
        <p class="text-xs text-slate-500 tracking-tight">
          Dossier Transversal Médico-Social
        </p>
      </div>
    </div>

    <ul class="flex items-center gap-1.5">
      <li>
        <AppToast
          title="Fonctionnalité QR Code - À venir"
          description="Le QR Code permettra un accès rapide et sécurisé au dossier."
          icon="i-heroicons-information-circle"
          color="neutral"
        >
          <AppButton size="sm" icon="i-heroicons-qr-code">
            QR Code
          </AppButton>
        </AppToast>
      </li>
      <li>
        <AppButton size="sm" icon="i-heroicons-arrow-down-tray">
          Exporter
        </AppButton>
      </li>
      <li>
        <AppButton size="sm" icon="i-heroicons-arrow-up-tray">
          Importer
        </AppButton>
      </li>
    </ul>
  </nav>
</template>
