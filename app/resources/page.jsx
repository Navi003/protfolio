import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";

import PageContainer from "../ui/PageContainer";
import Button from "../ui/Button";

// import navigation from ".";
export default function Page() {
  return (
    <div>
      <PageContainer>
        <section className="mt-[4.6rem]">
          <div className="flex items-center justify-between">
            <HeadingSecondary>Resources</HeadingSecondary>
            <Button type="back" href="/">
              Go Back
            </Button>
          </div>

          <h2 className="mx-auto text-4xl text-center text-white mt-96 mb-96">
            Coming soon...
          </h2>
        </section>
      </PageContainer>
    </div>
  );
}
