import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Category from "./Category.tsx";

gsap.registerPlugin(ScrollTrigger);

function Categories() {
    useGSAP(() => {
        gsap.from(".category", {
            scale: 0.5,
            opacity: 0,
            delay: 0.2,
            ease: "none",
            stagger: {
                amount: 3,
                from: "random"
            },
            scrollTrigger: {
                trigger: ".category",
                start: "top 85%",
            }
        })
    })

const categoriesData = [
  {
    id: 1,
    nodeNumber: "NODE_01",
    title: "NEURAL_LINKS",
    description: "Direct brain-to-matrix interface modules. Quantum encrypted Retinal HUDs and memory overclockers.",
  },
  {
    id: 2,
    nodeNumber: "NODE_02",
    title: "DRONES_SYS",
    description: "Autonomous reconnaissance and defense units equipped with stealth obsidian skin and neuro-stabilizers.",
  },
  {
    id: 3,
    nodeNumber: "NODE_03",
    title: "CYBERWARE",
    description: "Heavy-duty cybernetic limb replacements and internal organic boosters built for neon-city survival.",
  },
  {
    id: 4,
    nodeNumber: "NODE_04",
    title: "NET_RUNNER",
    description: "Decryption decks, military-grade icebreakers, and virtual proxy nodes built to bypass corporate firewalls.",
  },
  {
    id: 5,
    nodeNumber: "NODE_05",
    title: "BIOTECH_GEN",
    description: "Synthetic genetic patches, nanite med-kits, and acute adrenaline regulators for elite cyber-athletes.",
  },
  {
    id: 6,
    nodeNumber: "NODE_06",
    title: "STEALTH_OPT",
    description: "Active cloaking matrix devices, light-bending camouflages, and thermal dampeners for silent infiltration.",
  },
  {
    id: 7,
    nodeNumber: "NODE_07",
    title: "QUANTUM_CORE",
    description: "Next-gen processing mainframes and sub-zero cooling hardware designed for heavy tactical rigs.",
  },
  {
    id: 8,
    nodeNumber: "NODE_08",
    title: "PLASMA_WEAPON",
    description: "High-energy plasma cells and localized electromagnetic pulse devices for defensive perimeter security.",
  },
  {
    id: 9,
    nodeNumber: "NODE_09",
    title: "HOLONET_HUD",
    description: "Tactical holographic visors with real-time biometric scanning and atmospheric threat analysis.",
  },
  {
    id: 10,
    nodeNumber: "NODE_10",
    title: "OBLIVION_ICE",
    description: "High-level counter-intrusion subroutines and dark-net data storage units with self-destruct triggers.",
  },
];

  return (
    <section className="min-h-screen bg-[#06070b] flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
      <div className="text-center mb-20 z-10">
        <h3 className="text-3xl md:text-5xl font-black font-mono text-white uppercase tracking-wide">
          EXPLORE <span className="text-pink-500">CATEGORIES</span>
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl w-full relative z-10">
        {categoriesData.map((category) => {
          return (
            <div className="category md:col-span-1" key={category.id}>
              <Category {...category} borderColor={category.id % 2 === 0 ? "cyan" : "pink"} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
