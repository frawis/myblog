import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/documents/post';
import project from './schemas/documents/project';
import page from './schemas/documents/page';
import author from './schemas/author';
import milestone from './schemas/objects/milestone';
import duration from './schemas/objects/duration';
import timeline from './schemas/objects/timeline';
import home from './schemas/singletons/home';
import settings from './schemas/singletons/settings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, page, author, category, milestone, duration, timeline, blockContent, home, settings],
};
