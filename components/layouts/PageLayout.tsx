import React from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-inter grid sm:grid-cols-1 md:grid-cols-8 lg:grid-cols-12 bg-foreground min-h-screen text-background">
      <div className="w-full h-full px-24 md:px-0 sm:col-start-1 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8">
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
