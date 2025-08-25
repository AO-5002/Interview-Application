"use client";
import { useEffect, useState } from "react";
import LoginBtn from "@/components/AuthComponents/LoginBtn";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "@/components/AuthComponents/LogoutBtn";

export default function Home() {
  const { isAuthenticated } = useAuth0();

  const TokenDisplay = () => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [token, setToken] = useState("");

    useEffect(() => {
      const fetchToken = async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          setToken(accessToken);
          console.log("Access Token:", accessToken);
        } catch (err) {
          console.error("Error getting token", err);
        }
      };

      if (isAuthenticated) {
        fetchToken();
      }
    }, [getAccessTokenSilently, isAuthenticated]);
  };

  TokenDisplay();

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
