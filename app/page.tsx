'use client';

import React from 'react';
import Link from 'next/link';

const workflow = [
  { n: '01', title: 'Understand documents', text: 'Classify and structure information from deeds and supporting records.' },
  { n: '02', title: 'Connect entities', text: 'Link people, properties, ownership interests and transactions.' },
  { n: '03', title: 'Reconstruct history', text: 'Build a chronological view of ownership and transactions.' },
  { n: '04', title: 'Reconcile records', text: 'Compare documents to identify conflicts, missing links and gaps.' },
  { n: '05', title: 'Identify findings', text: 'Surface material questions using legal-domain validation checks.' },
  { n: '06', title: 'Lawyer review', text: 'Trace findings to evidence and decide what needs investigation.' },
];

const checks = [
  { icon: '↗', colorClass: 'bg-blue-50 text-blue-700', title: 'Ownership continuity', text: 'Is the transferor connected to the preceding ownership history?' },
  { icon: '♧', colorClass: 'bg-orange-50 text-orange-700', title: 'Missing legal heir', text: 'Is a legal heir absent from a partition or subsequent conveyance?' },
  { icon: '⌖', colorClass: 'bg-emerald-50 text-emerald-700', title: 'Property identifier mismatch', text: 'Do survey, Hissa, site and other identifiers agree across records?' },
  { icon: '▤', colorClass: 'bg-orange-50 text-orange-700', title: 'Extent discrepancy', text: 'Does the stated property extent differ across documents?' },
  { icon: '⌂', colorClass: 'bg-purple-50 text-purple-700', title: 'Mortgage–release reconciliation', text: 'Does the release clearly correspond to the earlier mortgage?' },
  { icon: '▧', colorClass: 'bg-teal-50 text-teal-700', title: 'Missing referenced document', text: 'Is a cited instrument missing from the review set?' },
];

const email = 'admin@aiiconiclabs.com,aiiconiclabs@gmail.com';
const demoHref = `mailto:${email}?subject=TitleDiligence%20Demo%20Request`;
const contactHref = `mailto:${email}?subject=TitleDiligence%20Enquiry`;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-blue-700">{children}</p>;
}

