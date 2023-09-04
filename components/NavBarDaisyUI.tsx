// navbar using daisyUI https://daisyui.com/components/navbar/
import Link from "next/link";
import Image from "next/image";
import itemsNav from "../types/menuTypeData";
import UserLinks from "./UserLinksDaisyUI";

export default function NavBarDaisyUI() {
  const menuList = itemsNav.map((e) => {
    if (!e.children) {
      return (
        <li key={e.name}>
          <Link href={e.url!}>{e.name}</Link>
        </li>
      );
    } else {
      return (
        <li key={e.name}>
          {e.url ? <Link href={e.url}>{e.name}</Link> : e.name}
          <ul className="p-2">
            {e.children.map((ec) => (
              <li key={ec.name}>
                <Link href={ec.url}>{ec.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  });
  const mobileMenuList = itemsNav.map((e) => {
    if (!e.children) {
      return (
        <li key={"MB" + e.name}>
          <Link href={e.url!}>{e.name}</Link>
        </li>
      );
    } else {
      return (
        <li key={"MB" + e.name} tabIndex={0}>
          <details>
            <summary>{e.name}</summary>
            <ul className="p-2">
              {e.children.map((ec) => (
                <li key={"MB" + ec.name}>
                  <Link href={ec.url}>{ec.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      );
    }
  });
  return (
    <div className="navbar bg-base-100 z-40">
      <div className="navbar-center">
        <div className="dropdown">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            src={"/popLogo.svg"}
            width={100}
            height={100}
            alt="logo"
            className="w-16 h-auto"
          />
          Pops Recording System
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{mobileMenuList}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link href="/authPage/login" className="btn">
          Login
        </Link> */}
        <UserLinks />
      </div>
    </div>
  );
}
