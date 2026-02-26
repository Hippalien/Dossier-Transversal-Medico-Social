<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const store = useDataStore()
const profil = computed(() => store.dossier.profil)

const referent = computed(() => profil.value.referentLegal)
</script>

<template>
  <AppCard
    title="Référent Légal"
  >
    <template #icon>
      <UIcon
        name="i-heroicons-user" class="w-5 h-5 text-indigo-500"
      />
    </template>
    <div class="flex flex-col">
      <div class="flex flex-col border-b border-gray-50 pb-2 last:border-0">
        <p>Identité</p>
        <p>{{ referent.nom }} {{ referent.prenom }}</p>
        <p>{{ referent.lien }}</p>
      </div>
      <div class="flex flex-col">
        <span class="flex"> <PhoneIcon class="w-4 h-4 text-gray-400" /> {{ referent.telephone }} </span>
        <span class="flex"> <EnvelopeIcon class="w-4 h-4 text-gray-400" /> {{ referent.email }} </span>
      </div>
    </div>
  </AppCard>
</template>
