import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'solutionPage',
  title: 'Solution Page',
  type: 'document',
  fields: [
    defineField({
      name: 'audience',
      type: 'string',
      description: 'Who this solution page targets, e.g. "Universities", "Private Colleges"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /unicore/solutions/{slug}',
      options: {source: 'audience', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'hero', type: 'hero'}),
    defineField({name: 'painPoints', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'modules', type: 'array', of: [{type: 'reference', to: [{type: 'module'}]}]}),
    defineField({
      name: 'proof',
      description: 'Testimonials or social proof supporting this solution.',
      type: 'array',
      of: [{type: 'testimonial'}],
    }),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
  ],
})
