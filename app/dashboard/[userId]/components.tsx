import { Plus, Users, FlaskConical, ClipboardClock } from "lucide-react";
import { LoadButtonAccordingly } from "./dynamic-components";

interface BoxContentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  associatedRole: string;
  type: string;
}

function BoxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-8">
      {children}
    </div>
  );
}

function Card({ data }: { data: BoxContentProps }) {
  return (
    <div className="shrink-0 w-full md:w-64 h-auto rounded-lg bg-background flex flex-col items-center justify-between gap-8 p-4 text-foreground border shadow-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="self-start flex flex-col gap-2 items-start">
          <div className="flex items-center justify-center bg-foreground p-2 rounded-full text-background">
            {data.icon}
          </div>
          <h1 className="font-bold text-xl">{data.title}</h1>
        </div>

        <div className="w-full">
          <p className="border-l border-foreground italic px-2 text-xs font-light text-foreground">
            {data.description}
          </p>
        </div>
      </div>
      <LoadButtonAccordingly type={data.type} />
    </div>
  );
}

const BoxData: BoxContentProps[] = [
  {
    title: "Join a Room",
    description: "Join an existing room for discussion",
    icon: <Users height={16} width={16} />,
    associatedRole: "recruiter",
    type: "Join",
  },
  {
    title: "Create a Room",
    description: "Join an existing room for discussion",
    icon: <Plus height={16} width={16} />,
    associatedRole: "recruiter",
    type: "Create",
  },
  {
    title: "View Profiles",
    description: "View and manage user profiles",
    icon: <ClipboardClock height={16} width={16} />,
    associatedRole: "recruiter",
    type: "View",
  },
  {
    title: "Create a Test",
    description: "Create a new test for candidates",
    icon: <FlaskConical height={16} width={16} />,
    associatedRole: "recruiter",
    type: "Build",
  },
];

export { Card, BoxLayout, type BoxContentProps, BoxData };
