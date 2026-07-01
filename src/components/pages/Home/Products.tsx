import Product from "./Product";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Products() {
  useGSAP(() => {
    const products = gsap.utils.toArray(".product");

    gsap.to(products, {
      xPercent: -100 * (products.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".products",
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${products.length * window.innerWidth}`,
        markers: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section className="relative products h-screen w-screen overflow-x-hidden flex flex-row items-center justify-start">
      <Product
        name="CYBER_DRONE"
        version="v2"
        description="Heavy-duty reconnaissance drone equipped with neuro-mesh stabilization and stealth obsidian coating. Optimized for neon-city navigation."
        price={659.99}
        discount={45}
        image="cyber_drone_v2.jpg"
      />

      <Product
        name="NEURAL_LINK"
        version="x4"
        description="Ocular interface device with real-time retinal HUD mapping, night-vision core, and multi-layer encryption for secure matrix diving."
        price={420.0}
        discount={30}
        image="neural_link_x4.jpg"
      />

      <Product
        name="CHRONO_CORE"
        version="v1"
        description="Quantum overclocking module for cybernetic rigs. Features liquid-neon cooling tubes and active temporal delay algorithms for seamless execution."
        price={899.0}
        discount={15}
        image="chrono_core_v1.jpg"
      />

      <Product
        name="MATRIX_BOARD"
        version="pro"
        description="Holographic mechanical interface with hot-swappable laser switches, dynamic glyph backlight, and full sync support with Neural networks."
        price={185.5}
        discount={50}
        image="matrix_board_pro.jpg"
      />
    </section>
  );
}

export default Products;
