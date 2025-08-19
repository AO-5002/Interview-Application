"use client";
import LoginBtn from "@/components/AuthComponents/LoginBtn";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "@/components/AuthComponents/LogoutBtn";

export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <main className="grid grid-cols-4 min-h-screen">
        <div className="col-start-2 col-span-2 w-full h-full flex flex-col items-center justify-center border">
          {isAuthenticated ? <LogoutButton /> : <LoginBtn />}
        </div>
      </main>
    </>
  );
}
