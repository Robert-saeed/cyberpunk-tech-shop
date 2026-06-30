import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      "nav",
      {
        y: "-5px",
        boxShadow: "0 5px 10px rgba(255,255,255,0.10)",
      },
      {
        y: "6px",
        boxShadow: "0 5px 10px rgba(255,255,255,0.5)",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <div className="nav fixed top-0 left-0 w-full z-50 flex justify-center">
      <nav className="w-[80%] mt-5 px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border border-zinc-800/80 rounded-full shadow-[0_5px_10px_rgba(255,255,255,0.5)]">
        <div className="text-xl md:text-2xl font-black tracking-wider text-pink-500 select-none">
          CYBER
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            TECH
          </span>
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 text-sm font-mono tracking-wider text-zinc-400">
            <li>
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                // HOME
              </a>
            </li>

            <li
              className="relative cursor-pointer py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
                CATEGORIES <span className="text-xs text-pink-500">▼</span>
              </span>

              {isDropdownOpen && (
                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-black/90 border border-zinc-800 p-2 rounded-xl backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.7)] animate-fadeIn">
                  {[
                    "Laptops & PCs",
                    "Keyboards",
                    "Gaming Mice",
                    "Audio & Gear",
                  ].map((name) => {
                    return (
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-zinc-900 hover:text-cyan-400 rounded-lg transition-colors"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {["SHOP_ALL", "ABOUT", "CONTACT"].map((name) => {
              return (
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="relative cursor-pointer group pl-4 border-l border-zinc-800">
            <svg
              className="w-6 h-6 text-zinc-400 group-hover:text-pink-500 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-black text-[10px] font-black font-mono w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              0
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
