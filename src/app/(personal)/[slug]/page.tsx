import { PreviewSuspense } from 'next-sanity/preview';
import { notFound } from 'next/navigation';
import { PagePreview } from '~/components/previews/page-preview';
import { PreviewWrapper } from '~/components/previews/preview-wrapper';
import { getPageBySlug } from '~/sanity/lib/sanity.client';
import { getPreviewToken } from '~/sanity/lib/sanity.server.preview';
import { Page } from '~/components/layout/page-layout';

export default async function PageSlugRoute({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const token = getPreviewToken();
  const data = await getPageBySlug({ slug });

  if (!data && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <Page data={data!} />
            </PreviewWrapper>
          }
        >
          <PagePreview token={token} slug={params.slug} />
        </PreviewSuspense>
      ) : (
        <Page data={data!} />
      )}
    </>
  );
}
