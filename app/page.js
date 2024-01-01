"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

function InHome() {
  const session = useSession();
  return (
    <main className={styles.main}>
      {session.status === "authenticated" ? (
        <>
          <button onClick={() => signOut({ callbackUrl: "/" })}>sign out</button>
          <hr/>
          <Link href="/auth2">go to auth2</Link>
        </>
      ) : (
        <div>
          <button onClick={() => signIn(null, { callbackUrl: "/auth1" })}> sign in </button>
          <hr/>
          <Link href="/auth1">go to auth1</Link>
        </div>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <SessionProvider>
      <InHome />
    </SessionProvider>
  );
}
