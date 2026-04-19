export function KpiDashboard() {
  const kpis = [
    {
      label: 'Market Leader',
      value: 'Germany',
      detail: '53% Share'
    },
    {
      label: 'Top Growth Hub',
      value: 'München',
      detail: '44,498 Units'
    },
    {
      label: 'Peak Monthly Volume',
      value: 'June Record',
      detail: '15,790 Units'
    },
    {
      label: 'Primary US Hub',
      value: 'Boston',
      detail: '28,149 Units'
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 hover:border-emerald-500/50 transition-colors duration-200">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">
                {kpi.label}
              </p>
              <p className="text-3xl font-bold text-white mb-2">
                {kpi.value}
              </p>
              <p className="text-emerald-400 font-semibold">
                {kpi.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
