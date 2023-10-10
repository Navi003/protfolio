import Link from "next/link";
import React from "react";
import { VscArrowSmallLeft } from "react-icons/vsc";
export default function Button({ children, className, href, onClick, type }) {
  if (type === "back" && href) {
    return (
      <Link
        href={href}
        className={`px-10 py-3 flex text-base font-semibold rounded bg-secondary-70 focus:outline-none focus:ring-4 focus:ring-secondary-60 items-center ${
          className && className
        }`}
      >
        <VscArrowSmallLeft width="35" height="35" /> {children}
      </Link>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`px-10 py-3 text-base font-semibold rounded bg-secondary-70 focus:outline-none focus:ring-4 focus:ring-secondary-60 ${
          className && className
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-10 py-3 text-base font-semibold rounded bg-secondary-70  focus:outline-none focus:ring-4 focus:ring-secondary-60 ${
        className && className
      }`}
    >
      {children}
    </button>
  );
}
