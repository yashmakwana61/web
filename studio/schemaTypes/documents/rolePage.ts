import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rolePage',
  title: 'Role Page',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      type: 'string',
      description: 'e.g., "Registrar", "Bursar", "IT Director"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /unicore/roles/{slug}',
      options: {source: 'role', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'jobToBeDone', title: 'Job To Be Done', type: 'text', rows: 3}),
    defineField({name: 'painPoints', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'modules', type: 'array', of: [{type: 'reference', to: [{type: 'module'}]}]}),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
  ],
})
