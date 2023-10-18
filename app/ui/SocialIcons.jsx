import React from "react";
import SocalIcon from "./SocalIcon";

export default function SocialIcons() {
  return (
    <div className="flex gap-3 mr-6 md:ml-6 xl:ml-0 xl:mr-0 text-secondary-20">
      <SocalIcon href="/" src="/images/instagram.svg" />
      <SocalIcon href="https://github.com/Navi003" src="/images/github.svg" />
      <SocalIcon
        href="https://www.linkedin.com/in/navjot-dhiman"
        src="/images/linkedin.svg"
      />
      <SocalIcon
        href="https://twitter.com/Navjot_dhiman"
        src="/images/twitter-x.svg"
      />
    </div>
  );
}
