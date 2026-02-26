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
        name="i-heroicons-user-solid" class="w-5 h-5 text-indigo-500"
      />
    </template>
    <div class="flex flex-col">
      <div class="flex flex-col border-b border-gray-50 pb-2 last:border-0">
        <p class="text-sm">
          Identité
        </p>
        <p class="font-bold">
          {{ referent.prenom }} {{ referent.nom }}
        </p>
        <p class="text-sm">
          {{ referent.lien }}
        </p>
      </div>
      <div class="flex flex-col text-center mt-2">
        <a :href="`tel:${referent.telephone}`" class="flex items-center gap-2 text-sm hover:text-blue-500"> <PhoneIcon class="w-4 h-4 text-gray-400" /> {{ referent.telephone }} </a>
        <a :href="`mailto:${referent.email}`" class="flex items-center gap-2 text-sm hover:text-blue-500"> <EnvelopeIcon class="w-4 h-4 text-gray-400" /> {{ referent.email }} </a>
      </div>
    </div>
  </AppCard>
</template>
