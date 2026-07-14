import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comparison',
  title: 'Comparison',
  type: 'document',
  fields: [
    defineField({name: 'competitor', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /unicore/compare/{slug}',
      options: {source: 'competitor', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'positioning', type: 'text', rows: 4}),
    defineField({
      name: 'matrixRows',
      title: 'Comparison Matrix',
      type: 'array',
      of: [
        {
          name: 'matrixRow',
          type: 'object',
          fields: [
            defineField({name: 'feature', type: 'string'}),
            defineField({name: 'unicore', title: 'UniCore', type: 'string'}),
            defineField({name: 'them', title: 'Competitor', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({name: 'honestWins', title: 'Honest Wins', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'honestLosses', title: 'Honest Losses', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
  ],
})
