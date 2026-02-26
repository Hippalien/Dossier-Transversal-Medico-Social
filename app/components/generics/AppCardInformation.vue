<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <UCard
    :ui="{
      root: 'bg-blue-50 border border-blue-200 rounded-lg w-full mb-6',
      body: 'p-4',
    }"
  >
    <template v-if="title || $slots.icon" #header>
      <div class="flex items-center gap-2">
        <slot name="icon" />
        <span class="text-blue-900 font-semibold text-xl">{{ title }}</span>
      </div>
    </template>
    <slot />
  </UCard>
</template>
