import React, { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import MobileNavigation from "./MobileNavigation";
import UserAvatar from "./UserAvatar";
import NavLink from "./NavLink";

const Nav: React.FC = () => {
  return (
    <>
      {/* Nav bar for Desktop screens */}
      <nav className="hidden w-full items-center justify-center gap-4 lg:flex">
        <ul className="bg-dark-surface-200 border-custom-border/20 flex items-center gap-8 rounded-full border px-8 py-2 text-sm backdrop-blur-sm">
          <li>
            <NavLink
              className="px-1 py-1.5 leading-normal font-semibold transition-colors hover:text-white"
              href={"/"}
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-1 py-1.5 leading-normal font-semibold transition-colors hover:text-white"
              href={"/auctions"}
            >
              Auctions
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-1 py-1.5 leading-normal font-semibold transition-colors hover:text-white"
              href={"/drops"}
            >
              Drops
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-1 py-1.5 leading-normal font-semibold transition-colors hover:text-white"
              href={"#"}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-1 py-1.5 leading-normal font-semibold transition-colors hover:text-white"
              href={"/create"}
            >
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Navigation for Mobile screen */}
      <SessionProvider>
        <MobileNavigation />
      </SessionProvider>

      {/* Desktop screen*/}
      <div className="hidden items-center gap-3 lg:flex">
        <Suspense>
          <UserAvatar />
        </Suspense>
      </div>
    </>
  );
};

export default Nav;
