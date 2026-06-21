'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';
import Link from '@/components/Link';
import { urlFor } from './image';

const components = {
  block: {
    normal: ({ children }) => <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 mt-8 text-2xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-6 text-xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-2 mt-4 text-lg font-bold">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-lg text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted-foreground">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm text-primary">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = value?.blank ? '_blank' : undefined;
      const rel = value?.blank ? 'noopener noreferrer' : undefined;
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={rel} 
          className="text-primary hover:underline font-medium"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ value, children }) => {
      const type = value?.type;
      const slug = value?.slug;
      
      let to = '#';
      if (slug) {
        if (type === 'servicePage') to = `/services/${slug}`;
        else if (type === 'industryPage') to = `/industries/${slug}`;
        else if (type === 'useCasePage') to = `/use-cases/${slug}`;
        else if (type === 'blogPost') to = `/blog/${slug}`;
        else if (type === 'caseStudy') to = `/case-studies/${slug}`;
        else to = `/${slug}`;
      }
      
      return (
        <Link to={to} className="text-primary hover:underline font-medium">
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8 overflow-hidden rounded-xl border border-border bg-muted">
          <img
            src={urlFor(value).url()}
            alt={value.alt || 'Content Image'}
            className="w-full h-auto object-cover max-h-[500px]"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="p-3 text-center text-sm text-muted-foreground border-t border-border">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function CustomPortableText({ value }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
export default CustomPortableText;
