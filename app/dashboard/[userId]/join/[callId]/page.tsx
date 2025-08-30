import PageLayout from "@/components/layouts/PageLayout";
import { CallProvider } from "@/components/providers/CallProvider";
import { RenderedPage } from "./page-components";

export default function page() {
  return (
    <CallProvider>
      <PageLayout className="">
        <RenderedPage />
      </PageLayout>
    </CallProvider>
  );
}
