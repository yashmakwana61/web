// Centralized GROQ query library for PreciseFect

// 1. Navigation
export const navigationQuery = `
  *[_type == "siteNavigation" && _id == "siteNavigation"][0] {
    title,
    menuItems[] {
      _type,
      label,
      to,
      items[] {
        label,
        to,
        icon
      }
    }
  }
`;

// 2. Singleton Pages
export const homePageQuery = `
  *[_type == "homePage" && _id == "homePage"][0] {
    title,
    seo,
    sections[] {
      ...,
      _type == "richTextSection" => {
        body[] {
          ...,
          markDefs[] {
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current,
              "type": @.reference->_type
            }
          }
        }
      }
    }
  }
`;

export const aboutPageQuery = `
  *[_type == "aboutPage" && _id == "aboutPage"][0] {
    title,
    seo,
    sections[] {
      ...,
      _type == "richTextSection" => {
        body[] {
          ...,
          markDefs[] {
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current,
              "type": @.reference->_type
            }
          }
        }
      }
    }
  }
`;

export const contactPageQuery = `
  *[_type == "contactPage" && _id == "contactPage"][0] {
    title,
    seo,
    headline,
    subheadline,
    email,
    phone,
    address,
    whatsappNumber,
    whatsappMessage
  }
`;

// 3. Service Pages
export const servicePageBySlugQuery = `
  *[_type == "servicePage" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    tagline,
    breadcrumb,
    overview,
    features,
    process,
    pricing,
    faqs,
    sections[] {
      ...,
      _type == "richTextSection" => {
        body[] {
          ...,
          markDefs[] {
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current,
              "type": @.reference->_type
            }
          }
        }
      }
    }
  }
`;

export const servicesListQuery = `
  *[_type == "servicePage"] | order(title asc) {
    title,
    slug,
    tagline,
    breadcrumb
  }
`;

// 4. Industry Pages
export const industryPageBySlugQuery = `
  *[_type == "industryPage" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    icon,
    hero,
    solutions,
    keyFeatures,
    useCases,
    sections[] {
      ...,
      _type == "richTextSection" => {
        body[] {
          ...,
          markDefs[] {
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current,
              "type": @.reference->_type
            }
          }
        }
      }
    }
  }
`;

export const industriesListQuery = `
  *[_type == "industryPage"] | order(title asc) {
    title,
    slug,
    icon,
    "heroDescription": hero.description
  }
`;

// 5. Use Case Pages
export const useCasePageBySlugQuery = `
  *[_type == "useCasePage" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    hero,
    processes,
    pipelines,
    sections[] {
      ...,
      _type == "richTextSection" => {
        body[] {
          ...,
          markDefs[] {
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current,
              "type": @.reference->_type
            }
          }
        }
      }
    }
  }
`;

// 6. Blog Posts
export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    excerpt,
    publishedAt,
    category-> { title, slug },
    tags[]-> { title, slug },
    featuredImage,
    body[] {
      ...,
      markDefs[] {
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "type": @.reference->_type
        }
      }
    },
    author-> { name, avatar, bio }
  }
`;

export const blogListQuery = `
  *[_type == "blogPost" && ($category == null || category->slug.current == $category)] | order(publishedAt desc) [$start...$end] {
    title,
    slug,
    excerpt,
    publishedAt,
    category-> { title, slug },
    featuredImage,
    "readTime": round(length(pt::text(body)) / 5 / 200) + 1
  }
`;

export const blogCountQuery = `
  count(*[_type == "blogPost" && ($category == null || category->slug.current == $category)])
`;

export const blogCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    title,
    slug
  }
`;

// 7. Case Studies
export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    excerpt,
    industry-> { title, slug },
    industryLabel,
    service-> { title, slug },
    metrics,
    featuredImage,
    challenge,
    solution,
    results,
    body[] {
      ...,
      markDefs[] {
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "type": @.reference->_type
        }
      }
    },
    testimonial
  }
`;

export const caseStudiesListQuery = `
  *[_type == "caseStudy" && ($industry == null || industry->slug.current == $industry)] | order(title asc) [$start...$end] {
    title,
    slug,
    excerpt,
    industry-> { title, slug },
    industryLabel,
    metrics,
    featuredImage
  }
`;

export const caseStudiesCountQuery = `
  count(*[_type == "caseStudy" && ($industry == null || industry->slug.current == $industry)])
`;

// 8. Flexible Landing Pages
export const landingPageBySlugQuery = `
  *[_type == "landingPage" && slug.current == $slug][0] {
    title,
    slug,
    seo,
    sections[] {
      ...,
      _type == "richTextSection" => {
        body[] {
          ...,
          markDefs[] {
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current,
              "type": @.reference->_type
            }
          }
        }
      }
    }
  }
`;
