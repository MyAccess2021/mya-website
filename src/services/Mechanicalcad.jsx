import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";

export default function MechanicalCAD() {
  const { t } = useLang();

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Syne:wght@400;500;600;700;800&display=swap');

        :root {
          --orange: #f4531c;
          --black: #111111;
          --mid: #444;
          --muted: #888;
          --light: #f7f5f2;
          --white: #ffffff;
          --border: #e8e4de;
          --card-bg: #faf9f7;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .mcad-hero { background: var(--black); min-height: 92vh; display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .mcad-hero-bg-text {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: 'Syne', sans-serif; font-size: 24vw; font-weight: 800;
          color: rgba(255,255,255,0.03); white-space: nowrap; pointer-events: none;
          letter-spacing: -10px; line-height: 1; user-select: none;
        }
        .mcad-hero-top { flex: 1; display: grid; grid-template-columns: 1fr 1fr; min-height: 60vh; }
        .mcad-hero-content {
          padding: 5rem 4% 4rem 7%;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; z-index: 2; color: #fff;
        }
        .mcad-breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--orange); margin-bottom: 2rem; }
        .mcad-breadcrumb span { color: #555; }
        .mcad-hero-title { font-family: 'Syne', sans-serif; font-size: clamp(3rem, 5.5vw, 5.5rem); font-weight: 800; line-height: 0.95; letter-spacing: -3px; margin-bottom: 2rem; }
        .mcad-hero-title .line2 { color: var(--orange); display: block; }
        .mcad-hero-title .line3 { color: #555; font-weight: 400; display: block; font-size: 0.6em; letter-spacing: -1px; margin-top: 0.3em; }
        .mcad-hero-desc { font-size: 0.97rem; color: #888; line-height: 1.75; max-width: 400px; margin-bottom: 3rem; }
        .mcad-hero-actions { display: flex; gap: 1rem; }
        .mcad-btn-primary { background: var(--orange); color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.8px; transition: 0.2s; }
        .mcad-btn-primary:hover { background: #d83e0e; transform: translateY(-2px); }
        .mcad-btn-outline { background: transparent; color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 600; border: 1px solid #333; cursor: pointer; text-transform: uppercase; transition: 0.2s; }
        .mcad-btn-outline:hover { border-color: #666; }
        .mcad-hero-visual { position: relative; z-index: 2; background: #0a0a0a; }
        .mcad-cad-overlay { position: absolute; top: 2rem; right: 2rem; display: flex; flex-direction: column; gap: 0.7rem; }
        .mcad-cad-badge { background: rgba(244,83,28,0.9); color: #fff; padding: 0.6rem 1rem; border-radius: 6px; font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .mcad-cad-badge-dark { background: rgba(0,0,0,0.75); border: 1px solid #333; }
        .mcad-hero-bottom { border-top: 1px solid #1a1a1a; display: grid; grid-template-columns: repeat(4, 1fr); position: relative; z-index: 2; }
        .mcad-hb-item { padding: 2rem 7%; border-right: 1px solid #1a1a1a; }
        .mcad-hb-item:last-child { border-right: none; }
        .mcad-hb-num { font-family: 'Syne', sans-serif; font-size: 2.5rem; font-weight: 800; color: #fff; line-height: 1; }
        .mcad-hb-label { font-size: 0.72rem; color: #555; font-weight: 500; margin-top: 0.3rem; }

        /* ── SECTIONS ── */
        .mcad-section { padding: 6rem 7%; }
        .mcad-section-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--orange); margin-bottom: 1rem; }
        .mcad-section-title { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; letter-spacing: -1.5px; color: var(--black); line-height: 1.05; margin-bottom: 1.2rem; }
        .mcad-section-sub { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 580px; }

        /* ── SOFTWARE ── */
        .mcad-sw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 3.5rem; }
        .mcad-sw-card { background: var(--white); border: 1px solid var(--border); border-radius: 10px; padding: 2rem 1.5rem; text-align: center; transition: 0.3s; }
        .mcad-sw-card:hover { border-color: var(--orange); box-shadow: 0 4px 24px rgba(244,83,28,0.08); transform: translateY(-3px); }
        .mcad-sw-logo { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--orange); margin-bottom: 0.8rem; }
        .mcad-sw-name { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; }
        .mcad-sw-type { font-size: 0.72rem; color: var(--muted); font-weight: 500; }

        /* ── SERVICES ── */
        .mcad-svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3.5rem; }
        .mcad-svc-card { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: 0.3s; }
        .mcad-svc-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.07); transform: translateY(-4px); }
        .mcad-svc-img { height: 200px; }
        .mcad-svc-body { padding: 1.8rem; }
        .mcad-svc-tag { font-size: 0.65rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--orange); margin-bottom: 0.8rem; }
        .mcad-svc-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.7rem; }
        .mcad-svc-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }
        .mcad-svc-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 1.2rem; font-size: 0.78rem; font-weight: 700; color: var(--orange); text-decoration: none; cursor: pointer; }

        /* ── IMAGE BREAK ── */
        .mcad-img-break { background: var(--black); }
        .mcad-img-break-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; height: 460px; gap: 2px; }
        .mcad-img-break-main { position: relative; }
        .mcad-img-break-label { position: absolute; bottom: 2rem; left: 2rem; color: #fff; }
        .mcad-img-break-label h3 { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; }
        .mcad-img-break-label p { font-size: 0.8rem; color: #bbb; margin-top: 0.3rem; }
        .mcad-img-break-right { display: grid; grid-template-rows: 1fr 1fr; gap: 2px; }

        /* ── WORKFLOW ── */
        .mcad-workflow-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: flex-start; margin-top: 2.5rem; }
        .mcad-wf-step { display: flex; gap: 1.5rem; padding: 2rem 0; border-bottom: 1px solid var(--border); }
        .mcad-wf-step:last-child { border-bottom: none; }
        .mcad-wf-step-left { display: flex; flex-direction: column; align-items: center; }
        .mcad-wf-num { width: 40px; height: 40px; border-radius: 50%; background: var(--white); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 0.75rem; font-weight: 800; color: var(--muted); flex-shrink: 0; transition: 0.3s; }
        .mcad-wf-step:hover .mcad-wf-num { background: var(--orange); border-color: var(--orange); color: #fff; }
        .mcad-wf-line { flex: 1; width: 1px; background: var(--border); margin: 6px 0; }
        .mcad-wf-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
        .mcad-wf-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }
        .mcad-wf-output { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.8rem; font-size: 0.72rem; font-weight: 600; color: var(--orange); background: rgba(244,83,28,0.08); padding: 0.25rem 0.7rem; border-radius: 4px; }
        .mcad-workflow-visual { position: sticky; top: 6rem; }
        .mcad-wv-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.5rem; }
        .mcad-wv-tag { background: var(--white); border: 1px solid var(--border); padding: 0.4rem 0.9rem; border-radius: 6px; font-size: 0.72rem; font-weight: 600; color: var(--mid); }

        /* ── FORMATS ── */
        .mcad-formats { background: var(--black); padding: 6rem 7%; }
        .mcad-formats .mcad-section-title { color: #fff; }
        .mcad-formats-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1px; background: #1a1a1a; border-radius: 10px; overflow: hidden; margin-top: 3.5rem; }
        .mcad-fmt-card { background: #111; padding: 1.5rem 1.2rem; text-align: center; transition: 0.3s; }
        .mcad-fmt-card:hover { background: #161616; }
        .mcad-fmt-ext { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--orange); margin-bottom: 0.6rem; }
        .mcad-fmt-name { font-size: 0.72rem; color: #666; font-weight: 500; line-height: 1.4; }

        /* ── PORTFOLIO ── */
        .mcad-port-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 3.5rem; }
        .mcad-port-card { background: var(--white); border-radius: 10px; overflow: hidden; transition: 0.3s; border: 1px solid var(--border); }
        .mcad-port-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.08); transform: translateY(-4px); }
        .mcad-port-img { height: 200px; }
        .mcad-port-body { padding: 1.5rem; }
        .mcad-port-industry { font-size: 0.68rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--orange); margin-bottom: 0.5rem; }
        .mcad-port-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
        .mcad-port-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.5; }
        .mcad-port-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
        .mcad-port-tag { font-size: 0.65rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 4px; background: var(--light); color: var(--mid); border: 1px solid var(--border); }

        /* ── CTA ── */
        .mcad-cta { background: var(--orange); color: #fff; text-align: center; padding: 7rem 7%; position: relative; overflow: hidden; }
        .mcad-cta::before { content: ''; position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 800px; height: 500px; background: radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 70%); pointer-events: none; }
        .mcad-cta .mcad-section-title { color: #fff; margin: 0 auto 1.5rem; max-width: 700px; }
        .mcad-cta .mcad-section-sub { margin: 0 auto 3rem; color: rgba(255,255,255,0.7); }
        .mcad-cta-buttons { display: flex; gap: 1rem; justify-content: center; }
        .mcad-btn-white { background: #fff; color: var(--orange); padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; }
        .mcad-btn-outline-white { background: transparent; color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 600; border: 2px solid rgba(255,255,255,0.4); cursor: pointer; text-transform: uppercase; }

        /* ── PLACEHOLDER ── */
        .mcad-placeholder { background: linear-gradient(135deg, #e8e4de 0%, #d4cfc8 100%); display: flex; align-items: center; justify-content: center; color: #aaa; font-size: 0.78rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
        .mcad-placeholder-dark { background: linear-gradient(135deg, #1a1a1a 0%, #222 100%); color: #444; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .mcad-hero-top { grid-template-columns: 1fr; }
          .mcad-hero-visual { display: none; }
          .mcad-hero-bottom { grid-template-columns: repeat(2, 1fr); }
          .mcad-section { padding: 4rem 5%; }
          .mcad-formats { padding: 4rem 5%; }
          .mcad-sw-grid { grid-template-columns: repeat(2, 1fr); }
          .mcad-svc-grid { grid-template-columns: 1fr; }
          .mcad-img-break-grid { grid-template-columns: 1fr; height: auto; }
          .mcad-img-break-right { grid-template-columns: 1fr 1fr; grid-template-rows: unset; }
          .mcad-img-break-grid .mcad-placeholder { height: 240px; }
          .mcad-workflow-layout { grid-template-columns: 1fr; }
          .mcad-workflow-visual { position: static; }
          .mcad-formats-grid { grid-template-columns: repeat(3, 1fr); }
          .mcad-port-grid { grid-template-columns: 1fr; }
          .mcad-cta { padding: 4rem 5%; }
          .mcad-cta-buttons { flex-direction: column; align-items: center; }
          .mcad-hb-item { padding: 1.5rem 5%; }
        }
      `}</style>

      <Header />

      {/* HERO */}
      <div className="mcad-hero">
        <div className="mcad-hero-bg-text">CAD</div>
        <div className="mcad-hero-top">
          <div className="mcad-hero-content">
            <div className="mcad-breadcrumb">Services <span>›</span> Mechanical CAD</div>
            <h1 className="mcad-hero-title">
              Mechanical
              <span className="line2">CAD Design</span>
              <span className="line3">Precision Engineered Enclosures & Structures</span>
            </h1>
            <p className="mcad-hero-desc">From concept sketches to production-ready 3D models and technical drawings. Our mechanical engineers design enclosures, brackets, assemblies, and custom hardware.</p>
            <div className="mcad-hero-actions">
              <button className="mcad-btn-primary">Start Your Design</button>
              <button className="mcad-btn-outline">View Portfolio</button>
            </div>
          </div>
          <div className="mcad-hero-visual">
            <div className="mcad-placeholder mcad-placeholder-dark" style={{ width: '100%', height: '100%' }}>[ 3D CAD Rendering — Exploded View ]</div>
            <div className="mcad-cad-overlay">
              <div className="mcad-cad-badge">SolidWorks</div>
              <div className="mcad-cad-badge mcad-cad-badge-dark">STEP · IGES · DXF</div>
            </div>
          </div>
        </div>
        <div className="mcad-hero-bottom">
          {[
            { num: '300+', label: 'CAD Models Delivered' },
            { num: '48h', label: 'Concept-to-Draft Turnaround' },
            { num: '10+', label: 'CAD Software Supported' },
            { num: '100%', label: 'Manufacture-Ready Files' },
          ].map((item, i) => (
            <div key={i} className="mcad-hb-item">
              <div className="mcad-hb-num">{item.num}</div>
              <div className="mcad-hb-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SOFTWARE */}
      <section className="mcad-section" style={{ background: 'var(--light)' }}>
        <p className="mcad-section-label">Software Proficiency</p>
        <h2 className="mcad-section-title">Tools We Design With</h2>
        <p className="mcad-section-sub">Our engineers are certified in industry-standard CAD platforms, so we work in your preferred format.</p>
        <div className="mcad-sw-grid">
          {[
            { logo: 'SW', name: 'SolidWorks', type: '3D Parametric Modeling' },
            { logo: 'AC', name: 'AutoCAD', type: '2D Drafting & Detailing' },
            { logo: 'FC', name: 'Fusion 360', type: 'Integrated CAD/CAM/FEA' },
            { logo: 'INV', name: 'Inventor', type: 'Assembly & Motion Simulation' },
            { logo: 'CR', name: 'Creo', type: 'Complex Surface Modeling' },
            { logo: 'FBX', name: 'FreeCAD', type: 'Open-source Parametric' },
            { logo: 'RH', name: 'Rhino 3D', type: 'NURBS & Freeform Design' },
            { logo: 'KiC', name: 'KiCad MCAD', type: 'PCB-MCAD Co-Design' },
          ].map((sw, i) => (
            <div key={i} className="mcad-sw-card">
              <div className="mcad-sw-logo">{sw.logo}</div>
              <div className="mcad-sw-name">{sw.name}</div>
              <div className="mcad-sw-type">{sw.type}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mcad-section" style={{ background: '#fff' }}>
        <p className="mcad-section-label">What We Design</p>
        <h2 className="mcad-section-title">Mechanical CAD Services</h2>
        <p className="mcad-section-sub">Comprehensive design services covering every aspect of your product's physical form.</p>
        <div className="mcad-svc-grid">
          {[
            { tag: 'Enclosures', title: 'Electronics Enclosure Design', img: '[ Enclosure Design CAD View ]', desc: 'Custom enclosures designed around your PCB — including cutouts, mounting bosses, ventilation, and IP/NEMA rating compliance. Sheet metal, injection-molded, or extruded aluminum.' },
            { tag: 'Assemblies', title: 'Mechanical Assembly & BOM', img: '[ Assembly Drawing / Exploded View ]', desc: 'Multi-component assembly models with full bill of materials, tolerance stacks, and interference analysis. Ready for manufacturing and procurement.' },
            { tag: 'Documentation', title: 'Technical Drawings & GD&T', img: '[ Technical Drawing with GD&T ]', desc: 'Manufacturing-ready 2D drawings with full GD&T, tolerances, surface finish callouts, and material specifications per ASME Y14.5.' },
            { tag: 'Sheet Metal', title: 'Sheet Metal Design', img: '[ Sheet Metal Bend Design ]', desc: 'DFM-optimized sheet metal designs including bend allowances, flat patterns, and punch/laser cutting optimization. STEP and DXF files for direct manufacturing.' },
            { tag: 'Simulation', title: 'FEA & Stress Analysis', img: '[ FEA Stress Analysis Render ]', desc: 'Finite element analysis to validate structural integrity under load, thermal stress, and vibration conditions before committing to physical prototypes.' },
            { tag: 'Reverse Engineering', title: 'Reverse Engineering', img: '[ Reverse Engineering Scan ]', desc: 'Convert physical parts to accurate parametric CAD models using 3D scanning and measurement data. Ideal for legacy part documentation and redesign.' },
          ].map((svc, i) => (
            <div key={i} className="mcad-svc-card">
              <div className="mcad-svc-img mcad-placeholder">{svc.img}</div>
              <div className="mcad-svc-body">
                <div className="mcad-svc-tag">{svc.tag}</div>
                <h3 className="mcad-svc-title">{svc.title}</h3>
                <p className="mcad-svc-desc">{svc.desc}</p>
                <span className="mcad-svc-link">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE BREAK */}
      <div className="mcad-img-break">
        <div className="mcad-img-break-grid">
          <div className="mcad-img-break-main">
            <div className="mcad-placeholder mcad-placeholder-dark" style={{ height: '460px', width: '100%' }}>[ CAD Workstation / Dual Monitor Setup ]</div>
            <div className="mcad-img-break-label">
              <h3>Where Design Meets Engineering</h3>
              <p>State-of-the-art design workstations with rendering and simulation capability</p>
            </div>
          </div>
          <div className="mcad-img-break-right">
            <div className="mcad-placeholder mcad-placeholder-dark">[ 3D Print Prototype ]</div>
            <div className="mcad-placeholder mcad-placeholder-dark">[ Engineer Reviewing Drawings ]</div>
          </div>
          <div className="mcad-img-break-right">
            <div className="mcad-placeholder mcad-placeholder-dark">[ PCB in Custom Enclosure ]</div>
            <div className="mcad-placeholder mcad-placeholder-dark">[ Rendered Product Image ]</div>
          </div>
        </div>
      </div>

      {/* WORKFLOW */}
      <section className="mcad-section" style={{ background: 'var(--card-bg)' }}>
        <div className="mcad-workflow-layout">
          <div>
            <p className="mcad-section-label">Our Process</p>
            <h2 className="mcad-section-title">From Brief to Production Files</h2>
            <p className="mcad-section-sub" style={{ marginBottom: '2.5rem' }}>A collaborative, iterative process that keeps you in control at every stage.</p>
            {[
              { num: '01', title: 'Requirements & Brief', desc: 'Share your PCB layout, space constraints, environmental requirements, and aesthetic goals. We confirm feasibility and provide a project estimate.', output: 'Project Scope Document' },
              { num: '02', title: 'Concept Sketches', desc: 'Rapid 2D concept sketches exploring 2–3 design directions. Review and select a direction before committing to full 3D modeling.', output: 'Sketch PDF for Approval' },
              { num: '03', title: '3D CAD Modeling', desc: 'Full parametric 3D model with all design intent captured. Assemblies include PCB, connectors, and hardware for interference checking.', output: 'STEP / Native CAD File' },
              { num: '04', title: 'Design for Manufacture Review', desc: 'DFM analysis identifying potential manufacturing issues, tolerance concerns, and cost-reduction opportunities before prototyping.', output: 'DFM Report' },
              { num: '05', title: 'Drawing Package & Handoff', desc: 'Complete 2D drawing package with GD&T, material callouts, and surface finish specs. All native and neutral formats delivered.', output: 'Full Drawing Package + CAD Archive' },
            ].map((step, i, arr) => (
              <div key={i} className="mcad-wf-step">
                <div className="mcad-wf-step-left">
                  <div className="mcad-wf-num">{step.num}</div>
                  {i < arr.length - 1 && <div className="mcad-wf-line"></div>}
                </div>
                <div>
                  <div className="mcad-wf-title">{step.title}</div>
                  <div className="mcad-wf-desc">{step.desc}</div>
                  <span className="mcad-wf-output">↳ {step.output}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mcad-workflow-visual">
            <div className="mcad-placeholder" style={{ height: '420px', borderRadius: '12px' }}>[ CAD Model Isometric View ]</div>
            <div className="mcad-wv-tags">
              {['Toleranced Drawings','Interference Analysis','Revision Control','DXF Flat Patterns','Render-Ready Models','BOM Export'].map((tag, i) => (
                <span key={i} className="mcad-wv-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILE FORMATS */}
      <section className="mcad-formats">
        <p className="mcad-section-label">Deliverable Formats</p>
        <h2 className="mcad-section-title">We Deliver in Your Format</h2>
        <p className="mcad-section-sub" style={{ color: '#666' }}>Every project includes native CAD files plus neutral exchange formats for manufacturing, visualization, and collaboration.</p>
        <div className="mcad-formats-grid">
          {[
            { ext: '.STEP', name: 'Universal 3D Exchange' },
            { ext: '.IGES', name: 'Surface & Solid Transfer' },
            { ext: '.DXF', name: 'Flat Patterns & 2D' },
            { ext: '.PDF', name: 'Technical Drawings' },
            { ext: '.STL', name: '3D Printing Ready' },
            { ext: '.SAT', name: 'ACIS Solid Modeling' },
          ].map((fmt, i) => (
            <div key={i} className="mcad-fmt-card">
              <div className="mcad-fmt-ext">{fmt.ext}</div>
              <div className="mcad-fmt-name">{fmt.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mcad-section" style={{ background: 'var(--light)' }}>
        <p className="mcad-section-label">Recent Work</p>
        <h2 className="mcad-section-title">Selected Portfolio</h2>
        <p className="mcad-section-sub">A snapshot of recent mechanical design projects across industries.</p>
        <div className="mcad-port-grid">
          {[
            { industry: 'IoT / Consumer', title: 'Industrial IoT Gateway Enclosure', img: '[ IoT Device Enclosure Render ]', desc: 'DIN-rail mountable IP65 enclosure for a custom IoT gateway PCB. Sheet metal with powder coat finish.', tags: ['Sheet Metal','IP65','DIN Rail'] },
            { industry: 'Medical', title: 'Handheld Medical Device Housing', img: '[ Medical Device Housing Design ]', desc: 'Ergonomic injection-molded housing for a portable diagnostic device. Designed for IEC 60601 clearance requirements.', tags: ['Injection Mold','Medical','Ergonomics'] },
            { industry: 'Robotics', title: 'Autonomous Robot Chassis', img: '[ Robotics Chassis Design ]', desc: 'Lightweight aluminum chassis for a mobile robot platform. Full assembly model with motor mounts, sensor brackets, and wiring channels.', tags: ['Aluminum','Assembly','FEA Validated'] },
          ].map((port, i) => (
            <div key={i} className="mcad-port-card">
              <div className="mcad-port-img mcad-placeholder">{port.img}</div>
              <div className="mcad-port-body">
                <div className="mcad-port-industry">{port.industry}</div>
                <h4 className="mcad-port-title">{port.title}</h4>
                <p className="mcad-port-desc">{port.desc}</p>
                <div className="mcad-port-tags">
                  {port.tags.map((tag, j) => <span key={j} className="mcad-port-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mcad-cta">
        <p className="mcad-section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Start Your Project</p>
        <h2 className="mcad-section-title">Turn Your Idea Into Engineering Reality</h2>
        <p className="mcad-section-sub">Share your requirements — a sketch, a napkin drawing, or a detailed brief — and we'll turn it into production-ready mechanical CAD.</p>
        <div className="mcad-cta-buttons">
          <button className="mcad-btn-white">Submit Your Brief</button>
          <button className="mcad-btn-outline-white">Download Capabilities</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}