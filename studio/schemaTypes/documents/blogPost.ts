import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Post Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path: /blog/{slug}',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary displayed in blog listings.',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({name: 'category', type: 'reference', to: [{type: 'category'}]}),
    defineField({name: 'tags', type: 'array', of: [{type: 'reference', to: [{type: 'tag'}], title: 'Reference to tag'}]}),
    defineField({
      name: 'featuredImage',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt Text', type: 'string'})],
    }),
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
            {title: 'H4', value: 'h4'},
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
              {title: 'Underline', value: 'underline'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true}),
                  }),
                  defineField({name: 'blank', title: 'Open in new tab', type: 'boolean', initialValue: false}),
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
    defineField({name: 'author', title: 'Author Name', type: 'string'}),
    defineField({name: 'publishedAt', title: 'Published Date', type: 'datetime'}),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Featured posts appear prominently in listings.',
      initialValue: false,
    }),
    defineField({
      name: 'readTime',
      type: 'string',
      description: 'e.g., "8 min read". Auto-calculated if left empty.',
    }),
  ],
})
