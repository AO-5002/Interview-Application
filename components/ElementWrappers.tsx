function NavWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 p-3 border-zinc-600 border text-white rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}

function StreamWrapperItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 p-3 border-zinc-600 border text-white rounded-lg">
      {children}
    </div>
  );
}

export { NavWrapper, StreamWrapperItems };
