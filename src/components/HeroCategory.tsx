import { Users, ArrowRight } from "lucide-react";

const categories = [
  { title: "Direct Support", roles: "32 roles" },
  { title: "Clinical / Professional", roles: "7 roles" },
  { title: "Registered Nurse", roles: "15 roles" },
  { title: "Administrative", roles: "24 roles" },
  { title: "Administrative", roles: "24 roles" },
  { title: "Administrative", roles: "10 roles" },
  { title: "Quality Improvement Specialist", roles: "roles", isLong: true },
];

export function ExploreByCategory() {
  return (
    <section className="py-6 px-4 max-w-7xl mx-auto bg-white rounded">
      <h2 className="text-2xl font-medium tracking-tighter text-slate-800 mb-5">Explore by category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((cat, index) => (
          <div key={index} className="group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all cursor-pointer relative">
            <div className="bg-slate-50 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
              <Users className="text-slate-600 group-hover:text-blue-600" size={20} />
            </div>
            <h3 className="font-medium text-slate-900 mb-1">{cat.title}</h3>
            <p className="text-sm text-slate-400">{cat.roles}</p>
            <ArrowRight className="absolute bottom-6 right-6 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
          </div>
        ))}
      </div>
    </section>
  );
}