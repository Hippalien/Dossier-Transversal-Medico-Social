<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <UCard
    :ui="{
      root: 'bg-blue-50 border border-blue-200 rounded-lg w-full',
      body: 'p-4',
    }"
  >
    <template v-if="title || $slots.icon" #header>
      <div class="flex items-center gap-2">
        <slot name="icon" />
        <span>{{ title }}</span>
      </div>
    </template>
    <slot />
  </UCard>
</template>
