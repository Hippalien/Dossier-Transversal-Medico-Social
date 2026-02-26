<script setup lang="ts">
import { HeartIcon, ShieldExclamationIcon } from '@heroicons/vue/24/outline'
import { getCategoryStyle } from '~/stores/data.store'

const store = useDataStore()
const styles = getCategoryStyle('Santé')
const foodStyle = getCategoryStyle('Éducatif')

const profil = computed(() => store.dossier.profil)

const handicaps = computed(() => profil.value.handicaps)

const allergies = computed(() => profil.value.allergies)

const food = computed (() => profil.value.regimeAlimentaire)
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
      <div class="flex flex-wrap gap-1">
        <span v-for="item in allergies" :key="item" class="rounded-lg px-2 py-0.5 text-xs font-semibold" :class="styles.badge">
          {{ item }}
        </span>
      </div>
    </div>
    <div>
      <p class="flex">
        <UIcon name="i-lucide-utensils" class="w-4 h-4 text-green-500" />
        Régime alimentaire
      </p>
      <span class="rounded-lg px-2 py-0.5 text-xs font-semibold" :class="foodStyle.badge">{{ food }}</span>
    </div>
    <div class="flex flex-col">
      <p class="flex">
        <HeartIcon class="w-4 h-4 text-purple-500" />
        Handicap
      </p>
      <span v-for="item in handicaps" :key="item" class="flex flex-col">
        • {{ item }}
      </span>
    </div>
  </AppCard>
</template>
