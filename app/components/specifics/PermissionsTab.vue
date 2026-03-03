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
    <div class="flex flex-col gap-4">
      <ActiveShareCard />
      <OldShareCard />
      <AppCardInformation
        title="Protection des données (RGPD)"
      >
        <template #icon>
          <UIcon name="i-heroicons-shield-exclamation-solid" class="w-5 h-5 text-blue-500" />
        </template>

        <div class="flex flex-col gap-3 text-sm text-blue-700 font-semibold">
          <p>
            Le partage du dossier est strictement encadré par le RGPD. Chaque professionnel accède uniquement aux informations nécessaires à l'accompagnement. L'usager garde le contrôle total et peut révoquer un accès à tout moment.
          </p>
          <p class="flex text-xs text-center gap-2 font-thin items-center">
            • Traçabilité complète des accès • Durées limitées • Consentement révocable • Anonymisation possible
          </p>
        </div>
      </AppCardInformation>
    </div>

    <UModal v-model:open="showAccessForm">
      <template #content>
        <AccessForm @close="showAccessForm = false" />
      </template>
    </UModal>
  </div>
</template>
