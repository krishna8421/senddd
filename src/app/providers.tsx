"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

type IProp = Readonly<{
  children: ReactNode;
}>;

export function Providers({ children }: IProp) {
  return (
    <NextUIProvider>
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
}
