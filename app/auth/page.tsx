import { Button } from "@/components/ui/button";

export default function Auth() {
  return (
    <form>
      <h1>Sign In</h1>
      <input placeholder="email"></input>
      <input placeholder="password"></input>
      <Button type="submit">Sign In</Button>
    </form>
  );
}
