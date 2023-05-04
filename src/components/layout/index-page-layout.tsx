import type { Page } from '~/models/page';
import type { Post } from '~/models/post';
import Heading from '~/components/ui/heading';
import { RenderSection } from '~/components/sections';
import PostList from '~/components/shared/post-list';
import { HomePagePayload } from '~/types';
import Link from 'next/link';
import { resolveHref } from '~/sanity/lib/sanity.links';
import { Header } from '~/components/shared/header';
import { ProjectListItem } from '~/components/sections/project-list-item';

type Props = {
  page: Page;
  posts: Post[];
  preview?: boolean;
};

const IndexPage = ({ data }: { data: HomePagePayload }) => {
  const { overview, showcaseProjects, title } = data;

  return (
    <>
      <div className="space-y-20 px-4 lg:px-8 py-4">
        {/* Header */}
        {title && <Header title={title} description={overview} />}
        {/* Showcase projects */}
        {showcaseProjects && showcaseProjects.length > 0 && (
          <div className="mx-auto max-w-[100rem] rounded-md border">
            {showcaseProjects.map((project, key) => {
              const href = resolveHref(project._type, project.slug);
              if (!href) {
                return null;
              }
              return (
                <Link key={key} href={href}>
                  <ProjectListItem project={project} odd={key % 2} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default IndexPage;
