import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SocalIcon({ src, href }) {
  return (
    <a href={href} target="_blank">
      <Image
        className="transition-all duration-300 border rounded-full text-secondary-20 bg-secondary-20 hover:bg-secondary-80"
        src={src}
        width={50}
        height={50}
      />
    </a>
  );
}
