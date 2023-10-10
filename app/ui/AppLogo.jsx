import React from "react";
import Image from "next/image";
export default function AppLogo({ src, alt }) {
  return (
    <div className="flex items-center justify-center w-32 h-32 p-4 overflow-hidden text-xs border rounded-full cursor-pointer border-secondary-30 rotate-3d transform-gpu">
      <Image alt={alt} width={128} height={128} src={src} />
    </div>
  );
}
