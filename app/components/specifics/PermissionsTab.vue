<script setup lang="ts">
const store = useDataStore()
const profil = computed(() => store.dossier.profil)
const { dossier } = useDataStore()

interface StatElement {
  label: string
  value: number
  icon: string
  color: string
}

const statCardsPermissions = computed<StatElement[]>(() => {
  const historiquePartages = dossier.historiquePartages

  return [
    { label: 'Partages Actifs', value: dossier.partagesActifs.length, icon: 'i-heroicons-check-circle', color: getCategoryStyle('Éducatif').text },
    { label: 'Historique', value: historiquePartages.length, icon: 'i-heroicons-clock', color: 'text-gray-700' },
    { label: 'Total structures', value: new Set([...dossier.partagesActifs, ...historiquePartages].map(p => p.structure)).size, icon: 'i-heroicons-building-office-2', color: getCategoryStyle('Administratif').text },
  ]
})
</script>

<template>
  <div class="w-full h-full p-4 flex flex-col">
    <h3 class="text-2xl font-bold text-gray-800">
      Gestion des Partages
    </h3>
    <p class="text-gray-600">
      Contrôlez qui a accès au dossier de {{ profil.prenom }}  {{ profil.nom }}
    </p>
    <div class="grid grid-cols-3 w-full justify-between gap-4 my-4">
      <AppStatCard
        v-for="card in statCardsPermissions"
        :key="card.label"
        :item="card"
      />
    </div>
    <ActiveShareCard />
  </div>
</template>
