import React from 'react';
import { 
  Activity, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  Workflow, 
  ArrowRight, 
  Lock, 
  Database, 
  FileSpreadsheet, 
  Pill, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CuraSync</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-slate-900 transition-colors">Overview</a>
            <a href="#solutions" className="hover:text-slate-900 transition-colors">Solutions</a>
            <a href="#platform" className="hover:text-slate-900 transition-colors">Platform</a>
            <a href="#security" className="hover:text-slate-900 transition-colors">Security</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#signin" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
              Sign In
            </a>
            <a 
              href="#get-started" 
              className="px-5 py-2.5 rounded-full bg-teal-800 text-white font-semibold text-sm hover:bg-teal-900 transition-all shadow-sm shadow-teal-900/10"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-28 overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100/60 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-900">
              Next-Generation Clinic & Hospital Management
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Clinical precision meets intelligent healthcare operations.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            CuraSync unites EHR records, department handoffs, pharmacy, and diagnostic insights into one sleek, reliable platform designed for modern medical institutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#get-started" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-teal-800 text-white font-semibold hover:bg-teal-900 transition-all shadow-md shadow-teal-900/20 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all shadow-sm"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* HERO MOCKUP CARD */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xl shadow-slate-200/50 p-6 md:p-8">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-4 text-xs font-mono text-slate-400">curasync.core / enterprise-mesh</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                System Operational • FHIR v4 Ready
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-5 relative group hover:border-teal-200 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-teal-800">01. PATIENT INTAKE</span>
                  <FileText className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Streamlined Registration</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Instant identity lookup, coverage verification, and triage tagging in under 60 seconds.
                </p>
                <div className="text-[11px] font-mono text-slate-500 bg-white inline-block px-2.5 py-1 rounded border border-slate-200">
                  Avg wait: 4.2 mins
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-5 relative group hover:border-teal-200 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-teal-800">02. CARE COORDINATION</span>
                  <Workflow className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Unified EHR Encounter</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Integrated diagnostic routing, structured notes, and automatic medication safeguards.
                </p>
                <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 inline-block px-2.5 py-1 rounded border border-emerald-100">
                  Real-time sync active
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-5 relative group hover:border-teal-200 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-teal-800">03. FULFILLMENT</span>
                  <Pill className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Pharmacy & Billing</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Closed-loop e-prescriptions, inventory depletion, and automated claims clearance.
                </p>
                <div className="text-[11px] font-mono text-slate-500 bg-white inline-block px-2.5 py-1 rounded border border-slate-200">
                  99.4% first-pass clean
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block mb-3">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed for clinical excellence across every touchpoint.
            </h2>
            <p className="text-slate-600 mt-4">
              Replace siloed tools with an interconnected workspace that connects administrators, physicians, pharmacists, and lab teams seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Centralized Patient Records",
                desc: "Chronological longitudinal health records, allergy tracking, vitals history, and cross-facility interoperability standard via FHIR v4.",
                icon: Database,
              },
              {
                title: "Multi-Role Coordination",
                desc: "Seamless digital handoffs across reception, attending doctors, laboratory diagnostic benches, and dispensary staff without friction.",
                icon: Workflow,
              },
              {
                title: "Intelligent Clinical Assistance",
                desc: "Contextual medical guidance, drug interaction screening, and retrieval-augmented insights grounded strictly in verified institutional guidelines.",
                icon: Cpu,
              },
              {
                title: "Enterprise Governance",
                desc: "Role-based access controls, immutable tamper-evident audit trails, and strict data sovereign boundaries ensuring comprehensive compliance.",
                icon: ShieldCheck,
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between hover:border-teal-200 transition-all group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 mb-6 shadow-sm group-hover:bg-teal-800 group-hover:text-white group-hover:border-transparent transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <a href="#learn-more" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 group-hover:text-teal-900">
                    Standardized Data Models <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCALABLE FOUNDATION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block mb-3">
              Scalable Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Engineered for high-reliability health systems.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether deploying for a specialized ambulatory clinic or scaling across a multi-campus regional medical network, CuraSync provides robust infrastructure designed for zero interruption.
            </p>

            <div className="space-y-4">
              {[
                { title: "Standardized API Interoperability", desc: "Direct HL7 FHIR v4, SMART-on-FHIR connectors, and bi-directional REST webhooks." },
                { title: "Offline-Resilient Telemetry", desc: "Edge synchronizers ensure critical patient charting and dispensary continue even during connectivity drops." },
                { title: "Granular Data Governance", desc: "Field-level PHI masking, enterprise SSO, and per-department access isolation." },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 block mb-2">45<span className="text-teal-800">m</span></span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Saved Daily per Clinician</h4>
              <p className="text-xs text-slate-500">Streamlined encounter documentation and accelerated chart sign-offs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 block mb-2">99.4<span className="text-teal-800">%</span></span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Clean-Claim Acceptance</h4>
              <p className="text-xs text-slate-500">Integrated code verification reducing insurance denials and billing delays.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 block mb-2">-34<span className="text-teal-800">%</span></span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Diagnostic Cycle Time</h4>
              <p className="text-xs text-slate-500">Faster handoff from specimen collection to validated physician notification.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-4xl md:text-5xl font-extrabold text-slate-900 block mb-2">99.99<span className="text-teal-800">%</span></span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Uptime Reliability</h4>
              <p className="text-xs text-slate-500">High-availability cloud topology with active-active regional replication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-teal-800 text-5xl font-serif mb-6">“</div>
          <blockquote className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed mb-8">
            &quot;CuraSync brought complete clarity to our multi-department workflows. Handoff delays between triage, physicians, and pharmacy dropped noticeably within weeks.&quot;
          </blockquote>
          <div>
            <div className="font-bold text-slate-900">Dr. Sarah Jenkins, MD</div>
            <div className="text-xs text-slate-500 mt-1">Chief Medical Officer • St. Jude Regional Healthcare Center</div>
          </div>
        </div>
      </section>

      {/* SECURITY BADGES */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
            Certified to Highest Healthcare Security and Privacy Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {['HIPAA Compliant', 'SOC 2 Type II', 'ISO 27001 Certified', 'GDPR Ready'].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-teal-800" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-3">
            Ready to Modernize?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Transform your clinic operations today.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Experience how CuraSync streamlines care delivery, reduces administrative burden, and elevates patient care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#get-started" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-teal-800 text-white font-semibold hover:bg-teal-900 transition-all shadow-md shadow-teal-900/30"
            >
              Get Started Free
            </a>
            <a 
              href="#demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-700 transition-all"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-teal-800 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900">CuraSync</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mb-6">
              Unified clinic management and intelligence platform for forward-thinking healthcare providers.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200 inline-block">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              System status: <span className="text-emerald-700 font-medium">All systems nominal</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 mb-4">Solutions</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li><a href="#" className="hover:text-slate-900">EHR & Records</a></li>
              <li><a href="#" className="hover:text-slate-900">Care Handoffs</a></li>
              <li><a href="#" className="hover:text-slate-900">Pharmacy Hub</a></li>
              <li><a href="#" className="hover:text-slate-900">Lab Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Architecture</a></li>
              <li><a href="#" className="hover:text-slate-900">API & FHIR</a></li>
              <li><a href="#" className="hover:text-slate-900">Security Model</a></li>
              <li><a href="#" className="hover:text-slate-900">Release Notes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 mb-4">Trust</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li><a href="#" className="hover:text-slate-900">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-900">Security Center</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2026 CuraSync Health, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
            <a href="#" className="hover:text-slate-600">Security</a>
          </div>
        </div>
      </footer>

    </div>
  );
}