"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>
              <button onClick={() => signOut()}>
                <span>Logout</span>
              </button>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <>
              <button onClick={() => signIn("github")}>
                <span>Login</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
