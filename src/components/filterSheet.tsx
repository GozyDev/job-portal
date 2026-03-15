import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Funnel} from "lucide-react";

export function MobileFilters() {
  const FilterSection = ({ title, options }:{title:string,options:string[]}) => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4 cursor-pointer group">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>

      <div className="space-y-4">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                className="peer appearance-none w-4 h-4 border-2 border-slate-200 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
              />
              <svg
                className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-slate-600 text-sm font-medium group-hover:text-slate-900 transition-colors">
              {option}
            </span>
            <span className="ml-auto text-blue-400 text-[11px] font-semibold bg-blue-50 px-2 py-0.5 rounded">
              246
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <Funnel size={16} /> Filter
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="border p-3 overflow-hidden">
        <SheetHeader className="mb-5 text-left">
          <SheetTitle className="text-xl font-medium">Filters</SheetTitle>
        </SheetHeader>

        {/* Actual Filter Logic replacing the old profile text */}
        <div className="flex flex-col gap-2 h-[300px] overflow-y-scroll">
          <FilterSection
            title="Type of employment"
            options={["Full-Time", "Part-Time", "Internship", "Remote"]}
          />
          <FilterSection
            title="Experience level"
            options={["Entry/Junior", "Mid-level", "Senior"]}
          />
          <FilterSection
            title="Location"
            options={["France", "Italy", "Remote", "USA"]}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Apply Filters
          </Button>
          <Button variant="ghost" className="text-slate-500">
            Reset All
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
