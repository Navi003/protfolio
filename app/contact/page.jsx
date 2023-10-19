"use client";
import React from "react";
import PageContainer from "../ui/PageContainer";
import InputField from "../ui/InputField";
import HeadingSecondary from "../ui/HeadingSecondary";
import Button from "../ui/Button";
import { useState } from "react";

import sendRequest from "../sendRequest";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFormData = { ...formData };
    newFormData[name] = value; // Dynamic key access Plese add [key: string]: string to your type so it can acces key as string",
    setFormData(newFormData);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await sendRequest({
        url: "http://localhost:3000/api/contact",
        method: "POST",
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <PageContainer>
      <section className="mt-[4.6rem]">
        <div className="flex items-center justify-between">
          <HeadingSecondary>Contact</HeadingSecondary>
          <Button type="back" href="/" d>
            Go Back
          </Button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid w-full grid-cols-2 gap-5 mt-16"
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
