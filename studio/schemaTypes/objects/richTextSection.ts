import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'richTextSection',
  title: 'Rich Text Content',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({
      name: 'body',
      title: 'Content',
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
              {
                name: 'internalLink',
                type: 'object',
                fields: [
                  defineField({
                    name: 'reference',
                    type: 'reference',
                    to: [
                      {type: 'servicePage'},
                      {type: 'industryPage'},
                      {type: 'useCasePage'},
                      {type: 'blogPost'},
                      {type: 'caseStudy'},
                      {type: 'landingPage'},
                    ],
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
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for accessibility and SEO.',
            }),
            defineField({name: 'caption', type: 'string'}),
          ],
        },
      ],
    }),
  ],
})
