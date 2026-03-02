<script setup lang="ts">
import testData from '~/assets/data/test.json'

const partagesActifs = testData.partagesActifs
</script>

<template>
  <AppCard
    title="Partages Actifs"
    description="Professionnels ayant actuellement accès au dossier"
  >
    <template #icon>
      <UIcon name="i-heroicons-share" class="w-5 h-5 text-green-500" />
    </template>

    <AppProIdentityTile
      v-for="partage in partagesActifs"
      :key="partage.id"
      :professionnel="partage.professionnel"
      :structure="partage.structure"
      :email="partage.email"
      :date-debut="partage.dateDebut"
      :niveau-acces="partage.niveauAcces"
      :permissions="partage.permissions"
    />
  </AppCard>
</template>
