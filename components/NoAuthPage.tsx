import { Lock } from "lucide-react";

function NoAuthPage() {
  return (
    <div className="py-12 flex flex-col items-center justify-center h-full">
      <Lock className="mb-4" />
      <h1 className="text-2xl font-bold">Access Denied</h1>
      <p>You must be logged in to view this page.</p>
    </div>
  );
}

export default NoAuthPage;
