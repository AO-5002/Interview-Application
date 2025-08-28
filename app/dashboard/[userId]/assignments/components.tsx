import React from "react";

function AssignmentBox() {
  return (
    <div className="border p-4 flex flex-col gap-4 shrink-0 w-64 h-48 rounded-lg text-background ">
      <h2 className="text-lg  font-semibold">Assignment Title</h2>
      <p className="text-sm ">Due Date: 2024-12-31</p>
      <p className="text-sm ">Status: In Progress</p>
    </div>
  );
}

export { AssignmentBox };
