'use client';
import { usePreview } from '~/sanity/lib/sanity.preview';
import { homePageQuery } from '~/sanity/lib/sanity.queries';
import { IndexPageLayout } from '~/components/layout';
import type { HomePagePayload } from '~/types';

export function HomePagePreview({ token }: { token: null | string }) {
  const home: HomePagePayload = usePreview(token, homePageQuery);

  if (!home) {
    return <div className="text-center">Please start editing your Home document to see the preview!</div>;
  }

  return <IndexPageLayout data={home} />;
}
