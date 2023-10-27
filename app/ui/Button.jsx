"use client";
import Link from "next/link";
import React from "react";

import { VscArrowSmallLeft } from "react-icons/vsc";

const base =
  "text-base font-semibold rounded  focus:outline-none focus:ring-4 rounded-sm transition-transform active:scale-[.95] ";

const types = {
  bigSquare: `focus:ring-secondary-60 flex items-center bg-secondary-70 px-10 py-3 ${base}`,
  tiny: `px-3 sm:px-2 sm:px-2 focus:ring-secondary-60 sm:text-sm sm:py-2 md:px-3 md:py-2 py-2 rounded-full text-primary-10  ${base}`,
};

export default function Button({
  style,
  children,
  className,
  href,
  onClick,
  type,
}) {
  if (type === "tiny" && href) {
    return (
      <Link
        styles={{ style }}
        className={`${types.tiny} ${className && className}`}
        href={href}
      >
        {children}
      </Link>
    );
  }

  if (type === "back" && href) {
    return (
      <Link
        href={href}
        className={`${types.bigSquare}  ${className && className}`}
      >
        <VscArrowSmallLeft width="35" height="35" /> {children}
      </Link>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`${types.bigSquare} ${className && className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`justify-center ${types.bigSquare} ${className && className}`}
    >
      {children}
    </button>
  );
}
