import { createUser, getUserByEmail } from "@/app/db/users/queries";
import { Argon2id } from "oslo/password";

interface IClientUser {
  email: string;
  name: string;
  password: string;
}

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
  } catch (e) {
    console.log(e);
  }
};
