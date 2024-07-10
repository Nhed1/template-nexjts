import { lucia } from "@/app/db";
import { createUser, getUserByEmail } from "@/app/db/users/queries";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";

interface IClientUser {
  email: string;
  name: string;
  password: string;
}

const setSessionCookie = async (userId: number) => {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
};

export const signUp = async (values: IClientUser) => {
  try {
    const users = await getUserByEmail(values.email);
    if (users.length > 0) throw new Error("user already exists");

    const hashedPassword = await new Argon2id().hash(values.password);

    const user = await createUser({
      hashedPassword,
      email: values.email,
      name: values.name,
    });

    const userId = Number(user.lastInsertRowid);
    setSessionCookie(userId);

    return { success: true, message: "user created" };
  } catch (error) {
    return { success: false, error, message: "something went wrong" };
  }
};

export const signIn = async (values: IClientUser) => {
  try {
    const users = await getUserByEmail(values.email);
    const user = users[0];

    if (users.length === 0 || !user.hashedPassword)
      throw new Error("user doesn't exists");

    const passwordMatch = await new Argon2id().verify(
      user.hashedPassword,
      values.password
    );

    if (!passwordMatch) throw new Error("invalid credentials");

    setSessionCookie(user.id);

    return { success: true, message: "user created" };
  } catch (error) {
    return { success: false, error, message: "something went wrong" };
  }
};
