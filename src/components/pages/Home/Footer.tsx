import { useState, useEffect } from "react";

function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0]);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full min-h-screen bg-[#030407] pt-32 pb-8 px-6 md:px-12 flex flex-col justify-between relative border-t border-cyan-500/10 overflow-hidden select-none">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-slate-900 pb-12 z-10">
        
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-mono text-sm font-black text-white tracking-wider mb-4">
            [ ROBERT_SAEED ]
          </h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Next-generation frontend developer crafting immersive digital store experiences with precise logic and layout architecture.
          </p>
        </div>

        <div>
          <h5 className="font-mono text-xs text-cyan-400 tracking-widest mb-4 uppercase">
            // NAVIGATION
          </h5>
          <ul className="space-y-2 font-mono text-xs">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ HOME_MAIN ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ APP_STORE ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ TECH_SPECS ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ SYSTEM_LOGS ]</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-mono text-xs text-pink-500 tracking-widest mb-4 uppercase">
            // UTILITIES
          </h5>
          <ul className="space-y-2 font-mono text-xs">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ CORE_DOCS ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ NETWORK_STATUS ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ API_TERMINAL ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ SECURITY_PROT ]</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-mono text-xs text-cyan-400 tracking-widest mb-4 uppercase">
            // CONNECTIVITY
          </h5>
          <ul className="space-y-2 font-mono text-xs">
            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">[ LINKED_IN ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">[ GIT_HUB_REPO ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ FACEBOOK_NODE ]</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">[ SECURE_EMAIL ]</a></li>
          </ul>
        </div>

      </div>

      <div className="grow flex items-center justify-center max-h-[40vh] py-4 z-10">
        <h2 className="text-[10vw] font-black tracking-tighter text-white opacity-80 leading-none text-center font-sans italic uppercase select-none">
          ENJOY EXPLORING
        </h2>
      </div>

      <div className="w-full pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        <div className="font-mono text-[11px] text-slate-500 text-center md:text-left tracking-wide">
          © {new Date().getFullYear()} ROBERT_SAEED // GLOBAL_ACCESS_TERMINAL
        </div>
        
        <div className="font-mono text-[11px] text-slate-500 tracking-wide">
          [ SYSTEM: <span className="text-green-400">ONLINE</span> // TIME: <span className="text-cyan-400">{time}</span> ]
        </div>
      </div>

    </footer>
  );
}

export default Footer;