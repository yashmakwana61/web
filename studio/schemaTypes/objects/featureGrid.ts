import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureGrid',
  title: 'Feature Grid Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'text', rows: 2}),
    defineField({
      name: 'features',
      type: 'array',
      of: [{type: 'featureCard'}],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'columns',
      type: 'number',
      description: 'Number of columns on desktop (2 or 3)',
      initialValue: 3,
      options: {list: [2, 3, 4]},
    }),
  ],
})
