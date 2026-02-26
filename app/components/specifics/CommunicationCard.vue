<script setup lang="ts">
const store = useDataStore()
const profil = computed(() => store.dossier.profil)

const communication = computed(() => profil.value.modesCommunication)
const styles = getCategoryStyle('Administratif')
</script>

<template>
  <AppCard title="Modes de Communication">
    <template #icon>
      <UIcon
        name="i-heroicons-chat-bubble-oval-left" class="w-5 h-5 text-blue-500"
      />
    </template>
    <div>
      <p class="mb-2 text-sm">
        Supports de communication utilisés par l'usager:
      </p>
      <div class="flex flex-wrap gap-1">
        <span v-for="item in communication" :key="item" class="rounded-lg px-2 py-0.5 text-xs font-semibold" :class="styles.badge">
          {{ item }}
        </span>
      </div>
    </div>
  </AppCard>
</template>
