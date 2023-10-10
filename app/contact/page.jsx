import React from "react";
import PageContainer from "../ui/PageContainer";
import InputField from "../ui/InputField";
import HeadingSecondary from "../ui/HeadingSecondary";
import Button from "../ui/Button";

export default function Page() {
  return (
    <PageContainer>
      <section className="mt-[4.6rem]">
        <div className="flex items-center justify-between">
          <HeadingSecondary>Contact</HeadingSecondary>
          <Button type="back" href="/">
            Go Back
          </Button>
        </div>
        <form className="grid w-full grid-cols-2 gap-5 mt-16">
          <div>
            <label className="text-secondary-20">Name</label>
            <InputField type="text" name="firstName" required={true} />
          </div>
          <div>
            <label className="text-secondary-20" s>
              Last Name
            </label>
            <InputField type="text" name="lastName" required={true} />
          </div>
          <div className="col-span-2">
            <label className="text-secondary-20">E-mail</label>
            <InputField type="text" name="E-mail" required={true} />
          </div>
          <div className="col-span-2">
            <label className="text-secondary-20">Your Text</label>
            <textarea
              className="w-full mt-4 rounded-md max-h-60 h-60 focus:outline-none focus:ring-4 focus:ring-secondary-60"
              type="text"
              name="Please write me something"
            />
          </div>
          <Button>Submit</Button>
        </form>
      </section>
    </PageContainer>
  );
}
