import Image from 'next/image';

export function DiscountAnalysis() {
  return (
    <section className="py-24 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">Chapter 2</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Operational Efficiency & The 'Discount Trap'
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Aggressive discounting is a <span className="text-red-400 font-semibold">double-edged sword</span>. 
            While it may appear to drive volume, the data reveals a critical truth: 
            <span className="text-emerald-400 font-semibold"> high discounts don't always correlate with proportional sales increases</span>. 
            Strategic margin protection often outperforms volume chasing in long-term profitability.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Discount USD vs Sales Quantity */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-200">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/images/Discount USD vs Sales Quantity.png"
                alt="Discount USD vs Sales Quantity Analysis"
                fill
                className="object-contain bg-slate-800"
              />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Discount vs Sales Quantity</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                This graph demonstrates that higher discounts do not always produce proportional volume gains.
                The bottom part of the chart image is intentionally cropped here, while the insight is delivered in text below.
              </p>
            </div>
          </div>

          {/* Products by Discount */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-200">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/images/Products by Discount.png"
                alt="Products Categorized by Discount Levels"
                fill
                className="object-contain bg-slate-800"
              />
            </div>
            <div className="p-6 bg-slate-900/50">
              <h3 className="text-lg font-semibold text-white mb-3">Product Discount Trends</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The graph highlights discounting patterns across product groups and the need to protect margins on high-value items.
                Professional Touring Bikes are a strong example of where margin protection should override volume chasing.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Box */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8 mb-12">
          <div className="flex gap-4 items-start">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="text-white font-semibold mb-3">Case Study: Professional Touring Bike</h3>
              <p className="text-slate-300 mb-4">
                This product category exemplifies the 'discount trap.' Despite significant sales volume, 
                excessive discounting has compressed margins to unsustainable levels. 
                Recommendation: <span className="text-emerald-400 font-semibold">reduce discount depth, focus on value messaging</span>, 
                and consider segmenting customers to protect margin on price-sensitive channels.
              </p>
              <p className="text-slate-400 text-sm">
                The path forward: Protect the margin, even if volume declines initially. Long-term profitability outweighs short-term volume metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-8">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-emerald-400">→</span> Strategic Takeaways
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span>Discount elasticity varies by product category—one-size-fits-all strategies fail</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span>Margin dollars matter more than volume units—prioritize profitability metrics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span>Peak season (June: 15,790 units) requires disciplined pricing to capitalize on demand</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span>Premium products should maintain pricing integrity—discounting signals weakness</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
