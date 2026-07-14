import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'seo', title: 'SEO Settings', type: 'seo'}),
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'subheadline', type: 'text', rows: 2}),
    defineField({name: 'email', title: 'Email Address', type: 'string'}),
    defineField({name: 'phone', title: 'Phone Number', type: 'string'}),
    defineField({name: 'address', title: 'Office Address', type: 'text', rows: 2}),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Format with country code, e.g., +919876543210',
    }),
    defineField({name: 'whatsappMessage', title: 'WhatsApp Pre-filled Message', type: 'string'}),
  ],
})
