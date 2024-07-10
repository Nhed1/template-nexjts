import { redirect } from "next/navigation";
import { getUser } from "../db";

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div>
      <h1>private page</h1>
      <p>user logged in: {user.name}</p>
    </div>
  );
}
