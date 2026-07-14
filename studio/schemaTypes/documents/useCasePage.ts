import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'useCasePage',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Use Case Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /use-cases/{slug}',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 3}),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string', initialValue: 'Book a consultation'}),
        defineField({name: 'ctaHref', title: 'CTA Link', type: 'string', initialValue: '/contact'}),
      ],
    }),
    defineField({
      name: 'processes',
      title: 'Automated Processes',
      type: 'array',
      of: [
        {
          name: 'automatedProcess',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Process Title', type: 'string'}),
            defineField({name: 'description', type: 'text', rows: 2}),
            defineField({name: 'bulletPoints', type: 'array', of: [{type: 'string'}]}),
            defineField({
              name: 'accentColor',
              type: 'string',
              initialValue: 'primary',
              options: {list: ['primary', 'secondary', 'accent']},
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'industryPipelines',
      title: 'Industry-Specific Pipelines',
      type: 'array',
      of: [
        {
          name: 'pipeline',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Pipeline Title', type: 'string'}),
            defineField({name: 'description', type: 'text', rows: 3}),
            defineField({
              name: 'accentColor',
              title: 'Border Color',
              type: 'string',
              initialValue: 'primary',
              options: {list: ['primary', 'secondary', 'accent']},
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Bottom CTA',
      type: 'object',
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 2}),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string', initialValue: 'Talk to an expert'}),
        defineField({name: 'ctaHref', title: 'CTA Link', type: 'string', initialValue: '/contact'}),
      ],
    }),
    defineField({name: 'sections', title: 'Additional Sections', type: 'pageBuilder'}),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
})
