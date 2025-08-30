"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import StreamComponent from "./stream-components";
import AssignmentUI from "./assignment-components";
import { useCallContext } from "@/components/providers/CallProvider";
import { CameraPreview } from "./stream-components";

function ItemWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center p-12 ${className}`}
    >
      {children}
    </div>
  );
}
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { EditorUI, EditorOptions } from "./editor-components";

function LobbyPage() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <CameraPreview />
      </div>
    </>
  );
}

function ActualPage() {
  return (
    <div className="h-full w-full py-12">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-full h-full rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={50}>
          <ItemWrapper>
            <StreamComponent />
          </ItemWrapper>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <ScrollArea className="h-full w-full">
                <ItemWrapper>
                  <AssignmentUI />
                </ItemWrapper>
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <ItemWrapper>
                <EditorUI />
              </ItemWrapper>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function RenderedPage() {
  const { inCall } = useCallContext();
  if (inCall === false) {
    return <LobbyPage />;
  }

  return <ActualPage />;
}

export { RenderedPage };
