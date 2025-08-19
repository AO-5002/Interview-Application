"use client";
import LoginBtn from "@/components/AuthComponents/LoginBtn";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "@/components/AuthComponents/LogoutBtn";

export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="grid grid-cols-4 min-h-screen p-4">
      <div className="col-start-2 col-span-2 border p-8 w-full h-full flex flex-col items-center justify-center gap-4">
        <h1>Interview App</h1>
        {isAuthenticated ? <LogoutButton /> : <LoginBtn />}
      </div>
    </main>
  );
}
