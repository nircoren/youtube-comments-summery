import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginGoogle({
  closeNavBar,
}: {
  closeNavBar: Function;
}) {
  const { data: session, status } = useSession();
  const isMenuOpen = false;
  return (
    // <button onClick={() => signIn('google')}>Sign in with Google</button>
    <>
      {
        session ? (
          <>
            <div className="dropdown dropdown-bottom dropdown-end">
              <img
                tabIndex={0}
                role="button"
                className="w-12 rounded-full ml-4"
                src={session.user?.image ?? ""}
                alt=""
                onClick={() => closeNavBar()}
              />
              <div
                className="p-0 mt-4 bg-dark border-[.5px] border-body-color/50 rounded 
              dropdown-content z-[1] menu"
                tabIndex={0}
              >
                <ul className="shadow rounded-box w-52 divide-y dark:text-white">
                  <li className="px-4 py-2">
                    Signed in as {session.user?.name}
                  </li>
                  {/* <li>
                    <a>
                      <Link
                        href="/settings"
                        className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                      >
                        Billing
                      </Link>
                    </a>
                  </li> */}
                  <li className="hover:bg-menuItemHover border-radius: 0">
                    <a className="px-4 py-2" onClick={() => signOut()}>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
