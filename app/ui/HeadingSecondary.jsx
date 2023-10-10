import React from "react";

export default function HeadingSecondary({ children }) {
  return (
    <h3 className="text-lg font-bold uppercase text-secondary-30">
      {children}
    </h3>
  );
}
