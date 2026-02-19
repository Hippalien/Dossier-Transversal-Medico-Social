export default defineAppConfig({
  ui: {

    colors: {
      primary: 'green',
      neutral: 'slate',
    },

    button: {
      default: {
        size: 'md',
        variant: 'solid',
      },
      rounded: 'rounded-lg',
    },

    card: {
      rounded: 'rounded-xl',
      shadow: 'shadow-sm',
    },

    badge: {
      rounded: 'rounded-full',
      default: {
        variant: 'soft',
      },
    },
  },
})
