"use client";

import { Button } from "@/components/ui/button";
import { logOut } from "./actions/auth";
import { ReactNode } from "react";

export const SignOutButton = ({ children }: { children: ReactNode }) => {
  return <Button onClick={async () => logOut()}>{children}</Button>;
};
