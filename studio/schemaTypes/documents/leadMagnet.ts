import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'leadMagnet',
  title: 'Lead Magnet',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Guide', value: 'guide'},
          {title: 'Template', value: 'template'},
          {title: 'Calculator', value: 'calculator'},
        ],
      },
    }),
    defineField({name: 'file', type: 'file'}),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          name: 'formField',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string'}),
            defineField({
              name: 'fieldType',
              type: 'string',
              options: {list: ['text', 'email', 'phone', 'select']},
            }),
            defineField({name: 'required', type: 'boolean', initialValue: false}),
          ],
        },
      ],
    }),
  ],
})
