import {defineField, defineType} from 'sanity'

// Ported from the deployed schema as-is. This type is legacy: new leads are
// captured in Supabase (see supabase/migrations). Do not add fields here or
// point any new write path at this type.
export default defineType({
  name: 'lead',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', readOnly: true}),
    defineField({name: 'email', type: 'string', readOnly: true}),
    defineField({name: 'phone', type: 'string', readOnly: true}),
    defineField({name: 'company', type: 'string', readOnly: true}),
    defineField({name: 'industry', type: 'string', readOnly: true}),
    defineField({name: 'message', type: 'text', readOnly: true}),
    defineField({
      name: 'status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Contacted', value: 'contacted'},
          {title: 'Closed', value: 'closed'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'submittedAt', type: 'datetime', readOnly: true}),
  ],
})
