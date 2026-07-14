import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  type: 'document',
  description:
    "Flexible pages composed entirely from the Page Builder. Use for any page that doesn't fit other types.",
  fields: [
    defineField({name: 'title', title: 'Page Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /{slug}',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'pageBuilder',
      description: 'Build your page by adding and ordering sections.',
      validation: (Rule) => Rule.min(1).error('Add at least one section.'),
    }),
  ],
})
