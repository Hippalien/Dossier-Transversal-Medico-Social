<script setup lang="ts">
import { HeartIcon, ShieldExclamationIcon } from '@heroicons/vue/24/outline'

const store = useDataStore()
const profil = computed(() => store.dossier.profil)

const handicaps = computed(() => [
  profil.value.handicaps,
])

const allergies = computed(() => [
  profil.value.allergies,
])

const food = computed (() => [
  profil.value.regimeAlimentaire,
])
</script>

<template>
  <AppCard title="Santé et Allergies">
    <template #icon>
      <UIcon name="i-heroicons-heart" class="w-5 h-5 text-red-500" />
    </template>
    <div class="flex flex-col">
      <p class="flex">
        <ShieldExclamationIcon class="w-4 h-4 text-red-500" />
        Allergies
      </p>
      <span> {{ allergies }}</span>
    </div>
    <div>
      <p>
        Régime alimentaire
      </p>
      <span>{{ food }}</span>
    </div>
    <div class="flex flex-col">
      <p class="flex">
        <HeartIcon class="w-4 h-4 text-purple-500" />

        Handicap
      </p>
      <span>
        {{ handicaps }}
      </span>
    </div>
  </AppCard>
</template>
