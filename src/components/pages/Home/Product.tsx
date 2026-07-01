type ProductProps = {
  name: string;
  version: string;
  description: string;
  price: number;
  discount: number;
  image?: string;
};

function Product({
  name,
  version,
  description,
  price,
  discount,
  image,
}: ProductProps) {
  return (
    <div className="product w-screen h-screen shrink-0 flex items-center justify-center bg-black p-0 m-0 relative">
      <div className="w-[90vw] h-[70vh] rounded-3xl relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-linear-to-r from-white/10 via-black/80 to-white/10 backdrop-blur-xl border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.3)]">
        <div className="absolute -top-3 -right-3 rotate-15 bg-linear-to-r from-red-500 via-yellow-500 to-purple-500 text-white font-mono text-sm font-black tracking-widest p-3 rounded-4xl uppercase shadow-lg z-30">
          {discount}%
        </div>

        <div className="flex flex-col items-start justify-center gap-6 w-full md:w-[55%] h-full z-10 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-black font-mono tracking-wide text-white uppercase">
            {name} <span className="text-pink-500">{version}</span>
          </h2>

          <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans max-w-md">
            {description}
          </p>

          <div className="flex flex-col relative pt-6 pr-20">
            <div className="text-3xl font-mono font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] relative inline-block">
              ${price}
              <span className="text-xs font-mono text-slate-500 line-through absolute -top-1 -right-15">
                ${(price / (1 - discount / 100)).toFixed(2)}
              </span>
            </div>
          </div>

          <button className="px-8 py-3 font-mono text-sm font-bold tracking-widest text-black bg-white uppercase transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] active:scale-95 rounded-none">
            EXPLORE_NOW //
          </button>
        </div>

        <div className="w-full md:w-[45%] h-[40vh] md:h-[90%] rounded-2xl border border-cyan-500/40 bg-black/40 flex items-center justify-center relative overflow-hidden z-10 order-1 md:order-2 shadow-[0_0_35px_rgba(6,182,212,0.4)]">
            <img
              src={`/images/${image}`}
              alt={name}
              className="w-full h-full object-contain absolute z-2"
            />

            <img
              src={`/images/${image}`}
              alt={name}
              className="w-full h-full object-cover absolute blur-xs z-0"
            />
        </div>
      </div>
    </div>
  );
}

export default Product;
