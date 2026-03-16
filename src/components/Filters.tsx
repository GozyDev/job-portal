import { ChevronDown } from "lucide-react";

interface FiltersProps {
  activeFilters: { type: string[]; experience: string[]; location: string[] };
  onToggle: (category: string, value: string) => void;
  counts: {
    type: Record<string, number>;
    experience: Record<string, number>;
  };
}

export default function Filters({
  activeFilters,
  onToggle,
  counts,
}: FiltersProps) {
  const FilterSection = ({
    title,
    category,
    options,
  }: {
    title: string;
    category: string;
    options: string[];
  }) => (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-6 cursor-pointer group">
        <h3 className="font-medium text-slate-900">{title}</h3>
        <ChevronDown size={20} className="text-slate-400" />
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
                className="peer appearance-none w-4 h-4 border-2 border-slate-200 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-all"
              />
              <svg
                className="absolute w-3 h-3 text-white hidden peer-checked:block"
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
            <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors text-sm">
              {option}
            </span>
            <span className="ml-auto text-blue-400 text-[11px] font-medium bg-blue-100 p-1 rounded w-5 h-5 flex items-center justify-center">
              {counts[category as "type" | "experience"]?.[option] || 0}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="w-full max-w-[280px] pr-4 bg-white rounded-2xl p-3 hidden md:block border border-slate-50">
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
    </aside>
  );
}
