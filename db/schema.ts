import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("bw-bids", {
  id: serial("id").primaryKey(),
});
