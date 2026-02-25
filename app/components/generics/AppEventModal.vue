<script setup lang="ts">
import type { Evenement } from '~/types/dossier'
import { DocumentTextIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  content: Evenement
}>()

const styles = computed(() => getCategoryStyle(props.content.type))

const open = ref(false)
</script>

<template>
  <UModal v-model:open="open" :close="false">
    <div @click="open = true">
      <slot />
    </div>

    <template #body>
      <div class="relative flex flex-col gap-4 p-2">
        <UButton
          icon="i-heroicons-x-mark"
          color="neutral"
          variant="ghost"
          size="md"
          class="absolute top-0 right-0 border-2 border-gray-400"
          @click="open = false"
        />

        <span class="flex gap-2 items-center">
          <p class="rounded-lg px-2 py-1 text-xs font-semibold border-2" :class="styles.badge">
            {{ content.type }}
          </p>
          <p class="text-lg font-bold text-black">
            {{ content.titre }}
          </p>
        </span>
        <p class="text-gray-500 text-sm">
          {{ content.date }}
        </p>
        <span class="flex flex-col">
          <p class="font-semibold text-md">Description</p>
          <p class="text-gray-600 text-md">{{ content.description }}</p>
        </span>
        <div class="flex gap-6">
          <span class="flex flex-col">
            <p class="font-semibold text-md">Structure</p>
            <p class="text-gray-600 text-md">{{ content.structure }}</p>
          </span>
          <span class="flex flex-col">
            <p class="font-semibold text-md">Auteur</p>
            <p class="text-gray-600 text-md">{{ content.auteur }}</p>
          </span>
        </div>
        <span class="flex flex-col">
          <p class="font-semibold text-md">Documents associés</p>
          <template v-if="content.documents?.length">
            <p v-for="doc in content.documents" :key="doc" class="text-gray-600 text-sm flex w-full h-fit bg-gray-50 border border-gray-200 p-2 gap-2 mt-2 font-semibold rounded-sm">

              <DocumentTextIcon class="w-4 h-4 font-bold text-blue-500" /> {{ doc }}</p>
          </template>
          <p v-else class="text-gray-600 text-sm">Aucun</p>
        </span>
        <span class="text-red-900 text-sm font-semibold w-full h-fit p-2 bg-amber-50 rounded-sm border border-amber-200">
          Niveau d'importance : {{ content.importance }}
        </span>
      </div>
    </template>
  </UModal>
</template>
