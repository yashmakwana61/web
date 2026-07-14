import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Case Study Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /case-studies/{slug}',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({name: 'excerpt', type: 'text', rows: 3, description: 'Short summary for case study listings.'}),
    defineField({
      name: 'industry',
      type: 'reference',
      to: [{type: 'industryPage'}],
      description: 'Link to the related industry page.',
    }),
    defineField({
      name: 'industryLabel',
      type: 'string',
      description: 'Fallback label if not using a reference (e.g., "Education", "Healthcare").',
    }),
    defineField({name: 'service', title: 'Related Service', type: 'reference', to: [{type: 'servicePage'}]}),
    defineField({
      name: 'metrics',
      title: 'Key Metric',
      type: 'string',
      description: 'Headline metric (e.g., "68% faster", "2.7x ROI", "$340K saved").',
    }),
    defineField({name: 'featuredImage', type: 'image', options: {hotspot: true}}),
    defineField({name: 'challenge', title: 'The Challenge', type: 'text', rows: 4}),
    defineField({name: 'solution', title: 'The Solution', type: 'text', rows: 4}),
    defineField({
      name: 'results',
      type: 'array',
      of: [
        {
          name: 'result',
          type: 'object',
          fields: [
            defineField({name: 'metric', title: 'Metric Value', type: 'string'}),
            defineField({name: 'label', title: 'Metric Label', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Full Case Study Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bulleted list', value: 'bullet'},
            {title: 'Numbered list', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'Link',
                    type: 'url',
                    description: 'A valid web, email, phone, or relative link.',
                    validation: (Rule) =>
                      Rule.uri({scheme: ['http', 'https', 'tel', 'mailto'], allowRelative: true}),
                  }),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt Text', type: 'string'}),
            defineField({name: 'caption', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({name: 'testimonial', title: 'Client Testimonial', type: 'testimonial'}),
    defineField({name: 'publishedAt', title: 'Published Date', type: 'datetime'}),
  ],
})
