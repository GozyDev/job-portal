import { Facebook, Instagram, Twitter, Linkedin, Globe } from "lucide-react";

export default function     () {
  return (
    <footer className="bg-[#191D23] text-white pt-20 pb-10 ">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-medium mb-4">IDD Job Platform</h2>
            <p className="text-slate-400 leading-relaxed max-w-xs text-sm">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>
        
          {/* About Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Companies</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Help Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Get job notifications</h3>
            <p className="text-slate-400 mb-4 text-sm">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white text-slate-900 px-4 py-3 rounded-md w-full focus:outline-none text-sm"
              />
              <button className="bg-[#4F46E5] hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            2025 © IDD Job Platform | All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Instagram, Globe, Linkedin, Twitter].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}