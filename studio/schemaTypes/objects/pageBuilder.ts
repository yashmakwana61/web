import {defineType} from 'sanity'

export default defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    {type: 'hero', title: 'Hero Section'},
    {type: 'featureGrid'},
    {type: 'processTimeline'},
    {type: 'faqSection', title: 'FAQ Section'},
    {type: 'ctaSection', title: 'Call to Action'},
    {type: 'richTextSection', title: 'Rich Text Content'},
    {type: 'testimonialSection', title: 'Testimonials'},
    {type: 'metricsSection', title: 'Metrics / Stats'},
  ],
})
