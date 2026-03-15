import { Link } from "react-router-dom";
import { Heart } from "lucide-react"; // Optional: For the top-right heart icon
import type { Job } from "@/lib/type";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl  mb-4 flex items-center justify-between  relative">
      <div className="w-full">
        {/* Company Logo */}
        <div className="flex justify-between items-center border-b border-b-gray-200 w-full p-3">
          <div className="flex gap-3 items-center">
            <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden border border-gray-100">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className=" object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-900 leading-tight">
                {job.title}
              </h3>
              <p className="text-slate-500 text-sm mt-1">{job.companyName}</p>
            </div>
          </div>

          <button className=" hover:text-red-500 transition-colors mb-8">
            <Heart size={20} />
          </button>
        </div>

        <div className="flex justify-between p-3">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex flex-col  gap-1 mt-3 text-sm text-slate-600">
              <span>{job.location}</span>
              <span className=" font-medium tracking-tighter text-slate-900">
                {job.salary}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-3 font-medium">
              Posted {job.postedAt}
            </p>
          </div>
          <Link to={`/jobs/${job.id}`} className="">
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors absolute bottom-5 right-3">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
