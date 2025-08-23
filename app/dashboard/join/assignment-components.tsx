import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExampleProperty {
  input: number[];
  output: number[];
  explanation: string;
}

interface ConstraintProperty {
  name: string;
  description: string;
}

function DescriptionText() {
  return (
    <article className="text-sm text-zinc-400 font-light">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione hic,
      rerum temporibus laboriosam vel debitis eius quis odio distinctio illum
      sapiente delectus dolorum quaerat autem quod sunt mollitia. Quibusdam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus
      sint sapiente, cum magnam reiciendis obcaecati fugiat tempora
      reprehenderit iusto totam adipisci, eveniet necessitatibus voluptatibus
      error. Quibusdam tempore animi accusantium. harum?
    </article>
  );
}

function ExampleItemWrapper({ children }: { children: React.ReactNode }) {
  return <span className="text-zinc-400">{children}</span>;
}

function ExampleList({ input, output, explanation }: ExampleProperty) {
  return (
    <div className="flex flex-col items-start gap-2 py-8">
      <h2>Example #1</h2>
      <div className="pl-4 border-l border-zinc-500 font-bold text-sm">
        <p>
          Input:{" "}
          <ExampleItemWrapper>{JSON.stringify(input)}</ExampleItemWrapper>
        </p>
        <p>
          Output:{" "}
          <ExampleItemWrapper>{JSON.stringify(output)}</ExampleItemWrapper>
        </p>
        <p>
          Explanation: <ExampleItemWrapper>{explanation}</ExampleItemWrapper>
        </p>
      </div>
    </div>
  );
}

function ConstraintList() {
  return <></>;
}

function AssignmentUI() {
  return (
    <>
      <div className="w-full h-full">
        <div className="self-start flex flex-row items-center justify-start gap-2 pb-4">
          <span className="text-zinc-500 font-bold text-xs">01</span>
          <h1 className="text-xl font-bold tracking-wide">Two Sum</h1>
        </div>
        <DescriptionText />
        <ExampleList
          input={[2, 7, 11, 15]}
          output={[0, 1]}
          explanation="Because nums[0] + nums[1] == 9, we return [0, 1]."
        />
        <ConstraintList />
      </div>
    </>
  );
}

export default AssignmentUI;
