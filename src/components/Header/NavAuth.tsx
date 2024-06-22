import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginGoogle({
  closeNavBar,
}: {
  closeNavBar: Function;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <img style={{ maxHeight: "50px" }} src="./loading.gif" alt="" />;
  }

  return (
    <>
      {status === "authenticated" ? (
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
            className="p-0 mt-4 bg-dark border-[.5px] border-body-color/50 rounded dropdown-content z-[1] menu"
            tabIndex={0}
          >
            <ul className="shadow rounded-box w-52 divide-y dark:">
              <li className="px-4 py-2">Signed in as {session.user?.name}</li>
              <li className="hover:bg-menuItemHover border-radius: 0">
                <a className="px-4 py-2" onClick={() => signOut()}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <Link
            href="/signin"
            className=" px-4  text-base font-medium text-dark hover:opacity-70 dark: md:block"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className=" px-4 py-2 ease-in-up shadow-btn hover:shadow-btn-hover rounded-sm bg-primary text-base font-medium  transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );
}
