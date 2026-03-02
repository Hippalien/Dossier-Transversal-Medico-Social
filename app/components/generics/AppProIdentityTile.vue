<script setup lang="ts">
import { BuildingOffice2Icon, CalendarDaysIcon, EnvelopeIcon, EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'

const _props = defineProps<{
  professionnel: string
  structure: string
  email: string
  dateDebut: string
  niveauAcces: string
  permissions: string[]
}>()

const emit = defineEmits(['voir', 'modifier', 'révoquer'])

const niveauAccesBadge: Record<string, string> = {
  'Complet': 'bg-green-100 text-green-700 border border-green-200',
  'Partiel': 'bg-amber-100 text-amber-700 border border-amber-200',
  'Santé uniquement': 'bg-red-100 text-red-700 border border-red-200',
  'Éducatif uniquement': 'bg-blue-100 text-blue-700 border border-blue-200',
}

const buttons = [
  { label: 'Voir', event: 'voir' as const, icon: EyeIcon },
  { label: 'Modifier', event: 'modifier' as const, icon: PencilSquareIcon },
  { label: 'Révoquer', event: 'révoquer' as const, icon: TrashIcon, class: 'text-red-500 border-red-300 hover:bg-red-50' },
]
</script>

<template>
  <div class="flex justify-between bg-gray-50 rounded-xl p-4 border border-gray-200">
    <div class="flex flex-col gap-4">
      <span class="flex gap-2 items-center">
        <p class="text-lg font-bold text-black">{{ professionnel }}</p>
        <p class="rounded-lg px-2 py-0.5 text-xs font-semibold" :class="niveauAccesBadge[niveauAcces] ?? 'bg-gray-100 text-gray-700 border border-gray-200'">{{ niveauAcces }}</p>
      </span>

      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <BuildingOffice2Icon class="w-4 h-4 text-gray-600" />
          <p class="text-gray-600 text-sm">
            {{ structure }}
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <EnvelopeIcon class="w-4 h-4 text-gray-600" />
          <p class="text-gray-600 text-sm">
            {{ email }}
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <CalendarDaysIcon class="w-4 h-4 text-gray-600" />
          <p class="text-gray-600 text-sm">
            {{ dateDebut }}
          </p>
        </div>
        <div class="flex gap-2">
          <p v-for="permission in permissions" :key="permission" class="rounded-lg px-2 py-0.5 text-xs font-semibold w-fit bg-gray-100 text-gray-700 border border-gray-200">
            {{ permission }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2 justify-center w-36">
      <AppButton v-for="button in buttons" :key="button.event" :class="button.class" class="w-full justify-center" @click="emit(button.event)">
        <component :is="button.icon" class="w-4 h-4" />
        {{ button.label }}
      </AppButton>
    </div>
  </div>
</template>
