import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
      description: 'Override the default page title for search engines. Recommended: 50-60 characters.',
      validation: (Rule) => Rule.max(70).warning('Keep under 60 characters for best results.'),
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      rows: 3,
      description: 'Brief description for search results. Recommended: 150-160 characters.',
      validation: (Rule) => Rule.max(170).warning('Keep under 160 characters for best results.'),
    }),
    defineField({
      name: 'metaKeywords',
      type: 'string',
      description: 'Comma-separated keywords for SEO.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image displayed when shared on social media. Recommended: 1200x630px.',
      options: {hotspot: true},
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'If enabled, this page will not appear in search engine results.',
      initialValue: false,
    }),
  ],
})
