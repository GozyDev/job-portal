import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredJobs = [
  { title: "Direct Support Professional", count: "100 available jobs" },
  { title: "Host Home Provider", count: "100 available jobs" },
  { title: "House keeper", count: "100 available jobs" },
  { title: "Registered Nurse", count: "100 available jobs" },
  { title: "Program Manager", count: "100 available jobs" },
  { title: "Administrative Support Staff", count: "100 available jobs" },
  { title: "Training & Compliance Specialist", count: "100 available jobs" },
  { title: "Surgeon", count: "100 available jobs" },
];

export function FeaturedJobs() {
  return (
    <section className="py-6 px-4 max-w-7xl mx-auto bg-white mt-8 rounded">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-medium tracking-tighter text-slate-900">
          Featured <span className="text-blue-600">Jobs</span>
        </h2>
        <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {featuredJobs.map((job, index) => (
          <div key={index} className="group p-8 bg-white border border-slate-200 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
            <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
              <Users className="text-slate-600 group-hover:text-blue-600" size={24} />
            </div>
            <h3 className="font-medium text-lg text-slate-900 mb-4 h-14 line-clamp-2">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-600 transition-colors">
              <span className="text-sm">{job.count}</span>
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}