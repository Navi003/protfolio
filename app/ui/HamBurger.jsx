import React from "react";

export default function HamBurger({ onClick, showMobileNav }) {
  return (
    <div onClick={onClick} className="ml-6 cursor-pointer md:hidden">
      <div className="ham">
        <div className={`line ${showMobileNav && "line-1"}`}></div>
        <div className={`line ${showMobileNav && "line-2"}`}></div>
        <div className={`line ${showMobileNav && "line-3"}`}></div>
      </div>
    </div>
  );
}
