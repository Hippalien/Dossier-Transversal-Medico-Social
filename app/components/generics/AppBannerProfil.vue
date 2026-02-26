<script setup lang="ts">
import { defaultStyle } from '~/stores/data.store'

const store = useDataStore()
const profil = computed(() => store.dossier.profil)
const metadata = computed(() => store.dossier.metadata)

const age = computed(() => {
  const naissance = new Date(profil.value.dateNaissance)
  const aujourd = new Date()
  let ans = aujourd.getFullYear() - naissance.getFullYear()
  const m = aujourd.getMonth() - naissance.getMonth()
  if (m < 0 || (m === 0 && aujourd.getDate() < naissance.getDate()))
    ans--
  return ans
})

const badges = computed(() => [store.dossier.id, `Standard FHIR ${metadata.value.standardFHIR}`])
</script>

<template>
  <div class="w-full h-32 my-6 px-4 bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg flex items-center">
    <UAvatar class="m-2 rounded-full size-20" src="https://pic.clubic.com/v1/images/2165707/raw?fit=smartCrop&width=1600&height=1068&hash=23679cb003728bda3defc434b454861b7f1d05df" size="3xl" />
    <div
      class="flex flex-col text-white h-full w-full p-2 gap-2"
    >
      <p class="text-4xl font-bold">
        {{ profil.prenom }} {{ profil.nom }}
      </p>
      <p>
        {{ age }} ans · Né(e) le {{ profil.dateNaissance }}
      </p>
      <div class="flex gap-2">
        <p v-for="badge in badges" :key="badge" class="rounded-lg px-2 py-0.5 text-xs font-semibold" :class="defaultStyle.badge">
          {{ badge }}
        </p>
      </div>
    </div>
  </div>
</template>
