import React from "react";
import { cn } from "@/lib/utils";
import { BrainIcon, MouseBoxIcon, NativeIcon } from "./icons";

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-lg font-medium tracking-tight", className)}>
      {children}
    </h2>
  );
};

const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>{children}</div>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base tracking-tight text-neutral-400", className)}>
      {children}
    </p>
  );
};

const CardSkeleton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "my-4 h-60 w-full overflow-hidden rounded-lg bg-blue-50",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "bg-size-[10px_10px]",
        "mask-radial-from-50%",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("bg-white p-4", className)}>{children}</div>;
};

const MessageSection = () => {
  const chat = [
    { role: "user", message: "Hello there" },
    { role: "assistant", message: "Hello, How can I help you?" },
    { role: "user", message: "I want to create a new workflow" },
    {
      role: "assistant",
      message: "Sure, I can help you with that. What you want to build?",
    },
  ];

  const UserMessage = ({ message }: { message: string }) => {
    return (
      <div className="flex items-start justify-end gap-2">
        <p className="w-fit rounded-tl-full rounded-tr-full rounded-bl-full bg-blue-500 px-4 py-1 text-white">
          {message}
        </p>
        <div className="mt-1 flex size-6 items-center justify-center rounded-full bg-linear-to-r from-blue-400 to-cyan-300 p-2 text-sm text-neutral-600">
          U
        </div>
      </div>
    );
  };

  const AiMessage = ({ message }: { message: string }) => {
    return (
      <div className="flex items-start justify-start gap-2">
        <div className="mt-1 flex size-6 items-center justify-center rounded-full bg-linear-to-r from-green-400 to-emerald-300 p-2 text-sm text-neutral-100">
          AI
        </div>
        <p className="w-fit rounded-tl-full rounded-tr-full rounded-br-full bg-gray-200 px-4 py-1 text-neutral-600">
          {message}
        </p>
      </div>
    );
  };

  return (
    <div className="relative h-full w-full p-2">
      <input
        placeholder="Ask AI"
        className="absolute inset-x-0 bottom-0 mx-2 h-10 w-[calc(100%-2rem)] rounded-lg border border-neutral-400 px-4"
      />
      <div className="flex flex-col gap-4 overflow-scroll px-2">
        {chat.map((text, index) =>
          text.role === "user" ? (
            <UserMessage key={index} message={text.message} />
          ) : (
            <AiMessage key={index} message={text.message} />
          ),
        )}
      </div>
    </div>
  );
};

function Grid() {
  return (
    <div className="mx-auto my-10 min-h-screen w-full border-x border-neutral-200 bg-gray-100 py-20">
      <div className="grid grid-cols-1 divide-x divide-y divide-neutral-100 lg:grid-cols-2">
        <Card className="lg:col-span-1">
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <MouseBoxIcon />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Preview and debug workflow logic in a safe sandbox before deploying,
            helping you iterate with confidence.
          </CardDescription>
          <CardSkeleton>
            <MessageSection />
          </CardSkeleton>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <NativeIcon />
            <CardTitle>Native Tools Integration</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
}

export default Grid;
