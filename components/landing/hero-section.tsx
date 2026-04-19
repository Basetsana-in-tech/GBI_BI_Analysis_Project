export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-background">
      <div className="text-center max-w-4xl">
        <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
          <span className="text-emerald-400 text-sm font-medium">GBI Intelligence</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          GBI Strategic Performance & Market Intelligence
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Data-driven insights into international distribution, seasonal demand, and margin optimization
        </p>
        <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-colors duration-200">
          Explore Analytics
        </button>
      </div>
    </section>
  );
}
