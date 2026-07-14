import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicePage',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Service Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /services/{slug}',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({
      name: 'tagline',
      type: 'text',
      rows: 2,
      description: 'Short description shown below the title in the hero.',
    }),
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb Label',
      type: 'string',
      description: 'e.g., "Services / ERP Consulting"',
    }),
    defineField({
      name: 'overview',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 4}),
        defineField({name: 'benefits', title: 'Key Benefits', type: 'array', of: [{type: 'string'}]}),
        defineField({name: 'whyUs', title: 'Why PreciseFect', type: 'array', of: [{type: 'featureCard'}]}),
      ],
    }),
    defineField({name: 'features', title: 'Core Features', type: 'array', of: [{type: 'featureCard'}]}),
    defineField({name: 'process', title: 'Implementation Process', type: 'array', of: [{type: 'processStep'}]}),
    defineField({name: 'pricing', title: 'Pricing Tiers', type: 'array', of: [{type: 'pricingTier'}]}),
    defineField({name: 'faqs', title: 'FAQs', type: 'array', of: [{type: 'faq', title: 'FAQ Item'}]}),
    defineField({
      name: 'sections',
      title: 'Additional Sections',
      type: 'pageBuilder',
      description: 'Add extra sections below the main service content.',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first in listings.',
      initialValue: 0,
    }),
  ],
})
