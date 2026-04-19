export function FullSuiteOverview() {
  return (
    <section className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Integrated Market Research Dashboard
          </h2>
          <p className="text-lg text-slate-300">
            A centralized operational view tracking global sales quantity, revenue, and product distribution across the US and German markets.
          </p>
        </div>
        <div className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-emerald-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center border border-emerald-500/30">
                <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-slate-400 text-sm">Dashboard Analytics Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
