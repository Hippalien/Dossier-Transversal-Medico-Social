<script setup lang="ts">
import type { ToastProps } from '@nuxt/ui'

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  icon?: string
  color?: ToastProps['color']
}>(), {
  title: 'Succès',
  description: '',
  icon: 'i-heroicons-information-circle',
  color: 'primary',
})

const toast = useToast()

function showToast() {
  toast.add({
    title: props.title,
    description: props.description,
    icon: props.icon,
    color: props.color,
  })
}
</script>

<template>
  <div @click="showToast">
    <slot />
  </div>
</template>
