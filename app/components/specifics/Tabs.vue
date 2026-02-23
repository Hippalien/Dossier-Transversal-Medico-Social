<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    label: 'Fil de vie',
    icon: 'i-lucide-activity',
    slot: 'timeline' as const,
  },
  {
    label: 'Profil Interopérable',
    icon: 'i-lucide-user',
    slot: 'profile' as const,
  },
  {
    label: 'Partages & Permissions',
    icon: 'i-lucide-share-2',
    slot: 'permissions' as const,

  },
])
</script>

<template>
  <UTabs
    size="lg"
    color="secondary"
    variant="link"
    :items="items"
    class="w-full"
  >
    <template #timeline>
      <TimelineTab />
    </template>

    <template #profile>
      <ProfileTab />
    </template>

    <template #permissions>
      <PermissionsTab />
    </template>
  </UTabs>
</template>
