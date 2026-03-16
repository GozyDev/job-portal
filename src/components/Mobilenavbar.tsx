import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-[999] bg-[#f7f7f7]">
      <nav className="flex items-center justify-between px-8 py-4 bg-[#f7f7f7] max-w-7xl mx-auto">
        {/* Left Section: Logo and Desktop Nav Links */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link to="/" className="text-[#2563EB] text-2xl  tracking-tight">
            IDD LOGO
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/jobs"
              className="text-slate-600 font-medium hover:text-slate-900 transition-colors text-sm"
            >
              Find Jobs
            </Link>
            <Link
              to="/jobs"
              className="text-slate-600 font-medium hover:text-slate-900 transition-colors text-sm"
            >
              Job categories
            </Link>
          </div>
        </div>

        {/* Right Section: Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#2563EB] font-medium px-4 py-2 bg-white hover:bg-blue-50 rounded-lg transition-colors text-sm">
            Login
          </button>
          <button className="bg-[#2563EB] text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 text-sm">
            Post Job
          </button>
        </div>

        {/* Mobile Section: Hamburger Menu & Sheet Drawer */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-slate-600 hover:bg-slate-200 rounded-md transition-colors">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-white "
            >
              <SheetHeader>
                <p className="text-[#2563EB] text-2xl  tracking-tight absolute top-4">
                  IDD LOGO
                </p>
              </SheetHeader>
              <div className="flex flex-col gap-8 pt-4 ">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-4 p-3">
                  <SheetClose asChild>
                    <Link
                      to="/jobs"
                      className="text-lg font-medium text-slate-800 hover:text-[#2563EB] transition-colors text-sm"
                    >
                      Find Jobs
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/jobs"
                      className="text-lg font-medium text-slate-800 hover:text-[#2563EB] transition-colors text-sm"
                    >
                      Job categories
                    </Link>
                  </SheetClose>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-100 " />

                {/* Mobile Actions */}
                <div className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <button className="w-full text-[#2563EB] border border-[#2563EB]/20 font-medium px-4 py-3 bg-white hover:bg-blue-50 rounded-lg transition-colors text-base">
                      Login
                    </button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button className="w-full bg-[#2563EB] text-white px-4 py-3 rounded-lg font-medium shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 text-base">
                      Post Job
                    </button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
