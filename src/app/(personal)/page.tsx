import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { IndexPageLayout } from '~/components/layout';
import { HomePagePreview } from '~/components/previews/index-page-preview';

import { PreviewSuspense } from '~/components/previews/preview-suspense';
import { PreviewWrapper } from '~/components/previews/preview-wrapper';
import { getHomePage } from '~/sanity/lib/sanity.client';
import { getPreviewToken } from '~/sanity/lib/sanity.server.preview';
import { notFound } from 'next/navigation';

export default async function Home() {
  const token = getPreviewToken();

  const data = (await getHomePage({ token })) || {
    title: '',
    overview: [],
    showcaseProjects: [],
  };

  if (!data && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <IndexPageLayout data={data} />
              </PreviewWrapper>
            }
          >
            <HomePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <IndexPageLayout data={data} />
      )}
    </>
  );
}
