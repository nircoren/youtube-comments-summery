import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginGoogle() {
  const { data: session, status } = useSession();
  return (
    // <button onClick={() => signIn('google')}>Sign in with Google</button>
    <>
      {
        session ? (
          <>
            <button
              className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
              onClick={() => signOut()}
            >
              Sign out
            </button>
            <p className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block">
              {session?.user?.name}!
            </p>
            <img
              className="w-12 rounded-full"
              src={session.user?.image ?? ""}
              alt=""
            />
          </>
        ) : (
          <>
            <Link
              href="/signin"
              className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
            >
              Sign Up
            </Link>
          </>
        )
        // (
        //   <button onClick={() => signIn("google", { redirect: false })}>
        //     Sign in with Google
        //   </button>
        // )
      }
    </>
  );
}
