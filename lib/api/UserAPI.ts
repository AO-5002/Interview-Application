import { toast } from "sonner";
import { UserDtoType, UserType } from "../types/User";
import useAuth0 from "@auth0/auth0-react/dist/use-auth0";
import { get } from "http";

// Configure the backend API URL

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

// Configure the Auth0 API

const { user, getAccessTokenSilently } = useAuth0();

async function createUser() {
  try {
    const token = await getAccessTokenSilently();
    const userDto: UserDtoType = {
      name: user?.name || "",
      email: user?.email || "",
      profile_url: user?.picture || "",
    };

    // Once the token and Dto have been created, we can make the API call

    await fetch(`${BACKEND_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userDto),
    });
  } catch (error) {
    toast("Error creating user!");
  }
}

export { createUser };
