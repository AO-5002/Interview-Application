import PageLayout from "@/components/layouts/PageLayout";
import ButtonChoiceSection from "./InitialComponents";

function page() {
  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col items-center py-12">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h1 className="text-4xl text-background font-bold ">
            Which one are you?
          </h1>
          <p className="text-xs text-zinc-500 font-bold">
            Don't worry, you can change it later...
          </p>
        </div>
        <ButtonChoiceSection />
      </div>
    </PageLayout>
  );
}

export default page;
