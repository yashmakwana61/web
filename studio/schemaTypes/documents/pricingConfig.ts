import {defineField, defineType} from 'sanity'

// Singleton — see structure/deskStructure.ts, which pins this to a single
// non-creatable, non-deletable list item instead of the usual document list.
export default defineType({
  name: 'pricingConfig',
  title: 'Pricing Config',
  type: 'document',
  fields: [
    defineField({
      name: 'baseCurrency',
      type: 'string',
      initialValue: 'USD',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fxRates',
      title: 'FX Rates (relative to base currency)',
      type: 'object',
      fields: [
        defineField({name: 'USD', type: 'number'}),
        defineField({name: 'EUR', type: 'number'}),
        defineField({name: 'GBP', type: 'number'}),
        defineField({name: 'AED', type: 'number'}),
        defineField({name: 'SGD', type: 'number'}),
      ],
    }),
    defineField({name: 'onboardingHours', type: 'number', validation: (Rule) => Rule.min(0)}),
    defineField({name: 'onboardingRate', title: 'Onboarding Rate (per hour)', type: 'number', validation: (Rule) => Rule.min(0)}),
    defineField({
      name: 'discounts',
      type: 'object',
      fields: [
        defineField({
          name: 'annual',
          type: 'number',
          description: 'Fractional discount, e.g. 0.1 for 10%',
          validation: (Rule) => Rule.min(0).max(1),
        }),
        defineField({
          name: 'biennial',
          type: 'number',
          description: 'Fractional discount, e.g. 0.15 for 15%',
          validation: (Rule) => Rule.min(0).max(1),
        }),
      ],
    }),
  ],
})
