import { Search, MapPin, MoveRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 pt-30 md:pt-30 px-4  max-w-7xl mx-auto">
      <div className="max-w-6xl flex flex-col text-left ">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tighter">
          Discover over{" "}
          <span className="text-blue-600">10,000+ Health Jobs</span>
        </h1>

        {/* Search Container */}
        <div className="w-full max-w-4xl bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-2 border border-slate-100">
          {/* Job Title Input */}
          <div className="relative flex-1 w-full group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
              size={20}
            />
            <Input
              placeholder="Type a job title"
              className="pl-12 py-7 border-none shadow-none focus-visible:ring-0 text-slate-700 placeholder:text-slate-400 text-md"
            />
          </div>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block w-px h-8 bg-slate-200" />

          {/* Location Input */}
          <div className="relative flex-1 w-full group">
            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
              size={20}
            />
            <Input
              placeholder="France, Italy"
              className="pl-12 py-7 border-none shadow-none focus-visible:ring-0 text-slate-700 placeholder:text-slate-400 text-md"
            />
          </div>

          {/* Search Button */}
          <Link
            to="/jobs"
            className="w-full flex items-center justify-center gap-2  md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-md font-semibold transition-all hover:shadow-lg hover:shadow-blue-200"
          >
            FInd your job <MoveRight size={20} />
          </Link>
        </div>
        <p className="text-md text-slate-500 mt-5 max-w-2xl">
          The first global platform for health job seekers
        </p>
      </div>
    </section>
  );
}
