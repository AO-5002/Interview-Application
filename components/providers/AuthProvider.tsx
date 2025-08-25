"use client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "@/components/ui/sonner";

import React from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ""}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI ?? "",
        audience: "security",
      }}
    >
      {children}
      <Toaster />
    </Auth0Provider>
  );
}

export default AuthProvider;
