import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

// LP
const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <div>
          <p>Signed in as {session.user!.email}</p>
          <p>Expires: {session.expires}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
        <Link href="/hoge">hogeページへ</Link>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <p>Not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
        <Link href="/hoge">hogeページへ</Link>
      </div>
    );
  }
};

export default Home;
