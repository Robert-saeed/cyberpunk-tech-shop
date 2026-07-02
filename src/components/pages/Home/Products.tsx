import { useRef } from "react";
import Product from "./Product";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(containerRef);
      const products = q(".product");

      const HorizonalScroll = gsap.to(products, {
        xPercent: -100 * (products.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${products.length * window.innerWidth}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      products.forEach((product, index) => {
        const productSelector = gsap.utils.selector(product);
        const name = productSelector(".name");
        const description = productSelector(".description");
        const image = productSelector(".images");
        const price = productSelector(".price");
        const lastPrice = productSelector(".lastPrice");
        const exploreBtn = productSelector(".explore-btn");
        const discount = productSelector(".discount");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: product,
            start: "left +=200",
            containerAnimation: HorizonalScroll,
          },
        });

        tl.from(product, {
          opacity: 0,
          duration: 1,
          y: -100,
        })

        tl.from(name, {
          y: 100,
          opacity: 0,
        });
        
        const splitDescription = new SplitText(description, { type: "lines" });
        tl.from(splitDescription.lines, {
          clipPath: "inset(0 0 100% 0)",
          y: 50,
          opacity: 0,
          duration: 1,
        });
        
        tl.from(image, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
        }, "<")

        const splitPrice = new SplitText(price, { type: "chars" });
        tl.from(splitPrice.chars, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
        });

        tl.from(
          lastPrice,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.5",
        );

        tl.fromTo(
          exploreBtn,
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
        );

        if (index === 0) {
        tl.fromTo(discount, {
          scale: 0,
          y: 500,
          x: -500,
          opacity: 0,
        }, {
          scale: 7,
          y: 250,
          x: -500,
          rotate: 15,
          opacity: 1,
          ease: "power4.out",
          duration: 2,
        }).fromTo(discount, {
          scale: 7,
          y: 250,
          x: -500,
          rotate: 15,
        },{
          scale: 1,
          y: 0,
          x: 0,
        })
      }
      });
    },
    { scope: containerRef },
  );

  const productsData = [
    {
      id: 1,
      name: "CYBER_DRONE",
      version: "v2",
      description:
        "Heavy-duty reconnaissance drone equipped with neuro-mesh stabilization and stealth obsidian coating. Optimized for neon-city navigation.",
      price: 659.99,
      discount: 45,
      image: "cyber_drone_v2.jpg",
    },
    {
      id: 2,
      name: "NEURAL_LINK",
      version: "x4",
      description:
        "Ocular interface device with real-time retinal HUD mapping, night-vision core, and multi-layer encryption for secure matrix diving.",
      price: 420.0,
      discount: 30,
      image: "neural_link_x4.jpg",
    },
    {
      id: 3,
      name: "CHRONO_CORE",
      version: "v1",
      description:
        "Quantum overclocking module for cybernetic rigs. Features liquid-neon cooling tubes and active temporal delay algorithms for seamless execution.",
      price: 899.0,
      discount: 15,
      image: "chrono_core_v1.jpg",
    },
    {
      id: 4,
      name: "MATRIX_BOARD",
      version: "pro",
      description:
        "Holographic mechanical interface with hot-swappable laser switches, dynamic glyph backlight, and full sync support with Neural networks.",
      price: 185.5,
      discount: 50,
      image: "matrix_board_pro.jpg",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative products h-screen w-screen overflow-x-hidden flex flex-row items-center justify-start"
    >
      {productsData.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}

export default Products;
