'use client';

import React from 'react';
import NextLink from 'next/link';

const Link = React.forwardRef(({ to, href, ...props }, ref) => {
  return <NextLink ref={ref} href={to || href || '#'} {...props} />;
});

Link.displayName = 'Link';

export default Link;
