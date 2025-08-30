import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

function AssignmentBox() {
  return (
    <div className="border p-4 flex flex-col items-start gap-4 shrink-0 w-64 h-48 rounded-lg text-background ">
      <h2 className="text-lg  font-semibold">Assignment Title</h2>
      <div className="overflow-y-hidden">
        <ScrollArea className="h-full w-full">
          <h2 className="pb-2">Description:</h2>
          <p className="text-xs text-zinc-400 pl-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eius quaerat corrupti, culpa magnam ullam temporibus, porro neque
            molestias id consectetur ratione perferendis, ipsum debitis! Fugit
            quos nostrum qui vero. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Hic inventore quibusdam eveniet laudantium
            accusantium impedit nulla cum recusandae voluptas distinctio culpa
            obcaecati placeat doloribus blanditiis voluptates saepe in, qui non!
          </p>
        </ScrollArea>
      </div>

      <p className=" ">Status: In Progress</p>
    </div>
  );
}

export { AssignmentBox };
