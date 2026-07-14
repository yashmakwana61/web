import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  type: 'object',
  fields: [
    defineField({name: 'quote', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
    defineField({name: 'author', title: 'Author Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'role', title: 'Author Role / Title', type: 'string'}),
    defineField({name: 'company', type: 'string'}),
    defineField({name: 'avatar', title: 'Author Photo', type: 'image', options: {hotspot: true}}),
  ],
})
