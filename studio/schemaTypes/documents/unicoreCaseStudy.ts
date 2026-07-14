import {defineField, defineType} from 'sanity'

// Named unicoreCaseStudy (not caseStudy) to avoid colliding with the existing
// production caseStudy type used by /case-studies/[slug].
export default defineType({
  name: 'unicoreCaseStudy',
  title: 'UniCore Case Study',
  type: 'document',
  fields: [
    defineField({name: 'client', type: 'string', description: 'Institution name, or omit if anonymised.'}),
    defineField({
      name: 'anonymised',
      type: 'boolean',
      initialValue: false,
      description: "If true, don't display the client name publicly.",
    }),
    defineField({name: 'region', type: 'string', description: 'e.g., "Ireland", "Netherlands", "Malta"'}),
    defineField({name: 'size', type: 'string', description: 'e.g., "3,000 students"'}),
    defineField({name: 'challenge', type: 'text', rows: 4}),
    defineField({name: 'solution', type: 'text', rows: 4}),
    defineField({name: 'modules', type: 'array', of: [{type: 'reference', to: [{type: 'module'}]}]}),
    defineField({
      name: 'results',
      type: 'array',
      of: [
        {
          name: 'result',
          type: 'object',
          fields: [
            defineField({name: 'metric', type: 'string'}),
            defineField({name: 'value', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({name: 'quote', title: 'Client Quote', type: 'testimonial'}),
  ],
})
