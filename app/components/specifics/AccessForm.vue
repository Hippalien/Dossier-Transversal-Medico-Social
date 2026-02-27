<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const emit = defineEmits<{ close: [] }>()

const niveauAccesOptions = ['Complet', 'Partiel', 'Santé uniquement', 'Éducatif uniquement']
const dureeOptions = [
  { label: '1 mois', value: '1' },
  { label: '3 mois', value: '3' },
  { label: '6 mois', value: '6' },
  { label: '12 mois', value: '12' },
  { label: 'Illimité', value: 'illimité' },
]

const state = reactive({
  structure: undefined as string | undefined,
  professionnel: undefined as string | undefined,
  email: undefined as string | undefined,
  niveauAcces: undefined as string | undefined,
  duree: undefined as string | undefined,
  permissionLecture: false,
  permissionEcriture: false,
  permissionPartage: false,
})

type Schema = typeof state

const permissions = [
  { key: 'permissionLecture' as const, label: 'Lecture du dossier' },
  { key: 'permissionEcriture' as const, label: 'Modification des informations' },
  { key: 'permissionPartage' as const, label: 'Ajout de documents' },
]

const requiredFields: (keyof Schema)[] = ['structure', 'professionnel', 'email']

function validate(state: Partial<Schema>): FormError[] {
  return requiredFields
    .filter(field => !state[field])
    .map(field => ({ name: field, message: 'Required' }))
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4 p-4" @submit="onSubmit">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-lg font-semibold">
          Créer un nouveau partage
        </h3>
        <p class="text-sm text-gray-500">
          Donnez accès au dossier à un professionnel ou une structure
        </p>
      </div>
      <AppButton
        type="button" icon="i-heroicons-x-mark" @click="emit('close')"
      />
    </div>

    <div class="flex gap-4">
      <UFormField label="Structure *" name="structure" class="flex-1">
        <UInput v-model="state.structure" placeholder="ex: MECS Les Lilas" color="neutral" />
      </UFormField>
      <UFormField label="Professionnel *" name="professionnel" class="flex-1">
        <UInput v-model="state.professionnel" placeholder="ex: M. Dupont - Éducateur" color="neutral" />
      </UFormField>
    </div>

    <UFormField label="Email *" name="email">
      <UInput v-model="state.email" placeholder="professionnel@structure.fr" color="neutral" />
    </UFormField>

    <div class="flex gap-4">
      <UFormField label="Niveau d'accès" name="niveauAcces" class="flex-1">
        <USelect v-model="state.niveauAcces" :items="niveauAccesOptions" placeholder="Sélectionner un niveau" color="neutral" />
      </UFormField>

      <UFormField label="Durée (mois)" name="duree" class="flex-1">
        <USelect v-model="state.duree" :items="dureeOptions" placeholder="Sélectionner une durée" color="neutral" />
      </UFormField>
    </div>

    <fieldset class="space-y-2">
      <legend class="text-sm font-medium">
        Permissions
      </legend>
      <UCheckbox
        v-for="p in permissions"
        :key="p.key"
        v-model="state[p.key]"
        :label="p.label"
        :name="p.key"
        color="neutral"
      />
    </fieldset>

    <AppCardInformation
      class="text-red-900 bg-amber-100 border border-amber-200"
    >
      <div class="flex flex-col gap-3 text-sm text-red-900">
        <p>
          <strong>Note RGPD</strong>: Le partage sera notifié par email au professionnel. L'usager peut révoquer l'accès à tout moment.
        </p>
      </div>
    </AppCardInformation>

    <div class="flex gap-3 pt-2">
      <UButton type="submit" class="flex-1 justify-center bg-black text-white hover:bg-black/90">
        Créer le partage
      </UButton>
      <AppButton type="button" class="bg-white text-black h-10 hover:bg-gray-100 border border-gray-300" @click="emit('close')">
        Annuler
      </AppButton>
    </div>
  </UForm>
</template>
