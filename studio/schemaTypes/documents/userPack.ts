import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'userPack',
  title: 'User Pack',
  type: 'document',
  fields: [
    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'maxUsers', title: 'Max Users', type: 'number', validation: (Rule) => Rule.required().min(1)}),
    defineField({
      name: 'multiplier',
      type: 'number',
      description: 'Price multiplier applied to the base module total for this user pack.',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'deployment',
      type: 'string',
      options: {
        list: [
          {title: 'Cloud', value: 'cloud'},
          {title: 'On-Premise', value: 'onprem'},
        ],
      },
    }),
  ],
})
