export function GeographicDistribution() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Regional Concentration Analysis
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Analysis of sales quantity by city reveals heavy concentration in urban hubs. While the US contributes 47% of volume led by Boston, Germany&apos;s 53% share is anchored by München (44,498 units) and Hamburg (35,522 units). Strategic focus should remain on high-density German metro areas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                  <span className="text-emerald-400 font-bold">🌍</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Global Reach</p>
                  <p className="text-slate-400 text-sm">2 Primary Markets</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                  <span className="text-emerald-400 font-bold">📊</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Urban Focus</p>
                  <p className="text-slate-400 text-sm">Metropolitan Hubs Lead</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center border border-emerald-500/30">
                  <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4a1 1 0 011-1h16a1 1 0 011 1v2.757a1 1 0 01-.757.961l-4.882.682a1 1 0 00-.9.682l-2.222 6.037a1 1 0 01-.94.663h-.064a1 1 0 01-.94-.663l-2.222-6.037a1 1 0 00-.9-.682l-4.882-.682A1 1 0 013 6.757V4z" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">Geographic Treemap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
