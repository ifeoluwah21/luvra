"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, PropsWithChildren } from "react";

const NavLink: FC<
  PropsWithChildren<
    LinkProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string }
  >
> = ({ href, className, children, ...props }) => {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        className,
        `${pathname === href ? "text-white" : "text-custom-text"}`,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
