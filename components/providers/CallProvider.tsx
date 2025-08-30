"use client";

import { createContext, useContext, useState } from "react";

interface CallContextType {
  inCall: boolean;
  setInCall: (value: boolean) => void;
}

const stateContext = createContext<CallContextType | undefined>(undefined);

function CallProvider({ children }: { children: React.ReactNode }) {
  const [inCall, setInCall] = useState(false);

  return (
    <stateContext.Provider value={{ inCall, setInCall }}>
      {children}
    </stateContext.Provider>
  );
}

const useCallContext = () => {
  const context = useContext(stateContext);
  if (!context) {
    throw new Error("useCallContext must be used within CallProvider");
  }
  return context;
};

export { CallProvider, useCallContext };
