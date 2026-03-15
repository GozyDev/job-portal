import { Button } from "@/components/ui/button";

export default function HiringBanner() {
  return (
    <section className="w-full bg-[#4640DE] py-10 md:py-0 px-6 md:px-16 overflow-hidden mt-[100px] mb-[50px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left py-12 md:py-24 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Want to Hire? Start <br className="hidden md:block" /> posting jobs
            today
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Start posting jobs right away
          </p>
          <Button className="bg-white text-[#4640DE] hover:bg-slate-100 px-8 py-6 rounded-md font-bold text-md transition-all shadow-lg">
            Get started
          </Button>
        </div>

        {/* Right Dashboard Image */}
        <div className="flex-1 relative w-full h-full min-h-[300px] md:min-h-[500px] ">
          <div className="absolute bottom-0">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg"
              alt="Hiring Dashboard"
              className="rounded-tl-2xl shadow-2xl border-l-[12px] border-t-[12px] border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
