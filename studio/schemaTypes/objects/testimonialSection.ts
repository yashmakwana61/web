import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'What Our Clients Say',
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      of: [{type: 'testimonial'}],
      validation: (Rule) => Rule.min(1),
    }),
  ],
})
