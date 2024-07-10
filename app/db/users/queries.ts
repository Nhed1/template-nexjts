import { eq } from "drizzle-orm";
import { db } from "..";
import { InsertUser, SelectUser, userTable } from "../schema";

export const getUserByEmail = (
  email: SelectUser["email"]
): Promise<SelectUser[]> => {
  return db.select().from(userTable).where(eq(userTable.email, email));
};

export const createUser = async (data: InsertUser) => {
  await db.insert(userTable).values(data);
};
