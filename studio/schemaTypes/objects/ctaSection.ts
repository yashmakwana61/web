import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Call to Action Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', rows: 3}),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary Button',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string'}),
        defineField({name: 'href', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string'}),
        defineField({name: 'href', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'style',
      type: 'string',
      initialValue: 'primary',
      options: {
        list: [
          {title: 'Primary (Colored Background)', value: 'primary'},
          {title: 'Light (White Background)', value: 'light'},
          {title: 'Muted (Gray Background)', value: 'muted'},
        ],
      },
    }),
  ],
})
