import { pgTable, uuid, timestamp, text, boolean } from 'drizzle-orm/pg-core';

export const workspaces = pgTable('workspaces', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  created_at: timestamp('created_at', { withTimezone: true, mode: 'string' }),
  workspace_owner: text('workspace_owner').notNull(),
  title: text('title').notNull(),
  icon_id: text('icon_id').notNull(),
  data: text('data'),
  is_in_trash: boolean('is_in_trash'),
  logo: text('logo'),
  banner_url: text('banner_url'),
});

export const files = pgTable('files', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  created_at: timestamp('created_at', { withTimezone: true, mode: 'string' }),
  title: text('title').notNull(),
  icon_id: text('icon_id').notNull(),
  data: text('data'),
  is_in_trash: boolean('is_in_trash'),
  logo: text('logo'),
  banner_url: text('banner_url'),
  workspace_id: uuid('workspace_id').references(() => workspaces.id, {
    onDelete: 'cascade',
  }),
  folderId: uuid('folderId').references(() => folders.id, {
    onDelete: 'cascade',
  }),
});

export const folders = pgTable('folders', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  created_at: timestamp('created_at', { withTimezone: true, mode: 'string' }),
  title: text('title').notNull(),
  icon_id: text('icon_id').notNull(),
  data: text('data'),
  is_in_trash: boolean('is_in_trash'),
  logo: text('logo'),
  banner_url: text('banner_url'),
  workspace_id: uuid('workspace_id').references(() => workspaces.id, {
    onDelete: 'cascade',
  }),
});
