import * as migration_20260616_205835 from './20260616_205835';
import * as migration_20260616_220530 from './20260616_220530';
import * as migration_20260723_113029_add_legal_pages from './20260723_113029_add_legal_pages';

export const migrations = [
  {
    up: migration_20260616_205835.up,
    down: migration_20260616_205835.down,
    name: '20260616_205835',
  },
  {
    up: migration_20260616_220530.up,
    down: migration_20260616_220530.down,
    name: '20260616_220530',
  },
  {
    up: migration_20260723_113029_add_legal_pages.up,
    down: migration_20260723_113029_add_legal_pages.down,
    name: '20260723_113029_add_legal_pages'
  },
];
