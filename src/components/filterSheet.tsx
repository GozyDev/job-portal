import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Funnel, X } from "lucide-react";
interface MobileFiltersProps {
  activeFilters: { type: string[]; experience: string[]; location: string[] };
  onToggle: (category: string, value: string) => void;
  counts: {
    type: Record<string, number>;
    experience: Record<string, number>;
  };
  toggleFilter: (category: string, value: string) => void;
  allActiveFilters: { category: string; val: string }[];
}

export function MobileFilters({
  activeFilters,
  onToggle,
  toggleFilter,
  counts,
  allActiveFilters,
}: MobileFiltersProps) {
  const FilterSection = ({
    title,
    options,
    category,
  }: {
    title: string;
    category: string;
    options: string[];
  }) => (
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
                checked={activeFilters[
                  category as keyof typeof activeFilters
                ].includes(option)}
                onChange={() => onToggle(category, option)}
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
              {counts[category as "type" | "experience"]?.[option] || 0}
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
        <SheetHeader className=" text-left">
          <SheetTitle className="text-xl font-medium">Filters</SheetTitle>
        </SheetHeader>

        <section className="px-3 flex flex-wrap gap-2 items-center min-h-[40px]">
          <span className="text-sm font-medium text-slate-500 mr-2">
            view Filters:
          </span>
          {allActiveFilters.map(({ category, val }) => (
            <div
              key={val}
              className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-100 text-sm font-medium capitalize"
            >
              {val}
              <button
                onClick={() => toggleFilter(category, val)}
                className="hover:bg-blue-200 rounded p-0.5 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </section>

        {/* Actual Filter Logic replacing the old profile text */}
        <div className="flex flex-col gap-2 h-[300px] overflow-y-scroll">
          <FilterSection
            title="Type of employment"
            category="type"
            options={["Full-Time", "Part-Time", "Internship", "Remote"]}
          />
          <FilterSection
            title="Experience level"
            category="experience"
            options={["Entry", "Mid-level", "Senior"]}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
