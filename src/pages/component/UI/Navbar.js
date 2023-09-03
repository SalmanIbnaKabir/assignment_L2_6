import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="navbar bg-indigo-500 text-white">
      <div className="navbar-start">
        <div className="dropdown bg-indigo-500 ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-sm text-black dropdown-content mt-3 z-[1] bg-indigo-200 p-2 shadow  rounded-box w-52"
          >
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <Link href="/category/processor">
                    <p>CPU / Processor</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/motherboard">
                    <p>Motherboard</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/ram">
                    <p>RAM</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/power-supply-unit">
                    <p>Power Supply Unit</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/storage-device">
                    <p>Storage Device</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/monitor">
                    <p>Monitor</p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p>Others</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href="/">
          <p className="btn btn-ghost normal-case text-xl">SIK</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={1}>
            <details>
              <summary className="font-semibold ">Categories</summary>
              <ul className="p-2  text-black z-20 ">
                <li>
                  <Link href="/category/processor">
                    <p>CPU / Processor</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/motherboard">
                    <p>Motherboard</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/ram">
                    <p>RAM</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/power-supply-unit">
                    <p>Power Supply Unit</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/storage-device">
                    <p>Storage Device</p>
                  </Link>
                </li>
                <li>
                  <Link href="/category/monitor">
                    <p>Monitor</p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p>Others</p>
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          {session?.user ? (
            <li>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                type="primary"
                danger
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end ">
        <Link href="/pc-builder">
          <p className="btn  btn-secondary"> Pc Builder</p>
        </Link>
      </div>
    </div>
  );
}
