<script setup lang="ts">
import testData from '~/assets/data/test.json'

const historiquePartages = testData.historiquePartages
</script>

<template>
  <AppCard
    title="Historique des Partages"
    description="Anciens accès au dossier"
  >
    <template #icon>
      <UIcon name="i-heroicons-clock" class="w-5 h-5 text-gray-500" />
    </template>

    <AppProIdentityTile
      v-for="partage in historiquePartages"
      :key="partage.id"
      :professionnel="partage.professionnel"
      :structure="partage.structure"
      :date-debut="partage.dateDebut"
      :date-fin="partage.dateFin"
      :niveau-acces="partage.niveauAcces"
      historique
    />
  </AppCard>
</template>
