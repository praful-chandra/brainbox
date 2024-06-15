import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({
  path: ".env",
});

if (!process.env.DB_URL) {
  console.log("❌ No Database URL found !!");
}

const client = postgres(process.env.DB_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log("⚙️ Migrating Client");
    await migrate(db, {
      migrationsFolder: "./migrations",
    });
    console.log("✅ Successfully Migrated Client.");
  } catch (err) {
    console.log("👹 Error Migrating Client", err);
  }
};

migrateDb();
export default db;
