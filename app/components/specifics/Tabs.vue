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
    :ui="{ root: 'gap-0 my-0', list: 'px-24' }"
  >
    <template #timeline>
      <div class="bg-slate-100">
        <div class="px-24">
          <TimelineTab />
        </div>
      </div>
    </template>

    <template #profile>
      <div class="bg-slate-100">
        <div class="px-24">
          <ProfileTab />
        </div>
      </div>
    </template>

    <template #permissions>
      <div class="bg-slate-100">
        <div class="px-24">
          <PermissionsTab />
        </div>
      </div>
    </template>
  </UTabs>
</template>
