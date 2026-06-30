import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    const windowWidth = window.innerWidth;
    gsap.fromTo(
      ".hero-light",
      {
        x: `random(0, ${windowWidth})`,
        y: `random(0, 300)`,
      },
      {
        x: `random(0, ${windowWidth})`,
        y: `random(0, 300)`,
        duration: 15,
        ease: "none",
        stagger: {
          yoyo: true,
          repeat: -1,
        },
      },
    );

    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power2.inOut",
      },
    )
      .from(".hero-desc", {
        y: 100,
        opacity: 0,
        duration: 1,
      })
      .fromTo(
        ".hero-btn",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.4)",
        },
        "-=0.3",
      );
  });

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center bg-black overflow-hidden px-4 select-none">
      <div className="hero-light absolute top-[20%] left-[15%] w-72 h-72 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="hero-light absolute bottom-[20%] right-[15%] w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="text-center z-10 space-y-6 mt-20">
        <div className="overflow-hidden py-2 px-4">
          <h1 className="hero-title text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            EQUIP YOUR
            <div className="transform scale-x-170 opacity-100 text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.2)]">
              AVATAR
            </div>
          </h1>
        </div>

        <div className="overflow-hidden py-1">
          <p className="hero-desc text-zinc-400 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed font-sans">
            Discover the next generation of gaming gear, mechanical switches,
            and accessories designed for professionals.
          </p>
        </div>

        <div className="pt-6 flex justify-center">
          <button className="hero-btn bg-transparent border-2 border-cyan-400 text-cyan-400 px-10 py-3.5 font-mono font-bold tracking-widest hover:bg-cyan-400 hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] uppercase rounded-none relative overflow-hidden group">
            ENTER_SHOP //
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
