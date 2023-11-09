"use client";
import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import { BiCopy } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { useRef, useState } from "react";
export default function Contact() {
  const emailRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyEmail() {
    const email = emailRef.current.innerText;
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  }

  return (
    <div className="mt-[4.6rem] ">
      <HeadingSecondary>Contact</HeadingSecondary>

      <div className="mt-5 md:justify-between md:flex">
        <div className="">
          <p className="text-2xl font-bold text-white">
            Any type of Query & Discussion
          </p>
          <a
            ref={emailRef}
            className="flex items-center gap-6 mt-6 font-bold underline text-primary-40 md:mt-4"
          >
            dhimannavjot1@gmail.com
            {isCopied ? (
              <AiOutlineCheck width={30} height={30} />
            ) : (
              <BiCopy
                width={30}
                height={30}
                onClick={handleCopyEmail}
                className="cursor-pointer"
              />
            )}
          </a>
        </div>
        <div className="md:basis-[500px]">
          <p className="font-bold text-white text-md md:text-2xl">
            Creativity is a limitless resource; the more you harness and express
            it, the deeper it grows within your meaningful imagination.
          </p>
          <div className="flex justify-between mt-7">
            <div className="flex items-center gap-1 leading-tight">
              <span className="text-5xl font-bold text-primary-60">3</span>
              <span className="text-lg font-bold text-white">
                Years of <br></br>exprience
              </span>
            </div>
            <div className="flex items-center gap-1 leading-tight">
              <span className="text-5xl font-bold text-primary-60">52</span>
              <span className="text-lg font-bold text-white">
                Leetcode Problems <br></br> solved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
