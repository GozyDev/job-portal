import { useEffect, useState, useMemo } from "react";
import { getJobs } from "../services/jobService";
import { X } from "lucide-react";

import SearchHeader from "../components/SearchHeader";
import Filters from "../components/Filters";
import JobList from "../components/JobList";
import { MobileFilters } from "@/components/filterSheet";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    type: [] as string[],
    experience: [] as string[],
    location: [] as string[],
  });
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchJobs() {
      try {
        const data = await getJobs();
        if (!data) {
          console.log(data);
          return;
        } else {
          setJobs(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[category as keyof typeof prev];
      const isSelected = current.includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  // Logic to handle Array-based "type" and String-based "experience"
  const filteredJobs = useMemo(() => {
    return jobs.filter((job: any) => {
      const searchMatch =
        !searchValue ||
        job.companyName?.toLowerCase().includes(searchValue.toLowerCase());

      const typeMatch =
        activeFilters.type.length === 0 ||
        job.type.some((t: string) => activeFilters.type.includes(t));

      const expMatch =
        activeFilters.experience.length === 0 ||
        activeFilters.experience.includes(job.Experience || job.experience);

      const locMatch =
        activeFilters.location.length === 0 ||
        activeFilters.location.includes(job.location);

      return typeMatch && expMatch && searchMatch && locMatch;
    });
  }, [jobs, activeFilters, searchValue]);

  const filterCounts = useMemo(() => {
    const counts = {
      type: {} as Record<string, number>,
      experience: {} as Record<string, number>,
    };

    jobs.forEach((job: any) => {
      // TYPE (array)
      job.type?.forEach((t: string) => {
        counts.type[t] = (counts.type[t] || 0) + 1;
      });

      // EXPERIENCE (string)
      const exp = job.Experience || job.experience;
      if (exp) {
        counts.experience[exp] = (counts.experience[exp] || 0) + 1;
      }
    });

    return counts;
  }, [jobs]);
  const allActiveFilters = Object.entries(activeFilters).flatMap(
    ([category, values]) => values.map((val) => ({ category, val })),
  );

  if (loading) {
    return (
      <section className="pt-[90px] py-[80px] h-[600px] items-center justify-center flex">
        <p className="text-[#2563EB] text-2xl  tracking-tight animate-pulse ">
          IDD LOGO
        </p>
      </section>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 md:py-[100px] py-[50px]">
      <SearchHeader
        searchValue={searchValue}
        onSearch={(val) => setSearchValue(val)}
      />

      <section className="md:hidden px-3">
        <MobileFilters
          allActiveFilters={allActiveFilters}
          toggleFilter={toggleFilter}
          activeFilters={activeFilters}
          onToggle={toggleFilter}
          counts={filterCounts}
        />
      </section>

      {/* View Filters: The "Pill" Cards with Cancel Buttons */}
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

      <div className="flex gap-5 px-3">
        {/* Pass the state down so checkboxes stay synced with the pills */}
        <Filters
          activeFilters={activeFilters}
          onToggle={toggleFilter}
          counts={filterCounts}
        />

        {/* If filteredJobs is empty, JobList handles the "No records found" message */}
        <JobList jobs={filteredJobs} />
      </div>
    </div>
  );
}
