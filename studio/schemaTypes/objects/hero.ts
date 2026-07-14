import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({name: 'headline', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'subheadline', type: 'text', rows: 3}),
    defineField({name: 'backgroundImage', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'backgroundImageUrl',
      title: 'Background Image URL (External)',
      type: 'url',
      description: 'Use an external image URL instead of uploading. If both are set, uploaded image takes priority.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https'], allowRelative: false}),
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string'}),
        defineField({name: 'href', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string'}),
        defineField({name: 'href', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'badges',
      title: 'Badges / Tags',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string'}),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (e.g., "BookOpen", "HeartPulse")',
            }),
            defineField({
              name: 'color',
              title: 'Color Class',
              type: 'string',
              description: 'Tailwind color classes (e.g., "bg-primary/10 text-primary")',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'layout',
      type: 'string',
      initialValue: 'centered',
      options: {
        list: [
          {title: 'Centered', value: 'centered'},
          {title: 'Split (Text + Image)', value: 'split'},
          {title: 'Full Width', value: 'fullWidth'},
        ],
      },
    }),
  ],
})
