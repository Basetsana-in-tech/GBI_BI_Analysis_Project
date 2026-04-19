export function MarginAnalysis() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Profitability & Value Capture
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Transitioning from revenue to Profit USD (Revenue - Costs) reveals that aggressive discounting often erodes margins without a proportional increase in volume. For high-value lines like the Professional Touring Bike, we recommend a &apos;Margin First&apos; approach—reducing discounts on products with inelastic demand to capture maximum value.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Strategy Recommendation</p>
                <p className="text-white font-semibold">Premium Products: Margin First</p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Volume Products: Volume First</p>
                <p className="text-white font-semibold">Strategic discounting for market share</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center border border-emerald-500/30">
                  <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">Profit vs Discount Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
