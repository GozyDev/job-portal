import { Search, MapPin } from "lucide-react";

export default function SearchHeader({
  onSearch,
}: {
  onSearch: (txt: string) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 rounded text-center bg-[#f9fafc]">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        Find your{" "}
        <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-8">
          dream companies
        </span>
      </h1>

      <p className="text-slate-500 mb-10 text-lg">
        Find the dream companies you dream work for
      </p>

      {/* Search Bar Container */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-0 p-2 bg-white border border-gray-100 rounded-2xl overflow-hidden">
        {/* Job Title Input */}
        <div className="flex-1 flex items-center px-4 border-r border-gray-100">
          <Search className="text-gray-400 mr-3" size={20} />
          <input
            type="text"
            className="w-full py-4 outline-none text-slate-700 placeholder:text-gray-400"
            placeholder="Job title or keyword"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        {/* Location Select */}
        <div className="flex items-center px-4 min-w-[200px]">
          <MapPin className="text-gray-400 mr-3" size={20} />
          <select className="w-full py-4 outline-none bg-transparent text-slate-700 font-medium appearance-none cursor-pointer">
            <option>France, Italy</option>
            <option>Remote</option>
            <option>United States</option>
          </select>
          <span className="ml-2 text-gray-400">▼</span>
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-medium transition-all">
          Search
        </button>
      </div>

      {/* Popular Tags */}
      <p className="max-w-4xl mx-auto mt-6 text-sm text-slate-400 text-left">
        Popular :{" "}
        <span className="text-slate-600 font-medium">
          Twitter, Microsoft, Apple, Facebook
        </span>
      </p>
    </div>
  );
}
