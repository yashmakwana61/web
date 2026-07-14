import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'processTimeline',
  title: 'Process Timeline Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Implementation Process',
    }),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'text', rows: 2}),
    defineField({
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [{type: 'processStep'}],
      validation: (Rule) => Rule.min(2),
    }),
  ],
})
