<script setup lang="ts">
const store = useDataStore()
const metadata = computed(() => store.dossier.metadata)
</script>

<template>
  <div class="flex flex-col">
    <AppBannerProfil />
    <div class="grid grid-cols-2">
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

      <div class="flex flex-col gap-3">
        <p>
          Ce profil suit le standard FHIR R4 (Fast Healthcare Interoperability Resources). Les données sont structurées selon des normes internationales, permettant leur partage sécurisé entre différentes structures médico-sociales, indépendamment des logiciels utilisés (AIRMES, HOPE, etc.).
        </p>
        <p class="flex">
          <CalendarIcon class="w-4 h-4" /> Consentement actif depuis le {{ metadata.consentementDate }}
        </p>
      </div>
    </AppCardInformation>
  </div>
</template>
