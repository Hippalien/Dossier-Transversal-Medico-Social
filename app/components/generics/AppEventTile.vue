<script setup lang="ts">
import type { Evenement } from '~/types/dossier'
import { BuildingOffice2Icon, DocumentIcon, UserIcon } from '@heroicons/vue/24/outline'
import { getCategoryStyle, getImportanceBorder } from '~/stores/data.store'

const props = defineProps<{
  content: Evenement
}>()

const styles = computed(() => getCategoryStyle(props.content.type))
</script>

<template>
  <div class="flex flex-col gap-4 bg-gray-50 rounded-xl p-4 border-l-4" :class="getImportanceBorder(content.importance)">
    <div class="flex items-center justify-between">
      <span class="flex gap-2 items-center">
        <p class="rounded-lg px-2 py-0.5 text-xs font-semibold" :class="styles.badge">{{ content.type }}</p>
        <p class="text-gray-600 text-sm">{{ content.date }}</p>
      </span>
      <span v-if="content.documents?.length" class="flex items-center gap-1 text-gray-400 text-xs">
        <DocumentIcon class="w-4 h-4" />
        {{ content.documents.length }}
      </span>
    </div>
    <span>
      <p class="text-lg font-bold text-black">{{ content.titre }}</p>
      <p class="text-gray-600 text-sm">{{ content.description }}</p>
    </span>
    <span class="flex text-center items-center gap-4 text-gray-500 text-xs">
      <p class="flex gap-2"><BuildingOffice2Icon class="w-4 h-4" /> {{ content.structure }}</p>
      <p class="flex gap-2"><UserIcon class="w-4 h-4" /> {{ content.auteur }}</p>
    </span>
  </div>
</template>
