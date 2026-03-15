import type { Job } from "@/lib/type";
import JobCard from "./JobCard";

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      {/* The Map */}
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="text-center py-10 text-gray-400">
          No jobs found matching your criteria.
        </p>
      )}
    </div>
  );
}
