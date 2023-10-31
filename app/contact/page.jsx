"use client";
import React from "react";
import PageContainer from "../ui/PageContainer";
import InputField from "../ui/InputField";
import HeadingSecondary from "../ui/HeadingSecondary";
import Button from "../ui/Button";
import { useState } from "react";

import axios from "axios";
import { AiOutlineCheckCircle, AiOutlineFrown } from "react-icons/ai";

export default function Page() {
  const [isLaoding, setIsLoading] = useState(false);

  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };
  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(false);

    try {
      setIsLoading(false);

      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );
      if (response.status === 200) {
        setStatus("success");
      }
      if (response.status !== 200) {
        setStatus("fail");

        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setStatus("fail");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <section className="mt-[4.6rem] relative">
        <div className="flex items-center justify-between">
          <HeadingSecondary>Contact</HeadingSecondary>
          <Button type="back" href="/" d>
            Go Back
          </Button>
        </div>

        {status === "success" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full top-10">
            <AiOutlineCheckCircle
              width={500}
              height={500}
              className="text-center w-80 h-80 fill-green-500 sucessScaleIn"
            />

            <h4 className="font-semibold text-center text-slate-100">
              Your Message has been sent Successfully, <br></br> i will contact
              you as soon as possible!.<br></br> Regards Navjot
            </h4>
          </div>
        )}
        {status === "fail" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full top-10">
            <AiOutlineFrown
              width={500}
              height={500}
              className="text-center w-80 h-80 fill-red-400 sucessScaleIn"
            />
            <h4 className="font-semibold text-center text-slate-100">
              Your Message has been sent Successfully, <br></br> i will contact
              you as soon as possible!.<br></br> Regards Navjot
            </h4>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className={`grid w-full grid-cols-2 gap-5 mt-16
          ${
            status === "success" || status === "fail"
              ? "opacity-0 invisible"
              : ""
          }
          
          `}
        >
          <div>
            <label className="text-secondary-20">Name</label>
            <InputField
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              required={true}
            />
          </div>
          <div>
            <label className="text-secondary-20">Last Name</label>
            <InputField
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              required={true}
            />
          </div>
          <div className="col-span-2">
            <label className="text-secondary-20">E-mail</label>
            <InputField
              value={formData.eMail}
              onChange={handleChange}
              type="text"
              name="eMail"
              required={true}
            />
          </div>
          <div className="col-span-2">
            <label className="text-secondary-20">Your Text</label>
            <textarea
              className="w-full p-6 mt-4 rounded-md max-h-60 h-60 focus:outline-none focus:ring-4 focus:ring-secondary-60"
              type="text"
              placeholder="Please write me something"
              name="message"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <Button>Submit</Button>
        </form>
      </section>
    </PageContainer>
  );
}
