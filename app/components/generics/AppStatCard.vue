<script setup lang="ts">
interface StatItem {
  label: string
  value: number
  icon: string
  color: string
}

defineProps<{
  item: StatItem
}>()
</script>

<template>
  <UCard class="h-full" :ui="{ body: 'h-full flex flex-col justify-center shadow-xl' }">
    <div class="flex justify-between items-center w-full">
      <div class="flex flex-col">
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.label }}</span>
        <span class="text-2xl font-bold" :class="item.color">{{ item.value }}</span>
      </div>

      <UIcon :name="item.icon" class="w-8 h-8" :class="item.color" />
    </div>
  </UCard>
</template>
