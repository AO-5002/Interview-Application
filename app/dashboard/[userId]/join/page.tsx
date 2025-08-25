import PageLayout from "@/components/layouts/PageLayout";
import StreamComponent from "./stream-components";
import AssignmentUI from "./assignment-components";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { EditorUI, EditorOptions } from "./editor-components";

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

export default function page() {
  return (
    <PageLayout className="">
      <div className="h-full w-full py-24">
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
                  <EditorOptions />
                </ItemWrapper>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </PageLayout>
  );
}
