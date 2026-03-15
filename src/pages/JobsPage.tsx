import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";

import SearchHeader from "../components/SearchHeader";
import Filters from "../components/Filters";
import JobList from "../components/JobList";
import { MobileFilters } from "@/components/filterSheet";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const data = await getJobs();
      setJobs(data);
    }

    fetchJobs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 md:py-[100px] py-[50px] ">
      <SearchHeader onSearch={() => {}} />

      <section className="z-[999] md:hidden px-3 ">
        <MobileFilters />
      </section>

      <div className="flex gap-5 px-3">
        <Filters />

        <JobList jobs={jobs} />
      </div>
    </div>
  );
}
