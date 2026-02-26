<script setup lang="ts">
const store = useDataStore()
const profil = computed(() => store.dossier.profil)

const items = computed(() => [
  { label: 'Nom', value: profil.value.nom },
  { label: 'Prénom', value: profil.value.prenom },
  { label: 'Date de naissance', value: profil.value.dateNaissance },
  { label: 'Sexe', value: profil.value.sexe === 'F' ? 'Féminin' : profil.value.sexe === 'M' ? 'Masculin' : 'Autre' },
  { label: 'N° Sécurité Sociale', value: profil.value.numeroSecu },
])
</script>

<template>
  <AppCard title="Identité Administrative">
    <template #icon>
      <UIcon name="i-heroicons-user" class="w-5 h-5 text-blue-500" />
    </template>

    <div class="flex flex-col gap-3">
      <div v-for="item in items" :key="item.label" class="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0">
        <span class="text-sm text-gray-500">{{ item.label }}</span>
        <span class="text-sm font-bold text-slate-900">{{ item.value }}</span>
      </div>
    </div>
  </AppCard>
</template>
