"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PostLoginRedirect = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated && user) {
      // Use Next.js router instead of window.location.replace
      router.push(`/dashboard/${user.name}`);
    } else {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, user, router]);

  return <div>Redirecting...</div>;
};

export default PostLoginRedirect;
