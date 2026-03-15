import { ChevronDown } from "lucide-react";

export default function Filters() {
  const FilterSection = ({ title, options }:{title:string,options:string[]}) => (
    <div className="mb-10">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6 cursor-pointer group">
        <h3 className="text- font-medium text-slate-900 ">
          {title}
        </h3>
        <ChevronDown
          size={20}
          className="text-slate-400 group-hover:text-blue-600 transition-colors"
        />
      </div>

      {/* Options List */}
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
              {/* Custom checkmark icon */}
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

            <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors text-sm">
              {option}
            </span>

            {/* Right-aligned count */}
            <span className="ml-auto text-blue-400 text-[11px] font-medium bg-blue-100 p-1 rounded">
              246
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="w-full max-w-[280px] pr-4 bg-white rounded-2xl p-3 hidden md:block">
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
    </aside>
  );
}
