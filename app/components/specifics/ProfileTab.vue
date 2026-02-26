<script setup lang="ts">
import { CalendarIcon } from '@heroicons/vue/24/outline'

const store = useDataStore()
const metadata = computed(() => store.dossier.metadata)
</script>

<template>
  <div class="flex flex-col">
    <AppBannerProfil />
    <div class="grid grid-cols-2 gap-4 mb-6">
      <IdentityCard />
      <HealthCard />
      <CommunicationCard />
      <LegalReferentCard />
    </div>

    <AppCardInformation
      title="Profil Interopérable"
    >
      <template #icon>
        <UIcon name="i-heroicons-shield-exclamation-solid" class="w-5 h-5 text-blue-500" />
      </template>

      <div class="flex flex-col gap-3 text-sm text-blue-700 font-semibold">
        <p>
          Ce profil suit le standard <strong>FHIR R4</strong> (Fast Healthcare Interoperability Resources). Les données sont structurées selon des normes internationales, permettant leur partage sécurisé entre différentes structures médico-sociales, indépendamment des logiciels utilisés (AIRMES, HOPE, etc.).
        </p>
        <p class="flex text-xs text-center gap-2 font-thin items-center">
          <CalendarIcon class="w-3 h-3" /> Consentement actif depuis le {{ metadata.consentementDate }}
        </p>
      </div>
    </AppCardInformation>
  </div>
</template>
