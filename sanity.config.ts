/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/xyz/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, previewSecretId, projectId } from '~/sanity/lib/sanity.api';
import { PREVIEWABLE_DOCUMENT_TYPES } from '~/sanity/lib/sanity.constants';
import { previewDocumentNode } from '~/sanity/plugins/previewPane';
import { productionUrl } from '~/sanity/plugins/productionUrl';
import { pageStructure, singletonPlugin } from '~/sanity/plugins/settings';
import { schema } from '~/sanity/schema';
import home from '~/sanity/schemas/singletons/home';
import settings from '~/sanity/schemas/singletons/settings';

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Personal Website';

export default defineConfig({
  basePath: '/xyz',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin([home.name, settings.name]),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    unsplashImageAsset(),
  ],
});
