import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInTab } from "./sign-in-tab";
import { SignUpTab } from "./sign-up-tab";

export default function Auth() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue="sign-in" className="w-[400px] max-h-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Registrar</TabsTrigger>
        </TabsList>
        <SignInTab />
        <SignUpTab />
      </Tabs>
    </div>
  );
}
