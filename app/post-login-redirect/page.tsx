"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser } from "@/lib/api/UserAPI";
import { toast } from "sonner";

const PostLoginRedirect = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      router.push(`/dashboard/${user?.name}`);
    },
    onError: () => {
      router.push("/");
    },
  });

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated && user) {
      mutation.mutate({
        user,
        getAccessTokenSilently,
      });
    } else {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, user, router]);

  return <div>Redirecting...</div>;
};

export default PostLoginRedirect;
