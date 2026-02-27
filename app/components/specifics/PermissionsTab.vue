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

const showAccessForm = ref(false)

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
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-2xl font-bold text-gray-800">
          Gestion des Partages
        </h3>
        <p class="text-gray-600">
          Contrôlez qui a accès au dossier de {{ profil.prenom }}  {{ profil.nom }}
        </p>
      </div>

      <AppButton type="button" size="md" icon="i-heroicons-plus" class="bg-black text-white h-10 hover:bg-black/80" @click="showAccessForm = true">
        Nouveau partage
      </AppButton>
    </div>

    <div class="grid grid-cols-3 w-full justify-between gap-4 my-4">
      <AppStatCard
        v-for="card in statCardsPermissions"
        :key="card.label"
        :item="card"
      />
    </div>
    <ActiveShareCard />

    <UModal v-model:open="showAccessForm">
      <template #content>
        <AccessForm @close="showAccessForm = false" />
      </template>
    </UModal>
  </div>
</template>
