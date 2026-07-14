import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'pageBuilder',
      description: 'Add and order sections to build the homepage.',
    }),
  ],
})
