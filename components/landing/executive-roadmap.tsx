export function ExecutiveRoadmap() {
  const roadmapItems = [
    {
      icon: '📦',
      title: 'Inventory Optimization',
      description: 'Lock supply chains by March for the Q2 peak to prevent stockouts during peak season.'
    },
    {
      icon: '🌟',
      title: 'Market Expansion',
      description: 'Replicate the München urban-hub model in secondary US cities for accelerated growth.'
    },
    {
      icon: '💰',
      title: 'Pricing Strategy',
      description: 'Audit discount levels on top 5 profit-driving products to maximize margin capture.'
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Executive Summary & Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
