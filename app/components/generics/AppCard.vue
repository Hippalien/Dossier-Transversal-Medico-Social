<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <UCard class="rounded-xl shadow-sm opacity-0 animate-fade-in-up">
    <template #header>
      <div class="flex items-center gap-2">
        <slot name="icon" />
        <h3 class="text-lg font-semibold text-slate-800 leading-none">
          {{ title }}
        </h3>
      </div>
      <h1 class="text-slate-500 leading-none mt-2">
        {{ description }}
      </h1>
    </template>
    <div class="space-y-4">
      <slot />
    </div>
  </UCard>
</template>
