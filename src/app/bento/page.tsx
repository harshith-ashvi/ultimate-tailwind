import Grid from "@/components/bento/grid";
import ModeToggle from "@/components/bento/mode-toggle";

function BentoHome() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mt-2 flex w-full items-center justify-between">
        <h6 className="text-2xl font-bold text-neutral-600 dark:text-neutral-200">
          Logo
        </h6>
        {/* <div className="relative mr-8">
            <ModeToggle />
          </div> */}
      </div>
      <Grid />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 h-40 w-full bg-red-500" />
        <div className="col-span-1 h-40 w-full bg-blue-500" />
        <div className="col-span-1 h-40 w-full bg-green-500" />
        <div className="col-span-2 h-40 w-full bg-yellow-500" />
        <div className="col-span-1 h-40 w-full bg-orange-500" />
        <div className="col-span-4 h-40 w-full bg-violet-500" />
      </div>
    </div>
  );
}

export default BentoHome;
