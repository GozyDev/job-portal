import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../services/jobService";
import {
  Building2,
  Flame,
  MapPin,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  MoveRight,
  Stethoscope,
  Umbrella,
  MonitorPlay,
  Tent,
  Coffee,
  TrainFront,
  Heart,
  ChevronLeft,
} from "lucide-react";
import type { Perk } from "@/lib/type";

const iconMap = {
  Twitter,
  Facebook,
  Linkedin,
  Building2,
  Flame,
  MapPin,
  Users,
  Stethoscope,
  Umbrella,
  MonitorPlay,
  Tent,
  Coffee,
  TrainFront,
  Heart,
};

type IconKey = keyof typeof iconMap;

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getJobById(id)
        .then((data) => setJob(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading)
    return (
      <section className="pt-[90px] py-[80px] h-[600px] items-center justify-center flex">
        <p className="text-[#2563EB] text-2xl  tracking-tight animate-pulse ">
          IDD LOGO
        </p>
      </section>
    );
  if (!job)
    return (
      <div className="p-10 text-center text-red-500 my-[100px]">
        Job not found.
      </div>
    );

  return (
    <section className="my-[100px] space-y-8">
      <div className="w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors "
        >
          <ChevronLeft size={20} />
          <span>Go Back</span>
        </button>
      </div>
      <div className="max-w-7xl mx-auto p-3 py-[20px] bg-white min-h-screen border ">
        {/* Header Card */}
        <div className="  rounded-xl border border-gray-200 flex items-center justify-between mb-8 p-3 py-5">
          <div className="flex  gap-6">
            <img
              src={job.companyLogo}
              alt={job.companyName}
              className="w-25 h-25   rounded object-cover"
            />
            <div className="space-y-3">
              <section>
                <h1 className="text-2xl font-semibold text-slate-900">
                  {job.title}
                </h1>
                <span>
                  <a href="" className="text-[13px] text-blue-600">
                    {job.website}
                  </a>
                </span>
              </section>
              <section className="flex flex-wrap gap-6 md:gap-10">
                <div className="flex items-center gap-3.5">
                  <Flame className="text-blue-500" size={20} />{" "}
                  <div>
                    <p className="text-gray-500 text-[13px]">Founded</p>{" "}
                    <p className="text-sm">{job.foundedDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <Users className="text-blue-500" size={20} />{" "}
                  <div>
                    <p className="text-gray-500 text-[13px]">Employee</p>{" "}
                    <p className="text-sm">{job.employeeCount}</p>
                  </div>
                </div>{" "}
                <div className="flex items-center gap-3.5">
                  <MapPin className="text-blue-500" size={20} />{" "}
                  <div>
                    <p className="text-gray-500 text-[13px]">Location</p>{" "}
                    <p className="text-sm">20 Countries</p>
                  </div>
                </div>{" "}
                <div className="flex items-center gap-3.5">
                  <Building2 className="text-blue-500" size={20} />{" "}
                  <div>
                    <p className="text-gray-500 text-[13px]">Industry</p>{" "}
                    <p className="text-sm">{job.industry}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b pb-6 text-gray-300">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-medium mb-4 tracking-tighter text-black">
                Company Profile
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {job.companyProfile}
              </p>
            </section>
            <section className="space-y-6">
              <p className="font-medium text-xl tracking-tighter text-black">
                Contact
              </p>
              <div className="flex flex-wrap gap-4">
                {job.contact.map(
                  (c: { label: string; icon: IconKey }, index: string) => {
                    const IconComponent = iconMap[c.icon];
                    return (
                      <div
                        key={index}
                        className="flex flex-row-reverse  items-center gap-3 w-max border-t-0 border shadow px-2 py-2 font-medium text-blue-800 "
                      >
                        <p className="text-[12px]">{c.label}</p>
                        {/* 2. Render the component if it exists */}
                        {IconComponent && (
                          <IconComponent
                            size={18}
                            className="text-blue-700"
                            strokeWidth={2}
                          />
                        )}
                      </div>
                    );
                  },
                )}
              </div>
            </section>
            <section className="flex flex-col md:flex-row gap-3 h-max p-2">
              <div className="flex-none md:flex-1">
                <img
                  src={job.images.image2}
                  alt=""
                  className=" h-full w-full object-cover rounded"
                />
              </div>
              <div className="md:w-[300px]  space-y-3 h-full">
                <img src={job.images.image1} alt="" className="rounded" />
                <img src={job.images.image3} alt="" className="rounded" />
                <img src={job.images.image4} alt="" className="rounded" />
              </div>
            </section>
          </div>
          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-white pb-6  border-b border-b-gray-200 ">
              <h3 className="font-medium text-black tracking-tighter text-lg mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {job.techStack?.map((tech: any) => (
                  <span
                    key={tech.name}
                    className="p-1  text-slate-700 rounded-md text-sm font-medium flex flex-col items-center gap-3 "
                  >
                    <img src={tech.icon} alt="" className="w-14 h-14" />
                    <p className="text-sm tracking-tighter">{tech.name}</p>
                  </span>
                ))}
              </div>
              <p className="text-[13px] font-medium text-blue-800 mt-7 flex gap-3 items-center">
                View tech stack <MoveRight size={18} />
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl tracking-tighter font-medium text-black">
                  Office Location
                </h2>
                <p className="text-sm text-gray-700 mt-3">
                  Stripe office Spread across 20 Countries
                </p>
              </div>
              <section className="text-black">
                <div className="flex items-center gap-3">
                  <img
                    src="https://www.svgrepo.com/show/508668/flag-us.svg"
                    alt=""
                    className="w-10"
                  />
                  <p className="text-sm">United States</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://www.svgrepo.com/show/405401/flag-england.svg"
                    alt=""
                    className="w-10"
                  />
                  <p className="text-sm">England</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://www.svgrepo.com/show/249004/japan.svg"
                    alt=""
                    className="w-10"
                  />
                  <p className="text-sm">Japan</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://www.svgrepo.com/show/405417/flag-for-flag-australia.svg"
                    alt=""
                    className="w-10"
                  />
                  <p className="text-sm">Australia</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://www.svgrepo.com/show/508668/flag-us.svg"
                    alt=""
                    className="w-10"
                  />
                  <p className="text-sm">United States</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://www.svgrepo.com/show/405448/flag-for-flag-china.svg"
                    alt=""
                    className="w-10"
                  />
                  <p className="text-sm">China</p>
                </div>
                <p className="text-[13px] font-medium text-blue-800 mt-7 flex gap-3 items-center">
                  View Countries <MoveRight size={18} />
                </p>
              </section>
            </div>
          </div>
        </div>
        <section className="space-y-4">
          <div className="mt-8">
            <h2 className="font-medium tracking-tighter text-xl">Teams</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {job.team.map(
              (
                member: { src: string; name: string; role: string },
                index: string,
              ) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group border border-gray-100 py-7 shadow"
                >
                  {/* Circular Avatar Wrapper */}
                  <div className="relative w-24 h-24 mb-4">
                    <img
                      src={member.src} // Fallback avatar
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-transparent group-hover:border-blue-100 transition-all"
                    />
                  </div>
                  {/* Name & Role */}
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{member.role}</p>
                  {/* Social Icons (Match the footer style) */}
                  <div className="flex gap-3 text-slate-400">
                    <Twitter
                      size={14}
                      className="hover:text-blue-400 cursor-pointer transition-colors"
                    />
                    <Linkedin
                      size={14}
                      className="hover:text-blue-700 cursor-pointer transition-colors"
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </section>
        <section className="mt-12 p-3">
          <h2 className="text-xl font-semibold mb-2 tracking-tight text-slate-900">
            Perks & Benefits
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            This job comes with several perks and benefits
          </p>
          {/* 2. Grid Container: 1 column on mobile, 4 on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {job.perks.map((perk: Perk, index: number) => {
              const IconComponent = iconMap[perk.icon as IconKey];
              return (
                <div
                  key={index}
                  className="flex flex-col items-start space-y-4"
                >
                  {/* Icon Container */}
                  <div className="text-blue-600">
                    {IconComponent && (
                      <IconComponent size={32} strokeWidth={1.5} />
                    )}
                  </div>
                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-slate-900 leading-none">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
