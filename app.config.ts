export default defineAppConfig({
    ui: {
      // Les couleurs globales de ton application
      colors: {
        primary: 'green', // Utilise ta palette verte personnalisée pour les actions principales
        neutral: 'slate'   // Utilise le gris bleuté (slate) pour les textes et bordures
      },
      
      // Personnalisation par défaut des composants pour matcher ton Figma
      button: {
        default: {
          size: 'md',
          variant: 'solid'
        },
        rounded: 'rounded-lg' // Des coins légèrement arrondis comme sur ton design
      },
      
      card: {
        rounded: 'rounded-xl', // Cartes plus douces
        shadow: 'shadow-sm'    // Ombre légère et moderne
      },
      
      badge: {
        rounded: 'rounded-full', // Badges bien ronds pour la timeline
        default: {
          variant: 'soft'        // Rendu plus "pastel" et lisible
        }
      }
    }
  })