"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import { Pencil } from "lucide-react";
import Link from "next/link";

function ButtonChoiceSection() {
  return (
    <div className="flex flex-row gap-8 mt-24">
      <Link href="/dashboard">
        <Button className="font-bold p-8 text-lg">
          <span className="mr-2">
            <Pencil />
          </span>
          Candidate
        </Button>
      </Link>
      <Link href="/dashboard">
        <Button className="bg-red-400 p-8 text-lg font-bold">
          <span className="mr-2">
            <NotebookPen />
          </span>
          Recruiter
        </Button>
      </Link>
    </div>
  );
}

export default ButtonChoiceSection;
