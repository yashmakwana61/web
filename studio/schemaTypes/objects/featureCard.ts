import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureCard',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "Globe", "Shield", "Zap", "Target")',
    }),
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', rows: 3}),
  ],
})
