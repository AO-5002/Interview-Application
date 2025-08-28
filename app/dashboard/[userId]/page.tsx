import PageLayout from "@/components/layouts/PageLayout";
import React from "react";
import { Card, BoxLayout, BoxData, HeaderWrapper } from "./components";

function page() {
  const currentRole = "recruiter";

  return (
    <PageLayout>
      <div className="py-12 w-full h-full flex flex-col items-center justify-start gap-24">
        <HeaderWrapper>Dashboard</HeaderWrapper>
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
