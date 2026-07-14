import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'processStep',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Step Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'description',
      title: 'Step Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
