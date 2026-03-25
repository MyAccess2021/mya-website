import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .sr-page { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #111; overflow-x: hidden; }
  .cp-page, .pcb-page, .ed-page, .fw-page, .pd-page, .sr-page {
  padding-top: 80px; /* Adjust this based on your Header's height */
}

  /* HERO */
  .sr-hero { position: relative; width: 95%; margin: 1.5rem auto 0; border-radius: 1.25rem; overflow: hidden; min-height: 560px; display: flex; align-items: center; }
  .sr-hero-bg { position: absolute; inset: 0; }
  .sr-hero-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.35); }
  .sr-hero-overlay { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%); }
  .sr-hero-content { position: relative; z-index: 2; padding: 4rem 5%; max-width: 680px; }
  .sr-badge { display: inline-block; background: #f4531c; color: #fff; font-size: 0.66rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; padding: 5px 13px; border-radius: 3px; margin-bottom: 1.4rem; }
  .sr-hero h1 { font-size: clamp(2.8rem, 6vw, 5.5rem); font-weight: 700; line-height: 1.0; color: #fff; letter-spacing: -2px; margin-bottom: 1.4rem; }
  .sr-hero h1 em { color: #f4531c; font-style: normal; }
  .sr-hero-sub { font-size: 1rem; color: rgba(255,255,255,0.68); line-height: 1.8; max-width: 460px; margin-bottom: 2.5rem; }
  .sr-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
  .sr-btn-fill { background: #f4531c; color: #fff; border: none; padding: 13px 26px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.73rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: .3s; }
  .sr-btn-fill:hover { background: #ff6b35; transform: translateY(-2px); box-shadow: 0 8px 22px rgba(244,83,28,.35); }
  .sr-btn-ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.45); padding: 13px 26px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.73rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: .3s; }
  .sr-btn-ghost:hover { border-color: #fff; }
  .sr-hero-kpis { position: absolute; bottom: 2.5rem; right: 3.5%; z-index: 2; display: flex; gap: 1.2rem; }
  .sr-kpi { background: rgba(255,255,255,.09); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,.14); border-radius: 10px; padding: .9rem 1.4rem; text-align: center; min-width: 90px; }
  .sr-kpi-val { font-size: 1.5rem; font-weight: 700; color: #f4531c; line-height: 1; }
  .sr-kpi-lbl { font-size: 0.6rem; color: rgba(255,255,255,.55); letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px; }

  /* MARQUEE */
  .sr-marquee { background: #f4531c; padding: 11px 0; overflow: hidden; white-space: nowrap; }
  .sr-marquee-track { display: inline-flex; animation: srSlide 30s linear infinite; }
  .sr-mitem { font-size: .7rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #fff; padding: 0 2rem; }
  .sr-mdot { color: rgba(255,255,255,.4); padding: 0 .3rem; }
  @keyframes srSlide { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* SECTION */
  .sr-section { max-width: 1320px; margin: 0 auto; padding: 5.5rem 5%; }
  .sr-eyebrow { font-size: .67rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: .75rem; display: flex; align-items: center; gap: 10px; }
  .sr-eyebrow::before { content: ''; width: 26px; height: 2px; background: #f4531c; }
  .sr-stitle { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -1px; line-height: 1.1; margin-bottom: 1.2rem; }
  .sr-stitle em { color: #f4531c; font-style: normal; }

  /* CAP GRID */
  .sr-cap-grid { display: grid; grid-template-columns: repeat(2,1fr); margin-top: 3.5rem; border: 1px solid #e8e8e8; border-radius: 14px; overflow: hidden; }
  .sr-cap-cell { padding: 3rem; border-right: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8; position: relative; transition: .25s; background: #fff; }
  .sr-cap-cell:nth-child(2), .sr-cap-cell:nth-child(4) { border-right: none; }
  .sr-cap-cell:nth-child(3), .sr-cap-cell:nth-child(4) { border-bottom: none; }
  .sr-cap-cell:hover { background: #fff8f5; }
  .sr-cap-bar { position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: transparent; transition: .25s; }
  .sr-cap-cell:hover .sr-cap-bar { background: #f4531c; }
  .sr-cap-no { font-size: 3rem; font-weight: 700; color: rgba(244,83,28,.1); line-height: 1; margin-bottom: .9rem; }
  .sr-cap-title { font-size: 1.1rem; font-weight: 700; margin-bottom: .6rem; }
  .sr-cap-txt { font-size: .88rem; color: #666; line-height: 1.8; }

  /* PROCESS */
  .sr-process-band { background: #f7f7f7; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8; padding: 5.5rem 0; }
  .sr-process-inner { max-width: 1320px; margin: 0 auto; padding: 0 5%; }
  .sr-steps { display: grid; grid-template-columns: repeat(5,1fr); margin-top: 3.5rem; position: relative; }
  .sr-steps::before { content: ''; position: absolute; top: 27px; left: 12%; right: 12%; height: 1px; background: linear-gradient(90deg, transparent, #f4531c, transparent); }
  .sr-step { text-align: center; padding: 0 .5rem; }
  .sr-step-dot { width: 54px; height: 54px; border-radius: 50%; border: 2px solid #e8e8e8; background: #fff; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.2rem; font-size: .82rem; font-weight: 700; color: #f4531c; position: relative; z-index: 1; box-shadow: 0 2px 10px rgba(0,0,0,.06); transition: .3s; cursor: default; }
  .sr-step:hover .sr-step-dot { background: #f4531c; color: #fff; border-color: #f4531c; transform: scale(1.1); }
  .sr-step-name { font-size: .82rem; font-weight: 700; margin-bottom: .35rem; }
  .sr-step-desc { font-size: .73rem; color: #666; line-height: 1.6; }

  /* SPLIT */
  .sr-split { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-top: 4rem; }
  .sr-split-img { border-radius: 14px; overflow: hidden; aspect-ratio: 4/3; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,.1); }
  .sr-split-img img { width: 100%; height: 100%; object-fit: cover; }
  .sr-img-label { position: absolute; bottom: 1.4rem; left: 1.4rem; background: #f4531c; color: #fff; font-size: .62rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 5px 11px; border-radius: 3px; }
  .sr-checklist { list-style: none; margin-top: 2rem; }
  .sr-checklist li { display: flex; gap: 1rem; align-items: flex-start; padding: .95rem 0; border-bottom: 1px solid #e8e8e8; }
  .sr-checklist li:first-child { border-top: 1px solid #e8e8e8; }
  .sr-ci { width: 34px; height: 34px; background: #fff0eb; border: 1px solid #fde0d6; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: .9rem; }
  .sr-ct { font-size: .88rem; font-weight: 700; margin-bottom: 3px; }
  .sr-cd { font-size: .78rem; color: #666; line-height: 1.6; }

  /* TABLE */
  .sr-tbl-wrap { border: 1px solid #e8e8e8; border-radius: 12px; overflow: hidden; margin-top: 3rem; }
  .sr-tbl { width: 100%; border-collapse: collapse; }
  .sr-tbl thead { background: #111; }
  .sr-tbl th { color: #fff; font-size: .67rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 1rem 1.4rem; text-align: left; }
  .sr-tbl td { padding: 1.05rem 1.4rem; border-bottom: 1px solid #e8e8e8; font-size: .88rem; background: #fff; transition: .2s; }
  .sr-tbl tbody tr:last-child td { border-bottom: none; }
  .sr-tbl tbody tr:hover td { background: #fff8f5; }
  .sr-tag { display: inline-block; background: #fff0eb; color: #f4531c; border: 1px solid #fde0d6; font-size: .61rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; }

  /* STAT CARDS */
  .sr-stat-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 3rem; }
  .sr-scard { background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 12px; padding: 2.5rem; transition: .3s; }
  .sr-scard:hover { border-color: #f4531c; transform: translateY(-4px); box-shadow: 0 12px 36px rgba(244,83,28,.07); }
  .sr-scard-val { font-size: 2.4rem; font-weight: 700; color: #f4531c; line-height: 1; margin-bottom: .7rem; }
  .sr-scard-title { font-size: .92rem; font-weight: 700; margin-bottom: .4rem; }
  .sr-scard-text { font-size: .8rem; color: #666; line-height: 1.7; }

  /* CTA */
  .sr-cta { width: 95%; margin: 0 auto 4rem; background: #111; border-radius: 1.25rem; padding: 4rem 5%; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
  .sr-cta h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; color: #fff; letter-spacing: -1px; max-width: 480px; line-height: 1.15; }
  .sr-cta h2 em { color: #f4531c; font-style: normal; }
  .sr-cta-side { display: flex; flex-direction: column; gap: .9rem; align-items: flex-end; }
  .sr-cta-side p { color: rgba(255,255,255,.4); font-size: .84rem; text-align: right; max-width: 270px; line-height: 1.6; }

  @media(max-width:960px) {
    .sr-hero { width: 100%; border-radius: 0; margin-top: 0; }
    .sr-hero-kpis { display: none; }
    .sr-cap-grid { grid-template-columns: 1fr; }
    .sr-cap-cell { border-right: none !important; border-bottom: 1px solid #e8e8e8 !important; }
    .sr-cap-cell:last-child { border-bottom: none !important; }
    .sr-steps { grid-template-columns: repeat(2,1fr); gap: 2rem; }
    .sr-steps::before { display: none; }
    .sr-split { grid-template-columns: 1fr; }
    .sr-stat-row { grid-template-columns: 1fr; }
    .sr-cta { flex-direction: column; }
    .sr-cta-side { align-items: flex-start; }
  }
  @media(max-width:540px) {
    .sr-steps { grid-template-columns: 1fr; }
  }
`;

const marqueeItems = ["BGA Reballing","SMD Rework","Lead-Free Soldering","Hot-Air Reflow","Selective Soldering","Conformal Coating","IPC Class 3"];

const capabilities = [
  { no:"01", title:"BGA & Fine-Pitch Rework", text:"Reballing and replacement of BGA, LGA, QFN, and CSP packages using precision hot-air stations with X-ray joint verification after every job." },
  { no:"02", title:"SMD Reflow & Selective", text:"Reflow profile optimization for lead-free alloys, selective soldering for mixed-technology assemblies, and wave soldering for through-hole." },
  { no:"03", title:"Hand Soldering & Touch-Up", text:"IPC 7711/7721 certified hand soldering for prototypes, engineering samples, and production touch-up with full traceability documentation." },
  { no:"04", title:"Cleaning & Conformal Coating", text:"Post-solder flux removal, aqueous and solvent cleaning, selective conformal coating application for environmental protection of assemblies." },
];

const steps = [
  { n:"01", name:"Inspection", desc:"AOI & X-ray analysis to map all defects on incoming boards" },
  { n:"02", name:"Profile Setup", desc:"Thermal profiling per component specs and alloy type" },
  { n:"03", name:"Rework", desc:"Precision removal and placement under optical magnification" },
  { n:"04", name:"Validation", desc:"Post-rework X-ray, AOI, and electrical testing" },
  { n:"05", name:"Delivery", desc:"Documented report with before/after imaging included" },
];

const checks = [
  { icon:"🔬", title:"Microscope-Level Accuracy", desc:"All hand work performed under 10–40× stereo microscopes for sub-mm precision" },
  { icon:"📊", title:"Thermal Profile Logging", desc:"Every reflow cycle logged with peak temps, soak times, and ramp rates" },
  { icon:"⚡", title:"ESD Safe Environment", desc:"Full ESD protection from component storage through to final packaging" },
  { icon:"📋", title:"Full IPC Documentation", desc:"IPC-A-610 class 2 & 3 inspection reports delivered with every job" },
];

const tableRows = [
  ["BGA Reballing","BGA, LGA, CSP","Down to 0.3mm"],
  ["QFN / QFP Rework","QFN, QFP, SOIC","0402 and above"],
  ["Fine-Pitch SMD","0201, 01005","Ultra fine-pitch"],
  ["Through-Hole Wave","DIP, THT","Standard"],
  ["Conformal Coating","All assemblies","N/A"],
];

const stats = [
  { val:"99.7%", title:"First-Pass Yield Rate", text:"Industry-leading yield across all rework and soldering categories with full defect traceability." },
  { val:"24H", title:"Express Turnaround", text:"Priority service available for urgent prototype and production rework jobs without quality compromise." },
  { val:"IPC", title:"Certified Technicians", text:"All operators hold IPC-A-610 and IPC-7711/7721 certification for class 2 and class 3 assemblies." },
];

export default function SolderingRework() {
  return (
    <div className="sr-page">
      <style>{styles}</style>
        <Header/>

      {/* HERO */}
      <div className="sr-hero">
        <div className="sr-hero-bg">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&q=80" alt="Soldering" />
        </div>
        <div className="sr-hero-overlay" />
        <div className="sr-hero-content">
          <div className="sr-badge">Service</div>
          <h1>Soldering<br />&amp; <em>Rework</em></h1>
          <p className="sr-hero-sub">Precision thermal bonding, BGA reballing, and SMD rework — engineered for reliability at every joint, every time.</p>
          <div className="sr-hero-actions">
            <button className="sr-btn-fill">Get a Quote &rsaquo;</button>
            <button className="sr-btn-ghost">View Capabilities</button>
          </div>
        </div>
        <div className="sr-hero-kpis">
          <div className="sr-kpi"><div className="sr-kpi-val">99.7%</div><div className="sr-kpi-lbl">First-Pass Yield</div></div>
          <div className="sr-kpi"><div className="sr-kpi-val">24H</div><div className="sr-kpi-lbl">Turnaround</div></div>
          <div className="sr-kpi"><div className="sr-kpi-val">IPC</div><div className="sr-kpi-lbl">7711 Certified</div></div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="sr-marquee">
        <div className="sr-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="sr-mitem">{item}</span>
              <span className="sr-mdot">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CAPABILITIES */}
      <div className="sr-section">
        <div className="sr-eyebrow">What We Do</div>
        <div className="sr-stitle">Core <em>Capabilities</em></div>
        <p style={{ color:"#666", maxWidth:"560px", lineHeight:"1.8", fontSize:".94rem" }}>From prototype-level hand soldering to high-volume rework, our IPC-certified technicians deliver precision at every level.</p>
        <div className="sr-cap-grid">
          {capabilities.map((c, i) => (
            <div className="sr-cap-cell" key={i}>
              <div className="sr-cap-bar" />
              <div className="sr-cap-no">{c.no}</div>
              <div className="sr-cap-title">{c.title}</div>
              <div className="sr-cap-txt">{c.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className="sr-process-band">
        <div className="sr-process-inner">
          <div className="sr-eyebrow">How It Works</div>
          <div className="sr-stitle">Our <em>5-Step</em> Process</div>
          <div className="sr-steps">
            {steps.map((s, i) => (
              <div className="sr-step" key={i}>
                <div className="sr-step-dot">{s.n}</div>
                <div className="sr-step-name">{s.name}</div>
                <div className="sr-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SPLIT */}
      <div className="sr-section">
        <div className="sr-eyebrow">Precision Work</div>
        <div className="sr-stitle">Why Quality <em>Matters</em></div>
        <div className="sr-split">
          <div className="sr-split-img">
            <div className="sr-img-label">IPC Class 3</div>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" alt="PCB Close-up" />
          </div>
          <div>
            <p style={{ color:"#666", lineHeight:"1.8", fontSize:".95rem" }}>A cold joint or bridged pad can cause product failure in the field. Our rework workflow eliminates defects before they become costly problems.</p>
            <ul className="sr-checklist">
              {checks.map((c, i) => (
                <li key={i}>
                  <div className="sr-ci">{c.icon}</div>
                  <div>
                    <div className="sr-ct">{c.title}</div>
                    <div className="sr-cd">{c.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="sr-section" style={{ paddingTop:0 }}>
        <div className="sr-eyebrow">Service Matrix</div>
        <div className="sr-stitle">What We <em>Handle</em></div>
        <div className="sr-tbl-wrap">
          <table className="sr-tbl">
            <thead>
              <tr><th>Service</th><th>Package Type</th><th>Pitch</th><th>Status</th></tr>
            </thead>
            <tbody>
              {tableRows.map((r, i) => (
                <tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td><span className="sr-tag">Available</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="sr-section" style={{ paddingTop:0 }}>
        <div className="sr-stat-row">
          {stats.map((s, i) => (
            <div className="sr-scard" key={i}>
              <div className="sr-scard-val">{s.val}</div>
              <div className="sr-scard-title">{s.title}</div>
              <div className="sr-scard-text">{s.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="sr-cta">
        <h2>Ready to get <em>started?</em></h2>
        <div className="sr-cta-side">
          <p>Send your board files and get a detailed quote within 24 hours — no commitment required.</p>
          <button className="sr-btn-fill">Request a Quote &rsaquo;</button>
        </div>
      </div>
         <Footer/>
    </div>
  );
}