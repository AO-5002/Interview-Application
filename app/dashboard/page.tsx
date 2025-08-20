import PageLayout from "@/components/layouts/PageLayout";
import React from "react";
import { Card, BoxLayout, BoxData } from "./components";

function page() {
  const currentRole = "recruiter";

  return (
    <PageLayout>
      <div className="py-12 w-full h-full flex flex-col items-center justify-start gap-24">
        <div className=" w-full px-4 flex flex-col items-start justify-center gap-2">
          <h1 className="text-4xl text-zinc-400 font-light tracking-wide">
            Dashboard
          </h1>
          {/* <h2 className="text-md font-bold">
            Welcome Back! <span className="text-zinc-500">Andres Ortiz</span>
          </h2> */}
        </div>
        <BoxLayout>
          {BoxData.filter((item) => {
            return item.associatedRole === currentRole;
          }).map((item) => (
            <Card key={item.title} data={item} />
          ))}
        </BoxLayout>
      </div>
    </PageLayout>
  );
}

export default page;
