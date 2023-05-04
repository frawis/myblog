import { getProjectBySlug } from '~/sanity/lib/sanity.client';
import { getPreviewToken } from '~/sanity/lib/sanity.server.preview';
import { notFound } from 'next/navigation';
import { PreviewSuspense } from 'next-sanity/preview';
import { PreviewWrapper } from '~/components/previews/preview-wrapper';
import { ProjectPage } from '~/components/layout/project-layout';
import { ProjectPreview } from '~/components/previews/project-preview';

export default async function ProjectSlugRoute({ params }: { params: { slug: string } }) {
  const token = getPreviewToken();
  const data = await getProjectBySlug({ slug: params.slug });

  if (!data && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <ProjectPage data={data!} />
            </PreviewWrapper>
          }
        >
          <ProjectPreview token={token} slug={params.slug} />
        </PreviewSuspense>
      ) : (
        <ProjectPage data={data!} />
      )}
    </>
  );
}
