'use client';

import { usePreview } from '~/sanity/lib/sanity.preview';
import { projectBySlugQuery } from '~/sanity/lib/sanity.queries';
import type { ProjectPayload } from '~/types';

import { ProjectPage } from '~/components/layout/project-layout';

export function ProjectPreview({ token, slug }: { token: null | string; slug: string }) {
  const project: ProjectPayload = usePreview(token, projectBySlugQuery, {
    slug: slug,
  });

  return <ProjectPage data={project} />;
}
