<script setup lang="ts">
import type { Evenement } from '~/types/dossier'

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
          size="sm"
          class="absolute top-0 right-0"
          @click="open = false"
        />

        <span class="flex gap-2 items-center">
          <p class="rounded-lg px-2 py-0.5 text-xs font-semibold" :class="styles.badge">
            {{ content.type }}
          </p>
          <p class="text-lg font-bold text-black">
            {{ content.titre }}
          </p>
        </span>
        <p class="text-gray-600 text-sm">
          {{ content.date }}
        </p>
        <span class="flex flex-col">
          <p class="font-semibold text-sm">Description</p>
          <p class="text-gray-600 text-sm">{{ content.description }}</p>
        </span>
        <div class="flex gap-6">
          <span class="flex flex-col">
            <p class="font-semibold text-sm">Structure</p>
            <p class="text-gray-600 text-sm">{{ content.structure }}</p>
          </span>
          <span class="flex flex-col">
            <p class="font-semibold text-sm">Auteur</p>
            <p class="text-gray-600 text-sm">{{ content.auteur }}</p>
          </span>
        </div>
        <span class="flex flex-col">
          <p class="font-semibold text-sm">Documents associés</p>
          <p class="text-gray-600 text-sm">{{ content.documents?.join(', ') || 'Aucun' }}</p>
        </span>
        <span class="text-gray-600 text-sm">
          Niveau d'importance : {{ content.importance }}
        </span>
      </div>
    </template>
  </UModal>
</template>
