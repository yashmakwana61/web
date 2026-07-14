import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industryPage',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Industry Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /industries/{slug}',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "GraduationCap", "HeartPulse", "Factory")',
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 3}),
        defineField({name: 'image', title: 'Hero Image', type: 'image', options: {hotspot: true}}),
        defineField({
          name: 'imageUrl',
          title: 'Hero Image URL (External)',
          type: 'url',
          validation: (Rule) => Rule.uri({scheme: ['http', 'https'], allowRelative: false}),
        }),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string', initialValue: 'Book a consultation'}),
        defineField({name: 'ctaHref', title: 'CTA Link', type: 'string', initialValue: '/contact'}),
      ],
    }),
    defineField({name: 'solutions', title: 'Key Solutions', type: 'array', of: [{type: 'featureCard'}]}),
    defineField({
      name: 'keyFeatures',
      type: 'array',
      of: [
        {
          name: 'keyFeature',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text', rows: 3}),
          ],
        },
      ],
    }),
    defineField({
      name: 'useCases',
      type: 'array',
      of: [
        {
          name: 'useCase',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text', rows: 3}),
            defineField({
              name: 'color',
              title: 'Accent Color',
              type: 'string',
              initialValue: 'primary',
              options: {
                list: [
                  {title: 'Primary', value: 'primary'},
                  {title: 'Secondary', value: 'secondary'},
                  {title: 'Accent', value: 'accent'},
                ],
              },
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
