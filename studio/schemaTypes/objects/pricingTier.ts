import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricingTier',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Tier Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', type: 'text', rows: 2}),
    defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string', initialValue: 'Get Quote'}),
    defineField({name: 'ctaHref', title: 'CTA Link', type: 'string', initialValue: '/contact'}),
  ],
})
