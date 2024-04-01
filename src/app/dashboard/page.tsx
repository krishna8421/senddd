import { getServerAuthSession } from "@/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  const user = session?.user;

  return (
    <main className="">
      <code>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </code>
    </main>
  );
}
