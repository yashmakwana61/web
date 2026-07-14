import type {StructureResolver} from 'sanity/structure'

const SINGLETON_TYPES = new Set(['homePage', 'aboutPage', 'contactPage', 'siteNavigation', 'pricingConfig'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Content')
        .child(
          S.list()
            .title('Site Content')
            .items([
              S.listItem().title('Home Page').id('homePage').child(S.document().schemaType('homePage').documentId('homePage')),
              S.listItem().title('About Page').id('aboutPage').child(S.document().schemaType('aboutPage').documentId('aboutPage')),
              S.listItem().title('Contact Page').id('contactPage').child(S.document().schemaType('contactPage').documentId('contactPage')),
              S.listItem().title('Site Navigation').id('siteNavigation').child(S.document().schemaType('siteNavigation').documentId('siteNavigation')),
              S.divider(),
              S.documentTypeListItem('servicePage').title('Services'),
              S.documentTypeListItem('industryPage').title('Industries'),
              S.documentTypeListItem('useCasePage').title('Use Cases'),
              S.documentTypeListItem('landingPage').title('Landing Pages'),
              S.divider(),
              S.documentTypeListItem('blogPost').title('Blog Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('tag').title('Tags'),
              S.documentTypeListItem('caseStudy').title('Case Studies'),
              S.divider(),
              S.documentTypeListItem('lead').title('Leads (legacy — see Supabase)'),
            ]),
        ),
      S.listItem()
        .title('UniCore')
        .child(
          S.list()
            .title('UniCore')
            .items([
              S.listItem()
                .title('Pricing Config')
                .id('pricingConfig')
                .child(S.document().schemaType('pricingConfig').documentId('pricingConfig')),
              S.documentTypeListItem('userPack').title('User Packs'),
              S.divider(),
              S.documentTypeListItem('module').title('Modules'),
              S.documentTypeListItem('solutionPage').title('Solution Pages'),
              S.documentTypeListItem('rolePage').title('Role Pages'),
              S.documentTypeListItem('comparison').title('Comparisons'),
              S.documentTypeListItem('unicoreCaseStudy').title('Case Studies'),
              S.documentTypeListItem('leadMagnet').title('Lead Magnets'),
              S.documentTypeListItem('glossaryTerm').title('Glossary Terms'),
              S.documentTypeListItem('unicoreFaq').title('FAQs'),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? '') && !isAlreadyListed(item.getId()),
      ),
    ])

function isAlreadyListed(id: string | undefined) {
  return new Set([
    'servicePage',
    'industryPage',
    'useCasePage',
    'landingPage',
    'blogPost',
    'category',
    'tag',
    'caseStudy',
    'lead',
    'userPack',
    'module',
    'solutionPage',
    'rolePage',
    'comparison',
    'unicoreCaseStudy',
    'leadMagnet',
    'glossaryTerm',
    'unicoreFaq',
  ]).has(id ?? '')
}
