"use client";
import Link from "next/link";
import React from "react";

import { VscArrowSmallLeft } from "react-icons/vsc";

const base = `
  text-base
  font-semibold
  rounded  
  focus:outline-none 
  focus:ring-4
  rounded-sm
  active:scale-[.95]  
  transition-all
  duration-300
  hover:text-white 
  `;

const types = {
  bigSquare: `focus:ring-secondary-60 flex items-center bg-secondary-70 px-10 py-3 ${base}`,
  tiny: `px-3 sm:px-2 sm:px-2 sm:text-sm sm:py-2 md:px-3 md:py-2 py-2 rounded-full ${base}`,
};

export default function Button({
  style,
  children,
  className,
  href,
  onClick,
  type,
  disabled,
  variant = "secondary",
}) {
  if (type === "tiny" && href) {
    return (
      <Link
        styles={{ style }}
        className={`${types.tiny}${
          variant === "primary"
            ? "text-primary-10 focus:ring-primary-60 hover:bg-primary-70 bg-primary-50"
            : "focus:ring-secondary-60 text-secondary-10 hover:bg-secondary-70 bg-secondary-50"
        } `}
        href={href}
      >
        {children}
      </Link>
    );
  }

  if (href && type === "back") {
    return (
      <Link href={href} className={`${types.bigSquare}`}>
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
      disabled={disabled}
      onClick={onClick}
      className={`justify-center ${types.bigSquare} ${className && className}`}
    >
      {children}
    </button>
  );
}
