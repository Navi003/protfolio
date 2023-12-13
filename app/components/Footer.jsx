import React from "react";
import Link from "next/link";
import ListItem from "../ui/ListItem";
import SocialIcons from "../ui/SocialIcons";
import PageContainer from "../ui/PageContainer";
export default function Footer() {
  const date = new Date();

  return (
    <footer className="text-secondary-20 xl:w-[1200px] mx-auto px-4 mt-20 pb-24">
      <div className="flex flex-col items-center justify-between md:items-start md:flex-row">
        <div>
          <h3 className="mb-5 text-lg font-semibold uppercase ">Quick Links</h3>
          <ul className="flex flex-col items-center">
            <ListItem href="/">Home</ListItem>
            <ListItem href="/projects">Projects</ListItem>
            <ListItem href="/resources">About Me</ListItem>
            <ListItem href="/contact">Contact</ListItem>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="mt-5 text-lg font-semibold uppercase ">contact</h3>
          <div>
            <div className="space-x-5">
              <span>E-Mail</span>
              <email>dhimannavjot1@gmail.com</email>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center">
          <h3 className="mt-5 text-lg font-semibold uppercase">Terms</h3>
          <ul className="flex flex-col items-center">
            <ListItem href="/">Home</ListItem>
            <ListItem href="/projects">Projects</ListItem>
            <ListItem href="/resources">About Me</ListItem>
            <ListItem href="/contact">Contact</ListItem>
          </ul>
        </div> */}
      </div>
      <PageContainer>
        <div className="flex justify-center mt-10">
          <SocialIcons />
        </div>
        <p className="mt-20 space-x-2 text-center ">
          <span>All Rights Reserved {date.getFullYear()}</span>{" "}
          <span>&copy;&nbsp;</span>
        </p>
      </PageContainer>
    </footer>
  );
}
