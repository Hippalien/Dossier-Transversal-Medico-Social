<script setup lang="ts">
import type { Evenement } from '~/types/dossier'
import { BuildingOffice2Icon, UserIcon } from '@heroicons/vue/24/outline'

defineProps<{
  content: Evenement
}>()
</script>

<template>
  <div class="flex flex-col gap-4 bg-gray-50 rounded-xl p-4 border-l-4">
    <span class="flex gap-2 items-center">
      <p class="border border-gray-100 rounded-lg bg-blue-100 p-1 text-xs font-semibold">{{ content.type }}</p>
      <p class="text-gray-600 text-sm">{{ content.date }}</p>
    </span>
    <span>
      <p class="text-lg font-bold text-black">{{ content.titre }}</p>
      <p class="text-gray-600 text-sm">{{ content.description }}</p>
    </span>
    <span class="flex text-center items-center gap-4  text-gray-500 text-xs">
      <p class="flex  gap-2"> <BuildingOffice2Icon class="w-4 h-4" />  {{ content.structure }}</p>
      <p class="flex  gap-2 "> <UserIcon class="w-4 h-4" /> {{ content.auteur }}</p>
    </span>
  </div>
</template>
