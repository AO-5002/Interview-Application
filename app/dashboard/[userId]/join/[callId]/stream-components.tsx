"use client";
import React, { Dispatch, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCallContext } from "@/components/providers/CallProvider";
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
  User,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0lsbHVzdHJpb3VzX0xheWVyIiwidXNlcl9pZCI6IklsbHVzdHJpb3VzX0xheWVyIiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3NTY1NzczMDUsImV4cCI6MTc1NzE4MjEwNX0.DMGVDSCwm60SSqQRGfeQ1Y9NQTWip5UekHFggkT5-XM";
const userId = "Illustrious_Layer";
const callId = "Bn0dfC8d1NiSf6vOHsANt";

const user: User = {
  id: userId,
  name: "Oliver",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);

// Method for handling calls

function JoinCallBtn() {
  const { setInCall } = useCallContext();
  const handleClick = () => {
    setInCall(true);
  };

  return <Button onClick={handleClick}>Join Call</Button>;
}

// UI stuff below

export const MyUILayout = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  // Join the call only on client side
  useEffect(() => {
    const joinCall = async () => {
      try {
        await call.join({ create: true });
      } catch (error) {
        console.error("Failed to join call:", error);
      }
    };

    joinCall();

    // Cleanup function to leave call when component unmounts
    return () => {
      call.leave();
    };
  }, []);

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition="bottom" />
      <CallControls />
    </StreamTheme>
  );
};

export default function StreamComponent() {
  return (
    <div className="">
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <MyUILayout />
        </StreamCall>
      </StreamVideo>
    </div>
  );
}

export { JoinCallBtn, StreamComponent };
