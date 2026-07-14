import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'module',
  title: 'Module',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /unicore/modules/{slug}',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'icon', type: 'string', description: 'Lucide icon name (e.g., "GraduationCap")'}),
    defineField({name: 'category', type: 'string'}),
    defineField({name: 'tagline', type: 'text', rows: 2}),
    defineField({name: 'problem', title: 'Problem It Solves', type: 'text', rows: 4}),
    defineField({
      name: 'body',
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
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
          },
        },
      ],
    }),
    defineField({name: 'screenshots', type: 'array', of: [{type: 'image', options: {hotspot: true}}]}),
    defineField({name: 'priceUSD', title: 'Price (USD)', type: 'number', validation: (Rule) => Rule.min(0)}),
    defineField({
      name: 'dependsOn',
      title: 'Depends On',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'module'}]}],
    }),
    defineField({
      name: 'relatedModules',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'module'}]}],
    }),
    defineField({name: 'faqs', type: 'array', of: [{type: 'faq', title: 'FAQ Item'}]}),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
  ],
})