export default function TitleDiligencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      <div className="h-1 bg-gradient-to-r from-blue-950 via-blue-600 to-sky-400" />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link href="https://aiiconiclabs.com" className="shrink-0 leading-tight">
            <span className="block text-sm font-black tracking-wide text-blue-950 sm:text-base">AI ICONIC LABS PRIVATE LIMITED</span>
            <span className="hidden text-[10px] text-slate-500 sm:block">Turning complex information into intelligence</span>
          </Link>
          <nav className="hidden items-center gap-5 text-xs font-semibold text-slate-700 xl:flex">
            <a href="#product" className="hover:text-blue-700">Home</a><a href="#product" className="hover:text-blue-700">TitleDiligenceExpert</a><a href="#how-it-works" className="hover:text-blue-700">How It Works</a><a href="#validators" className="hover:text-blue-700">Validators</a><a href="#use-cases" className="hover:text-blue-700">Use Cases</a><a href="#about" className="hover:text-blue-700">About Us</a><a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
          <div className="flex shrink-0 items-center gap-3"><a href="tel:+919845588775" className="hidden text-xs font-bold text-blue-950 2xl:block">☎ 9845588775</a><a href={demoHref} className="rounded-md bg-blue-700 px-3 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-800 sm:px-5">Request a Demo</a></div>
        </div>
      </header>

      {/* HERO: text and dashboard/map visual sit side by side, as in the visual preview */}
      <section id="product" className="relative isolate border-b border-blue-100 bg-[#edf5ff]">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/title-diligence-cadastral-bg.svg')" }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-blue-50/20" />
        <div className="mx-auto grid max-w-[1400px] items-center gap-7 px-5 py-10 sm:py-14 lg:grid-cols-[.92fr_1.08fr] lg:px-8 lg:py-16">
          <div className="relative z-10">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[.2em] text-blue-700">AI-powered property legal intelligence</p>
            <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-4xl">Title<span className="text-blue-500">Diligence Expert</span></h1>
            <h2 className="mt-3 max-w-xl text-xl font-bold leading-tight text-slate-900 sm:text-2xl">Connect the Evidence. Understand the Title. Support Better Decisions.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">TitleDiligence helps lawyers bring fragmented property documents, records and evidence into a connected view. It reconstructs ownership histories, identifies inconsistencies and surfaces material findings with supporting evidence for lawyer review.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href={demoHref} className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-900/15 hover:bg-blue-800">✉ Request a Demo</a><a href={contactHref} className="rounded-lg border border-blue-300 bg-white/90 px-5 py-3 text-sm font-bold text-blue-800 hover:bg-blue-50">Contact Us</a></div>
            <div className="mt-7 grid max-w-xl grid-cols-3 gap-3 border-t border-blue-200 pt-5">
              <div><div className="text-2xl text-blue-700">▤</div><p className="mt-1 text-xs font-bold text-slate-900">Multiple document types</p></div>
              <div><div className="text-2xl text-blue-700">⌘</div><p className="mt-1 text-xs font-bold text-slate-900">Connected intelligence</p></div>
              <div><div className="text-2xl text-blue-700">⚖</div><p className="mt-1 text-xs font-bold text-slate-900">Built for legal review</p></div>
            </div>
          </div>
          <div className="relative min-w-0">
            <div className="absolute -inset-3 rounded-3xl bg-blue-400/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl shadow-blue-950/20">
              <img src="/images/hero-property-dashboard.png" alt="Illustrative TitleDiligence dashboard and highlighted property parcel map" className="h-[230px] w-full object-cover sm:h-[300px] lg:h-[330px]" />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-white px-4 py-3 sm:px-5"><div><p className="text-xs font-extrabold text-slate-900">Connected property intelligence</p><p className="mt-1 text-[11px] text-slate-500">Ownership journey · Findings · Property context</p></div><span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-800">Illustrative visual</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION: image next to each story, like the requested preview */}
      <section className="mx-auto grid max-w-[1400px] gap-0 px-5 py-7 lg:grid-cols-2 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white md:grid-cols-[.9fr_1.1fr]">
          <img src="/images/lawyers-property-review.png" alt="Lawyers reviewing property documents and survey maps" className="h-48 w-full object-cover md:h-full md:min-h-[245px]" />
          <div className="p-5 sm:p-6"><SectionLabel>The challenge</SectionLabel><h2 className="text-xl font-extrabold leading-tight text-slate-950">Complex Property Histories. Fragmented Evidence.</h2><p className="mt-3 text-sm leading-6 text-slate-600">A property's legal story is spread across sale deeds, partition deeds, family trees, encumbrance certificates, survey maps and revenue or municipal records. Each document describes part of the story—and they may not all agree.</p><ul className="mt-3 space-y-2 text-xs font-medium text-slate-700">{['Multiple documents and sources','Changing property identifiers','Multiple owners and legal heirs','Conflicting or missing information'].map(x=><li key={x} className="flex gap-2"><span className="font-black text-rose-500">●</span>{x}</li>)}</ul></div>
        </div>
        <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white md:grid-cols-[1.1fr_.9fr]">
          <div className="p-5 sm:p-6"><SectionLabel>Our solution</SectionLabel><h2 className="text-xl font-extrabold leading-tight text-slate-950">From Documents to Connected Property Intelligence</h2><p className="mt-3 text-sm leading-6 text-slate-600">TitleDiligence uses AI and legal-domain validation to understand documents, connect people and properties, reconstruct ownership histories and identify inconsistencies with supporting evidence.</p><ul className="mt-3 space-y-2 text-xs font-medium text-slate-700">{['Process and structure property documents','Connect people, properties and transactions','Reconstruct ownership timelines','Apply legal-domain validation checks','Present findings for lawyer review'].map(x=><li key={x} className="flex gap-2"><span className="font-black text-blue-700">✓</span>{x}</li>)}</ul></div>
          <img src="/images/connected-document-intelligence.png" alt="Illustration of documents connected into a digital intelligence view" className="h-48 w-full object-cover md:h-full md:min-h-[245px]" />
        </div>
      </section>

      {/* WORKFLOW STRIP */}
      <section id="how-it-works" className="border-y border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8"><div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><SectionLabel>How it works</SectionLabel><h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">From fragmented documents to connected intelligence</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">Each step helps transform individual records into a structured view that a lawyer can investigate.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{workflow.map((w,i)=><div key={w.n} className="relative rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm"><div className="flex items-center justify-between"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-extrabold text-white">{i+1}</span>{i<workflow.length-1&&<span className="hidden text-xl text-blue-400 lg:block">→</span>}</div><h3 className="mt-3 text-sm font-extrabold text-slate-900">{w.title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{w.text}</p></div>)}</div>
        </div>
      </section>

      {/* EXAMPLE CASE + VALIDATORS */}
      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 py-10 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-14">
        <div><SectionLabel>Illustrative case</SectionLabel><h2 className="text-2xl font-extrabold text-slate-950">Three Documents. One Important Question.</h2><p className="mt-3 text-sm leading-6 text-slate-600">A Sale Deed records a transfer. A Family Tree identifies three legal heirs. A subsequent Partition Deed includes only two of them. TitleDiligence connects the supplied documents to surface the missing ownership question for legal investigation.</p><div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><img src="/images/property-parcel-map.png" alt="Illustrative aerial property parcel map with a highlighted boundary" className="h-44 w-full object-cover sm:h-52"/><div className="grid grid-cols-3 divide-x divide-slate-100"><div className="p-3"><p className="text-xs font-extrabold text-slate-900">Sale Deed</p><p className="mt-1 text-[11px] text-slate-500">Ownership transfer</p></div><div className="p-3"><p className="text-xs font-extrabold text-slate-900">Family Tree</p><p className="mt-1 text-[11px] text-slate-500">Three heirs identified</p></div><div className="p-3"><p className="text-xs font-extrabold text-rose-700">Partition Deed</p><p className="mt-1 text-[11px] text-slate-500">Two parties shown</p></div></div></div><p className="mt-2 text-[11px] leading-5 text-slate-500">Illustrative scenario and map artwork only. The legal effect depends on the full facts and applicable law.</p></div>
        <div id="validators"><SectionLabel>Validation checks</SectionLabel><h2 className="text-2xl font-extrabold text-slate-950">Examples of Legal-Domain Checks</h2><p className="mt-2 text-sm leading-6 text-slate-600">TitleDiligence can help surface potential inconsistencies and missing links for lawyer review.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{checks.map(c=><article key={c.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-start gap-3"><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl ${c.colorClass}`}>{c.icon}</span><div><h3 className="text-sm font-extrabold text-slate-900">{c.title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{c.text}</p></div></div></article>)}</div><p className="mt-4 text-[11px] leading-5 text-slate-500">A flagged discrepancy is not automatically proof of defective title or wrongdoing. It may require additional evidence and professional assessment.</p></div>
      </section>

      {/* AUDIENCES + TECHNOLOGY */}
      <section id="use-cases" className="border-y border-slate-200 bg-slate-50 py-9 sm:py-12"><div className="mx-auto grid max-w-[1400px] gap-8 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8"><div><SectionLabel>Who it is for</SectionLabel><h2 className="text-2xl font-extrabold text-slate-950">Built for document-heavy property workflows</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{[['⚖','Property lawyers','Reconstruct ownership histories and investigate material issues.'],['▥','Law firms','Support complex title-diligence workflows.'],['▣','In-house legal teams','Organise and reconcile property information.'],['⌂','Banks and institutions','Support property-related legal and collateral review.']].map(([icon,title,text])=><div key={title} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"><span className="text-2xl text-blue-700">{icon}</span><div><h3 className="text-sm font-extrabold text-slate-900">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{text}</p></div></div>)}</div></div><div id="about"><SectionLabel>Our technology</SectionLabel><h2 className="text-2xl font-extrabold text-slate-950">AI + Legal Knowledge + Evidence</h2><p className="mt-3 text-sm leading-6 text-slate-600">TitleDiligence combines document processing, LLM-based understanding, entity and property resolution, timeline reconstruction, rule-based validation and evidence traceability.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{[['OCR & document processing','Structure information from supplied documents.'],['LLM-based extraction','Understand unstructured document content.'],['Entity & property resolution','Connect references across records.'],['Rule-based validation','Check defined conditions and discrepancies.']].map(([t,d])=><div key={t} className="rounded-xl border border-blue-100 bg-white p-4"><h3 className="text-sm font-bold text-slate-900">{t}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{d}</p></div>)}</div><div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4"><p className="text-sm font-extrabold text-slate-900">Designed for lawyer review</p><p className="mt-1 text-xs leading-5 text-slate-600">The lawyer remains responsible for verifying evidence, interpreting applicable law and making the final legal assessment.</p></div></div></div></section>

      <section id="contact" className="relative isolate overflow-hidden bg-blue-950 py-10 text-white sm:py-12"><div className="absolute inset-0 -z-10 bg-cover bg-center opacity-20" style={{backgroundImage:"url('/images/title-diligence-cadastral-bg.svg')"}}/><div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-900/80"/><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 px-5 md:flex-row md:items-center lg:px-8"><div className="max-w-2xl"><SectionLabel>Get in touch</SectionLabel><h2 className="text-2xl font-extrabold sm:text-3xl">Make property due diligence more systematic.</h2><p className="mt-2 text-sm leading-6 text-blue-100">Request a demo or discuss a pilot to explore how TitleDiligence can support your legal workflow.</p></div><div className="flex flex-wrap gap-3"><a href={demoHref} className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500">✉ Request a Demo</a><a href={contactHref} className="rounded-lg border border-white/50 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Contact Us</a></div></div></section>

      <footer className="bg-white"><div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-7 text-xs sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_auto] lg:px-8"><div><p className="font-extrabold tracking-wide text-slate-900">AI ICONIC LABS PRIVATE LIMITED</p><p className="mt-1 text-slate-500">TitleDiligence — AI-powered Property Legal Intelligence</p><p className="mt-3 text-slate-400">© {new Date().getFullYear()} AI Iconic Labs Private Limited. All rights reserved.</p></div><div className="space-y-2 text-slate-600"><p><strong className="text-slate-800">Phone:</strong> <a href="tel:+919845588775" className="hover:text-blue-700">9845588775</a></p><p><strong className="text-slate-800">Email:</strong> <a href={contactHref} className="hover:text-blue-700">admin@aiiconiclabs.com</a></p><p><strong className="text-slate-800">Email:</strong> <a href={contactHref} className="hover:text-blue-700">aiiconiclabs@gmail.com</a></p></div><div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-600"><a href="#product" className="hover:text-blue-700">Home</a><a href="#how-it-works" className="hover:text-blue-700">How It Works</a><a href="#validators" className="hover:text-blue-700">Validators</a><a href="#contact" className="hover:text-blue-700">Contact</a></div></div></footer>
    </main>
  );
}
