"use client";
import { action2 } from "@/actions/serveractions";
import { SessionProvider, signOut } from "next-auth/react";

import { useSession } from "next-auth/react";

function InShow() {
  const { data } = useSession();
  return (
    <div>
      login name is [{data?.user?.username}] <br />
      <button onClick={() => signOut({ callbackUrl: "/" })}>sign out</button>
      <hr />
      <button onClick={async () => await action2()}>server action 2</button>
    </div>
  );
}

function Show() {
  return (
    <SessionProvider>
      <InShow />
    </SessionProvider>
  );
}
export default Show;
