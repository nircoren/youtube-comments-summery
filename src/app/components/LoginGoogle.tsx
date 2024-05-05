import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginGoogle() {
  const { data: session , status } = useSession();
  return (
    // <button onClick={() => signIn('google')}>Sign in with Google</button>

    <div>
      {session ? (
        <div>
          <p>Welcome, {session?.user?.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <button onClick={() => signIn('google', {redirect:false})}>Sign in with Google</button>
      )}
    </div>
  );
}
