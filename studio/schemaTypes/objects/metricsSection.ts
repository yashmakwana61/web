import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'metricsSection',
  title: 'Metrics / Stats Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({
      name: 'metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'metric',
          fields: [
            defineField({
              name: 'value',
              type: 'string',
              description: 'e.g., "98%", "2.7x", "$340K"',
            }),
            defineField({name: 'label', type: 'string'}),
            defineField({name: 'description', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})
