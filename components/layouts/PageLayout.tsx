import React from "react";

function PageLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`font-inter grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-14 bg-background min-h-screen text-background`}
    >
      <div
        className={`w-full h-full px-24 md:px-0 col-start-1 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 xl:col-start-2 xl:col-span-12 ${className}`}
      >
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
