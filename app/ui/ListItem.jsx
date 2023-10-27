"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ListItem({ children, href, onClick }) {
  const pathname = usePathname();
  return (
    <li
      onClick={onClick}
      className={`transition-colors duration-300 cursor-pointer  font-semibold hover:text-secondary-60 hover:scale-105 ${
        pathname === href ? "text-secondary-80 font-bold " : ""
      }`}
    >
      <Link s href={href}>
        {children}
      </Link>
    </li>
  );
}
