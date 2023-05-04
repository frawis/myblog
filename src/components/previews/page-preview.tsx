'use client';

import { usePreview } from '~/sanity/lib/sanity.preview';
import { pagesBySlugQuery } from '~/sanity/lib/sanity.queries';
import type { PagePayload } from '~/types';

import { Page } from '~/components/layout/page-layout';

export function PagePreview({ token, slug }: { token: null | string; slug: string }) {
  const about: PagePayload = usePreview(token, pagesBySlugQuery, {
    slug: slug,
  });

  return <Page data={about} />;
}
