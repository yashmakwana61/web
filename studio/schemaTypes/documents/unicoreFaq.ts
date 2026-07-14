import {defineField, defineType} from 'sanity'

// Named unicoreFaq (not faqItem) since the object type `faq` already exists
// (question/answer pair used inside pageBuilder's faqSection); this keeps the
// UniCore-prefixed naming convention consistent for the new top-level type.
export default defineType({
  name: 'unicoreFaq',
  title: 'UniCore FAQ',
  type: 'document',
  fields: [
    defineField({name: 'question', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'answer', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
    defineField({name: 'topic', type: 'string'}),
  ],
})
