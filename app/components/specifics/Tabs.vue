<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    label: 'Fil de vie',
    icon: 'i-lucide-activity',
    content: 'This is the "Fil de vie" content.'

  },
  {
    label: 'Profil Interopérable',
    icon: 'i-lucide-user',
    content: 'This is the "Profil" content.'

  },
  {
    label: 'Partages & Permissions',
    icon: 'i-lucide-share-2',
    content: 'This is the "Partage & Permissions" content.'

  },
])
</script>

<template>
  <UTabs 
  size="md" 
  color="info"
   variant="link"
    :items="items" 
     class="w-full"/>
</template>

