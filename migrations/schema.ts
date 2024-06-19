import { pgTable, pgEnum, uuid, timestamp, text, boolean, foreignKey } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const aal_level = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const code_challenge_method = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factor_status = pgEnum("factor_status", ['unverified', 'verified'])
export const factor_type = pgEnum("factor_type", ['totp', 'webauthn'])
export const one_time_token_type = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])
export const request_status = pgEnum("request_status", ['PENDING', 'SUCCESS', 'ERROR'])
export const key_status = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const key_type = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const pricing_plan_interval = pgEnum("pricing_plan_interval", ['day', 'week', 'month', 'year'])
export const pricing_type = pgEnum("pricing_type", ['one_time', 'recurring'])
export const subscription_status = pgEnum("subscription_status", ['trialing', 'active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid'])
export const action = pgEnum("action", ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR'])
export const equality_op = pgEnum("equality_op", ['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'])


export const workspaces = pgTable("workspaces", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	workspace_owner: text("workspace_owner").notNull(),
	title: text("title").notNull(),
	icon_id: text("icon_id").notNull(),
	data: text("data"),
	is_in_trash: boolean("is_in_trash"),
	logo: text("logo"),
	banner_url: text("banner_url"),
});

export const files = pgTable("files", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	title: text("title").notNull(),
	icon_id: text("icon_id").notNull(),
	data: text("data"),
	is_in_trash: boolean("is_in_trash"),
	logo: text("logo"),
	banner_url: text("banner_url"),
	workspace_id: uuid("workspace_id").references(() => workspaces.id, { onDelete: "cascade" } ),
	folderId: uuid("folderId").references(() => folders.id, { onDelete: "cascade" } ),
});

export const folders = pgTable("folders", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	title: text("title").notNull(),
	icon_id: text("icon_id").notNull(),
	data: text("data"),
	is_in_trash: boolean("is_in_trash"),
	logo: text("logo"),
	banner_url: text("banner_url"),
	workspace_id: uuid("workspace_id").references(() => workspaces.id, { onDelete: "cascade" } ),
});