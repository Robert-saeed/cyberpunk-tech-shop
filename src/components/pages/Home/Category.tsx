function Category({ nodeNumber, title, description, borderColor }: {
  nodeNumber: string;
  title: string;
  description: string;
  borderColor: string;
}) {
  const borderClass = borderColor === 'pink' ? 'border-pink-500/20 hover:border-pink-500/60' : 'border-cyan-500/20 hover:border-cyan-500/60';
  const textGlow = borderColor === 'pink' ? 'group-hover:text-pink-400' : 'group-hover:text-cyan-400';

  return (
    <div className={`relative bg-white/2 backdrop-blur-md border ${borderClass} rounded-2xl p-6 h-56 flex flex-col justify-between overflow-hidden group transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>      
      <div>
        <div className="font-mono text-[10px] text-slate-500 tracking-widest">[ {nodeNumber} ]</div>
        <h4 className={`text-xl font-black font-mono text-white mt-2 mb-2 tracking-wide transition-colors duration-300 ${textGlow}`}>
          {title}
        </h4>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <button className={`font-mono text-[10px] tracking-widest text-slate-500 uppercase inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300`}>
        CONNECT_NODE &gt;&gt;
      </button>
    </div>
  );
}

export default Category;