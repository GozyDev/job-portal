import type { Job } from "@/lib/type";
import JobCard from "./JobCard";

// Inside JobList.tsx
export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex-1 flex flex-col gap-4">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-medium text-lg">
            No jobs found matching your criteria.
          </p>
          <p className="text-slate-400 text-sm">
            Try adjusting your filters or search keywords.
          </p>
        </div>
      )}
    </div>
  );
}
