import PageLayout from "@/components/layouts/PageLayout";
import React from "react";
import { HeaderWrapper } from "../components";
import Head from "next/head";
import { AssignmentBox } from "./components";

function page() {
  return (
    <PageLayout>
      <div className="py-12 w-full h-full flex flex-col items-center justify-start gap-24 text-foreground">
        <HeaderWrapper>Assignments</HeaderWrapper>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 bg-foreground p-8 rounded-lg">
          <AssignmentBox />
          <AssignmentBox />
          <AssignmentBox />
        </div>
      </div>
    </PageLayout>
  );
}

export default page;
