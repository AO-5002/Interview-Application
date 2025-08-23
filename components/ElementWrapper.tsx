function ElementWrapper({
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

export default ElementWrapper;
