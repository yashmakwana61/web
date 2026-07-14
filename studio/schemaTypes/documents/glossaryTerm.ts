import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'glossaryTerm',
  title: 'Glossary Term',
  type: 'document',
  fields: [
    defineField({name: 'term', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /unicore/glossary/{slug}',
      options: {source: 'term', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'definition', type: 'text', rows: 4}),
    defineField({
      name: 'relatedTerms',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'glossaryTerm'}]}],
    }),
    defineField({name: 'relatedModules', type: 'array', of: [{type: 'reference', to: [{type: 'module'}]}]}),
  ],
})
