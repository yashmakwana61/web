import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemaTypes'
import {structure} from './structure/deskStructure'

const SINGLETON_TYPES = new Set(['homePage', 'aboutPage', 'contactPage', 'siteNavigation', 'pricingConfig'])

export default defineConfig({
  name: 'default',
  title: 'PreciseFect CMS',

  projectId: 'e0ws8top',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
    // Singletons can't be created or deleted from the generic "new document" menu —
    // they're only reachable through the desk structure's pinned list items.
    templates: (templates) => templates.filter(({schemaType}) => !SINGLETON_TYPES.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      SINGLETON_TYPES.has(context.schemaType)
        ? input.filter(({action}) => action !== 'duplicate' && action !== 'delete')
        : input,
  },
})
