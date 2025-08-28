import PageLayout from "@/components/layouts/PageLayout";
import React from "react";

function page() {
  return (
    <PageLayout>
      <div className="border py-12 w-full h-full flex flex-col items-center justify-start gap-24 text-foreground">
        <div>
          <h1 className="">Interviews</h1>
        </div>
      </div>
    </PageLayout>
  );
}

export default page;
