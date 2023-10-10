import React from "react";
import Link from "next/link";
import ListItem from "../ui/ListItem";
export default function Footer() {
  return (
    <footer className="text-secondary-20 xl:w-[1200px] mx-auto px-4 mt-20 pb-24">
      <div className="flex flex-col items-center justify-between md:items-start md:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-5 text-lg font-semibold uppercase ">contact</h3>
          <div>
            <div className="space-x-5">
              <span>E-Mail</span>
              <email>dhimannavjot1@gmail.com</email>
            </div>
            <div className="space-x-5">
              <span>Phone</span>
              <phone>+43 162 1653 5681</phone>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-semibold uppercase ">Quick Links</h3>
          <ul className="flex flex-col items-center">
            <ListItem href="/">Home</ListItem>
            <ListItem href="/projects">Projects</ListItem>
            <ListItem href="/resources">Resources</ListItem>
            <ListItem href="/contact">Contact</ListItem>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-5 text-lg font-semibold uppercase">Resources</h3>
          <ul className="flex flex-col items-center">
            <ListItem href="/">Home</ListItem>
            <ListItem href="/projects">Projects</ListItem>
            <ListItem href="/resources">Resources</ListItem>
            <ListItem href="/contact">Contact</ListItem>
          </ul>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
