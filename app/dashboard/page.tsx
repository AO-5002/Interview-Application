import PageLayout from "@/components/layouts/PageLayout";
import React from "react";

function page() {
  return (
    <PageLayout>
      <div className="py-12 w-full h-full flex flex-col items-center justify-center gap-8">
        <article>helo</article>
        <div className="border w-full flex flex-wrap items-center justify-between gap-8">
          <div className="shrink-0 w-48 h-48 rounded-lg bg-background flex flex-col items-center gap-8 p-4 text-foreground">
            h
          </div>
          <div className="shrink-0 w-48 h-48 rounded-lg bg-background flex flex-col items-center gap-4 p-4 text-foreground">
            h
          </div>
          <div className="shrink-0 w-48 h-48 rounded-lg bg-background flex flex-col items-center gap-4 p-4 text-foreground">
            h
          </div>
          <div className="shrink-0 w-48 h-48 rounded-lg bg-background flex flex-col items-center gap-4 p-4 text-foreground">
            h
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default page;
