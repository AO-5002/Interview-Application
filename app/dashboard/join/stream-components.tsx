"use client";
import React, { useEffect } from "react";
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
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0ZyaW5nZV9Db25ncmVzcyIsInVzZXJfaWQiOiJGcmluZ2VfQ29uZ3Jlc3MiLCJ2YWxpZGl0eV9pbl9zZWNvbmRzIjo2MDQ4MDAsImlhdCI6MTc1NTgxMzcyMSwiZXhwIjoxNzU2NDE4NTIxfQ.OYbkE9sBYL6SEcknSY-mlt3uY_qDk9xY2hdSrrN1qPI";
const userId = "Fringe_Congress";
const callId = "WNfWixNhwoIV6XtL1dyb8";

const user: User = {
  id: userId,
  name: "Oliver",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);

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
    <div className="border border-black">
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <MyUILayout />
        </StreamCall>
      </StreamVideo>
    </div>
  );
}
