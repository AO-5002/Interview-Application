import PageLayout from "@/components/layouts/PageLayout";

import { CallProvider } from "@/components/providers/CallProvider";
import { RenderedPage } from "./lobby-room";

export default function page() {
  return (
    <CallProvider>
      <PageLayout className="">
        <RenderedPage />
      </PageLayout>
    </CallProvider>
  );
}
