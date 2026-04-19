export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Global Bike Inc.</h3>
            <p className="text-slate-400">Strategic Performance & Market Intelligence</p>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-right">
            GBI Internal Strategic Review | Data: Tableau Analytics
          </p>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8">
          <p className="text-slate-600 text-sm text-center">
            © 2024 Global Bike Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
