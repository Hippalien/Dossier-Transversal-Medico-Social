<script setup lang="ts">
</script>

<template>
  <UButton
    color="neutral" variant="outline"
    class="font-semibold text-slate-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
  >
    <span class="hidden sm:inline-flex items-center gap-1.5">
      <slot />
    </span>
  </UButton>
</template>
