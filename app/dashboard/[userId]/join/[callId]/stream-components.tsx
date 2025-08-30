"use client";
import React, { useEffect } from "react";
import { DoorOpen, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallContext } from "@/components/providers/CallProvider";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import {
  CallControls,
  CallingState,
  DeviceSettings,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
  User,
  VideoPreview,
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

  return (
    <Button onClick={handleClick}>
      <PhoneCall />
      Join
    </Button>
  );
}

function LeaveCallBtn() {
  const router = useRouter();
  const params = useParams();
  const userId = params.userId; // Gets the [userId] from your route
  const { setInCall } = useCallContext();

  const handleClick = async () => {
    setInCall(false);

    // Disconnect everything
    await call.camera.disable();
    await call.microphone.disable();
    await call.leave();

    router.push(`/dashboard/${userId}`);
  };

  return (
    <Button onClick={handleClick}>
      <DoorOpen />
      Leave
    </Button>
  );
}

// UI stuff below

function CameraPreview() {
  useEffect(() => {
    call.camera.enable(); // Enable camera for preview
  }, []);

  return (
    <>
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <StreamTheme>
            <VideoPreview />
            <div className="w-full flex justify-between gap-4 pt-8">
              <DeviceSettings />
              <div className="flex gap-4 items-center">
                <JoinCallBtn />
                <LeaveCallBtn />
              </div>
            </div>
          </StreamTheme>
        </StreamCall>
      </StreamVideo>
    </>
  );
}

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

export { JoinCallBtn, StreamComponent, CameraPreview };
