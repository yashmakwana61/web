import type {SchemaTypeDefinition} from 'sanity'

// Existing production content — ported as-is so this Studio's deployed schema
// is a strict superset of what's live today. Do not modify without checking
// how src/lib/sanity/queries.js in the main Next.js app consumes each type.
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import contactPage from './documents/contactPage'
import siteNavigation from './documents/siteNavigation'
import servicePage from './documents/servicePage'
import industryPage from './documents/industryPage'
import useCasePage from './documents/useCasePage'
import blogPost from './documents/blogPost'
import caseStudy from './documents/caseStudy'
import landingPage from './documents/landingPage'
import lead from './documents/lead'
import category from './documents/category'
import tag from './documents/tag'

import seo from './objects/seo'
import hero from './objects/hero'
import featureCard from './objects/featureCard'
import featureGrid from './objects/featureGrid'
import faq from './objects/faq'
import faqSection from './objects/faqSection'
import processStep from './objects/processStep'
import processTimeline from './objects/processTimeline'
import ctaSection from './objects/ctaSection'
import pricingTier from './objects/pricingTier'
import richTextSection from './objects/richTextSection'
import testimonial from './objects/testimonial'
import testimonialSection from './objects/testimonialSection'
import metricsSection from './objects/metricsSection'
import pageBuilder from './objects/pageBuilder'

// UniCore — new for this phase.
import module from './documents/module'
import userPack from './documents/userPack'
import pricingConfig from './documents/pricingConfig'
import solutionPage from './documents/solutionPage'
import rolePage from './documents/rolePage'
import comparison from './documents/comparison'
import unicoreCaseStudy from './documents/unicoreCaseStudy'
import leadMagnet from './documents/leadMagnet'
import glossaryTerm from './documents/glossaryTerm'
import unicoreFaq from './documents/unicoreFaq'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Existing documents
  homePage,
  aboutPage,
  contactPage,
  siteNavigation,
  servicePage,
  industryPage,
  useCasePage,
  blogPost,
  caseStudy,
  landingPage,
  lead,
  category,
  tag,

  // Shared objects
  seo,
  hero,
  featureCard,
  featureGrid,
  faq,
  faqSection,
  processStep,
  processTimeline,
  ctaSection,
  pricingTier,
  richTextSection,
  testimonial,
  testimonialSection,
  metricsSection,
  pageBuilder,

  // UniCore documents
  module,
  userPack,
  pricingConfig,
  solutionPage,
  rolePage,
  comparison,
  unicoreCaseStudy,
  leadMagnet,
  glossaryTerm,
  unicoreFaq,
]
