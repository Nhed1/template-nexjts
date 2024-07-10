import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

export const SignUpTab = () => {
  return (
    <TabsContent value="sign-up">
      <Card>
        <CardHeader>
          <CardTitle>Registrar</CardTitle>
          <CardDescription>Preencha suas credenciais</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="pedro.duarte@gmail.com"
              type="email"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Pedro Duarte" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" placeholder="123456" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Registrar</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
