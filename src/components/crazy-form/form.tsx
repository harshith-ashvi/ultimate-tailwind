import { cn } from "@/lib/utils";

const Label = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={cn("font-medium text-neutral-700", className)} {...props}>
      {children}
    </label>
  );
};

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "shadow-input rounded-lg border border-transparent bg-neutral-50 px-4 py-2 transition-all duration-200",
        "placeholder:text-neutral-300 focus:border-neutral-300 focus:bg-neutral-100 focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
};

const InputGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-2 has-invalid:rounded-lg has-invalid:bg-red-50",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Form = () => {
  return (
    <form className="h-full w-full bg-gray-50 px-8 py-14">
      <h1 className="bg-linear-to-b from-neutral-900 to-neutral-600 bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent selection:bg-amber-500 selection:text-red-500">
        This is a{" "}
        <span
          className={cn(
            "relative z-10 inline-block text-white",
            "after:absolute after:inset-0 after:-z-1 after:h-full after:w-full after:-skew-2 after:bg-red-500 after:content-['']",
          )}
        >
          crazy
        </span>{" "}
        form
      </h1>

      <div className="mx-auto my-12 flex max-w-sm flex-col gap-8">
        <InputGroup>
          <Label
            htmlFor="firstName"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            First Name
          </Label>
          <Input
            name="firstName"
            type="text"
            placeholder="Enter your first name"
          />
        </InputGroup>

        <InputGroup>
          <Label
            htmlFor="email"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Email
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="invalid:border-red-500"
          />
        </InputGroup>

        <InputGroup>
          <Label
            htmlFor="company"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Company
          </Label>
          <Input
            name="company"
            type="text"
            placeholder="Enter your company name"
          />
        </InputGroup>

        <InputGroup>
          <Label
            htmlFor="message"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Message
          </Label>
          <Input name="message" type="text" placeholder="Enter your message" />
        </InputGroup>

        <button
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-md bg-black px-4 py-2 text-white",
            "transition-all duration-150 hover:-translate-y-0.5 hover:bg-neutral-700 active:scale-98",
            "after:absolute after:-top-20 after:-left-20 after:h-[400px] after:w-1/2 after:-translate-x-20 after:rotate-10 after:bg-white/10 after:backdrop-blur-[0.5px] after:transition-all after:duration-200 after:content-[''] hover:after:translate-x-[200%]",
          )}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
