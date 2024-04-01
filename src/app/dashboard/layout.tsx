import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";

type IProp = Readonly<{
  children: ReactNode;
}>;

export default async function DashboardLayout({ children }: IProp) {
  const session = await getServerAuthSession();

  if (!session?.user) redirect("/");

  return children;
}
