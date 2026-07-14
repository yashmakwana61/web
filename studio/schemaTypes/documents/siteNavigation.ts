import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteNavigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Main Navigation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuItems',
      type: 'array',
      of: [
        {
          name: 'navLink',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'to', title: 'Path / URL', type: 'string', validation: (Rule) => Rule.required()}),
          ],
        },
        {
          name: 'navDropdown',
          title: 'Dropdown Menu',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'items',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                {
                  name: 'dropdownItem',
                  type: 'object',
                  fields: [
                    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
                    defineField({
                      name: 'to',
                      title: 'Path / URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'icon',
                      title: 'Icon Name',
                      type: 'string',
                      description: 'Lucide icon name (e.g., Settings, Database)',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
