import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">

      {/* Navigation Header - Blue Background */}
      <header className="bg-blue-600 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              AI Iconic Labs
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-blue-100">
            <Link href="/" className="text-white font-semibold">Home</Link>
            <Link href="/products/titlediligence-expert" className="hover:text-white transition-colors">TitleDiligence Expert</Link>
            <Link href="/products/iaip" className="hover:text-white transition-colors">IAIP</Link>
          </nav>
          <div>
            <a
              href="mailto:aiiconiclabs@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition-all shadow-md"
            >
              Request a Pilot
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - White Background with subtle blue radial gradient */}
      <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.08),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6">
            Build Intelligence Around Complex Work
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            AI Iconic <span className="text-blue-600">Labs</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Building AI-powered intelligence systems that turn fragmented documents, data, relationships, and evidence into structured, actionable insights for complex professional workflows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/20 transition-all"
            >
              Explore Our Suite →
            </a>
            <a
              href="mailto:aiiconiclabs@gmail.com"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-xl transition-all"
            >
              Contact Laboratory
            </a>
          </div>
        </div>
      </section>

      {/* Product Suite Overview - White Background with Blue Boxes */}
      <section id="products" className="py-24 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Our Product Suite</h2>
            <p className="text-slate-600">Enterprise intelligence engineered for high-friction domain challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Product 1: TitleDiligence Expert - Blue Box */}
            <div className="bg-blue-600 p-8 rounded-2xl border border-blue-700 flex flex-col justify-between hover:bg-blue-700 transition-all shadow-lg group">
              <div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/20 text-white uppercase">Legal Intelligence</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">TitleDiligence Expert</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  AI-powered property legal intelligence helping lawyers reconstruct property ownership, transactions, and evidence, reconcile inconsistencies, and investigate risks. Powered by secure <strong>CaseVaults</strong>.
                </p>
              </div>
              <div>
                <Link
                  href="/products/titlediligence-expert"
                  className="inline-flex items-center text-sm font-semibold text-white hover:underline group-hover:translate-x-1 transition-transform"
                >
                  Explore TitleDiligence →
                </Link>
              </div>
            </div>

            {/* Product 2: IAIP - Blue Box */}
            <div className="bg-blue-600 p-8 rounded-2xl border border-blue-700 flex flex-col justify-between hover:bg-blue-700 transition-all shadow-lg group">
              <div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/20 text-white uppercase">Industrial Automation</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">IAIP</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Industrial Auto Asset Creation and Management. Streamlining asset hierarchy mapping, SCADA telemetry integration, and plant automation data engineering.
                </p>
              </div>
              <div>
                <Link
                  href="/products/iaip"
                  className="inline-flex items-center text-sm font-semibold text-white hover:underline group-hover:translate-x-1 transition-transform"
                >
                  Explore IAIP →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} AI Iconic Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
