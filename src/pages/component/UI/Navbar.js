"use client";

export default function Navbar() {
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
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <a>CPU / Processor</a>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SIK</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={1}>
            <details>
              <summary className="font-semibold ">Categories</summary>
              <ul className="p-2  text-black  ">
                <li>
                  <a>CPU / Processor</a>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn  btn-secondary"> PC Builder</a>
      </div>
    </div>
  );
}
