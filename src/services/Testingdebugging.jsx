import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";

export default function TestingDebugging() {
  const { t } = useLang();

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Syne:wght@400;500;600;700;800&display=swap');

        :root {
          --orange: #f4531c;
          --black: #111111;
          --dark: #1a1a1a;
          --mid: #444;
          --muted: #888;
          --light: #f7f5f2;
          --white: #ffffff;
          --border: #e8e4de;
          --card-bg: #faf9f7;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .td-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 88vh; width: 100%; }
        .td-hero-left {
          background: var(--black); color: #fff;
          padding: 6rem 5% 6rem 7%;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; overflow: hidden;
        }
        .td-hero-left::before {
          content: ''; position: absolute; top: -120px; right: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(244,83,28,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .td-breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--orange); margin-bottom: 2.5rem; }
        .td-breadcrumb span { color: #555; }
        .td-hero-tag { display: inline-block; background: rgba(244,83,28,0.15); border: 1px solid rgba(244,83,28,0.4); color: var(--orange); font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 0.35rem 0.9rem; border-radius: 4px; margin-bottom: 1.5rem; }
        .td-hero-title { font-family: 'Syne', sans-serif; font-size: clamp(2.8rem, 4.5vw, 4.2rem); font-weight: 800; line-height: 1.0; letter-spacing: -2px; margin-bottom: 1.8rem; }
        .td-hero-title em { font-style: normal; color: var(--orange); }
        .td-hero-desc { font-size: 1rem; color: #aaa; line-height: 1.75; max-width: 440px; margin-bottom: 3rem; font-weight: 300; }
        .td-hero-actions { display: flex; gap: 1rem; align-items: center; }
        .td-btn-primary { background: var(--orange); color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.8px; transition: 0.2s; }
        .td-btn-primary:hover { background: #d83e0e; transform: translateY(-2px); }
        .td-btn-ghost { background: transparent; color: #ccc; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 600; border: 1px solid #333; cursor: pointer; text-transform: uppercase; letter-spacing: 0.8px; transition: 0.2s; }
        .td-btn-ghost:hover { border-color: #666; color: #fff; }
        .td-hero-stats { display: flex; gap: 3rem; margin-top: 4rem; padding-top: 3rem; border-top: 1px solid #222; }
        .td-stat-num { font-family: 'Syne', sans-serif; font-size: 2.2rem; font-weight: 800; color: #fff; }
        .td-stat-label { font-size: 0.72rem; color: #666; font-weight: 500; letter-spacing: 0.5px; margin-top: 0.2rem; }
        .td-hero-right { background: var(--light); position: relative; overflow: hidden; }
        .td-hero-right-inner { width: 100%; height: 100%; display: grid; grid-template-rows: 1fr 1fr; }
        .td-hero-right-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .td-hero-badge {
          position: absolute; bottom: 2rem; left: -1px;
          background: var(--orange); color: #fff;
          padding: 1rem 1.8rem; border-radius: 0 8px 8px 0;
          font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
          display: flex; align-items: center; gap: 0.7rem;
        }
        .td-hero-badge::before { content: '✓'; font-size: 1rem; }

        /* ── MARQUEE ── */
        .td-marquee-bar { background: var(--orange); color: #fff; padding: 0.75rem 0; overflow: hidden; white-space: nowrap; }
        .td-marquee-track { display: inline-block; animation: tdMarquee 22s linear infinite; }
        .td-marquee-track span { font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 0 2.5rem; opacity: 0.85; }
        .td-marquee-track span.dot { opacity: 0.4; padding: 0 1rem; }
        @keyframes tdMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* ── SHARED SECTION ── */
        .td-section { padding: 6rem 7%; }
        .td-section-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--orange); margin-bottom: 1rem; }
        .td-section-title { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; letter-spacing: -1.5px; color: var(--black); line-height: 1.05; margin-bottom: 1.2rem; }
        .td-section-sub { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 580px; }

        /* ── OVERVIEW ── */
        .td-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .td-overview-img-wrap { position: relative; }
        .td-overview-img-wrap img { width: 100%; border-radius: 1rem; display: block; }
        .td-overview-accent {
          position: absolute; bottom: -1.5rem; right: -1.5rem;
          background: var(--orange); color: #fff;
          padding: 1.5rem 2rem; border-radius: 10px;
          font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; line-height: 1.1; min-width: 160px;
        }
        .td-overview-accent small { display: block; font-family: 'DM Sans', sans-serif; font-size: 0.7rem; font-weight: 600; letter-spacing: 1px; opacity: 0.8; margin-top: 0.3rem; text-transform: uppercase; }
        .td-check-list { list-style: none; margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1.1rem; }
        .td-check-list li { display: flex; align-items: flex-start; gap: 0.9rem; font-size: 0.92rem; color: var(--mid); line-height: 1.5; }
        .td-check-icon { min-width: 20px; height: 20px; background: var(--orange); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #fff; font-size: 0.65rem; font-weight: 700; margin-top: 1px; flex-shrink: 0; }

        /* ── CAPABILITIES ── */
        .td-cap-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; }
        .td-cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: var(--border); border-radius: 12px; overflow: hidden; }
        .td-cap-card { background: var(--white); padding: 2.5rem 2rem; transition: 0.3s; }
        .td-cap-card:hover { background: var(--black); }
        .td-cap-card:hover .td-cap-title { color: #fff; }
        .td-cap-card:hover .td-cap-desc { color: #888; }
        .td-cap-card:hover .td-cap-num { color: rgba(244,83,28,0.3); }
        .td-cap-num { font-family: 'Syne', sans-serif; font-size: 3.5rem; font-weight: 800; color: var(--light); line-height: 1; margin-bottom: 1.5rem; transition: 0.3s; }
        .td-cap-title { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 0.8rem; transition: 0.3s; }
        .td-cap-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; transition: 0.3s; }
        .td-cap-accent { background: var(--orange) !important; }
        .td-cap-accent .td-cap-num, .td-cap-accent .td-cap-title, .td-cap-accent .td-cap-desc { color: #fff !important; }
        .td-cap-accent .td-cap-desc { opacity: 0.8; }

        /* ── IMAGE FEATURE ── */
        .td-img-feature-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 2px; border-radius: 14px; overflow: hidden; height: 560px; }
        .td-img-feature-main { position: relative; }
        .td-img-feature-main img { width: 100%; height: 100%; object-fit: cover; }
        .td-img-main-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
          padding: 2.5rem 2rem; color: #fff;
        }
        .td-img-main-overlay h3 { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; }
        .td-img-main-overlay p { font-size: 0.82rem; color: #bbb; margin-top: 0.4rem; }
        .td-img-feature-side { display: grid; grid-template-rows: 1fr 1fr; gap: 2px; }
        .td-img-feature-side img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── PROCESS ── */
        .td-process-timeline { margin-top: 4rem; display: flex; gap: 0; position: relative; }
        .td-process-timeline::before { content: ''; position: absolute; top: 2rem; left: 0; right: 0; height: 2px; background: var(--border); }
        .td-process-step { flex: 1; position: relative; padding-right: 2rem; }
        .td-step-dot { width: 4rem; height: 4rem; border-radius: 50%; background: var(--white); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 800; color: var(--muted); margin-bottom: 2rem; position: relative; z-index: 1; transition: 0.3s; }
        .td-process-step:hover .td-step-dot { background: var(--orange); border-color: var(--orange); color: #fff; }
        .td-step-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.6rem; }
        .td-step-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

        /* ── TOOLS ── */
        .td-tools-section { background: var(--black); color: #fff; padding: 6rem 7%; }
        .td-tools-section .td-section-title { color: #fff; }
        .td-tools-section .td-section-sub { color: #777; }
        .td-tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #222; border-radius: 12px; overflow: hidden; margin-top: 3.5rem; }
        .td-tool-card { background: #111; padding: 2rem 1.5rem; transition: 0.3s; }
        .td-tool-card:hover { background: #1a1a1a; }
        .td-tool-icon { font-size: 2rem; margin-bottom: 1.2rem; }
        .td-tool-name { font-size: 0.88rem; font-weight: 700; color: #ddd; margin-bottom: 0.5rem; }
        .td-tool-desc { font-size: 0.77rem; color: #555; line-height: 1.5; }
        .td-tool-tag { display: inline-block; margin-top: 1rem; font-size: 0.65rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--orange); border: 1px solid rgba(244,83,28,0.3); padding: 0.25rem 0.6rem; border-radius: 4px; }

        /* ── DELIVERABLES ── */
        .td-del-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 3.5rem; }
        .td-del-card { border: 1px solid var(--border); border-radius: 10px; padding: 2rem; transition: 0.3s; }
        .td-del-card:hover { border-color: var(--orange); box-shadow: 0 4px 20px rgba(244,83,28,0.08); }
        .td-del-card-head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .td-del-icon { width: 44px; height: 44px; background: var(--light); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        .td-del-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; }
        .td-del-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }

        /* ── CTA ── */
        .td-cta { background: var(--black); color: #fff; text-align: center; padding: 7rem 7%; position: relative; overflow: hidden; }
        .td-cta::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(244,83,28,0.12) 0%, transparent 70%); pointer-events: none; }
        .td-cta .td-section-title { color: #fff; margin: 0 auto 1.5rem; max-width: 700px; }
        .td-cta .td-section-sub { margin: 0 auto 3rem; color: #666; }
        .td-cta-buttons { display: flex; gap: 1rem; justify-content: center; }

        /* ── PLACEHOLDER ── */
        .td-placeholder { background: linear-gradient(135deg, #e8e4de 0%, #d4cfc8 100%); display: flex; align-items: center; justify-content: center; color: #aaa; font-size: 0.78rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .td-hero { grid-template-columns: 1fr; }
          .td-hero-right { display: none; }
          .td-hero-left { padding: 5rem 5%; }
          .td-section { padding: 4rem 5%; }
          .td-overview-grid { grid-template-columns: 1fr; gap: 3rem; }
          .td-cap-grid { grid-template-columns: 1fr; }
          .td-tools-grid { grid-template-columns: repeat(2, 1fr); }
          .td-tools-section { padding: 4rem 5%; }
          .td-del-grid { grid-template-columns: 1fr; }
          .td-process-timeline { flex-direction: column; }
          .td-process-timeline::before { display: none; }
          .td-img-feature-grid { height: auto; grid-template-columns: 1fr; }
          .td-img-feature-side { grid-template-rows: unset; grid-template-columns: 1fr 1fr; height: 200px; }
          .td-cap-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .td-hero-stats { gap: 1.5rem; }
          .td-cta { padding: 4rem 5%; }
          .td-cta-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      <Header />

      {/* HERO */}
      <section className="td-hero" style={{ padding: 0 }}>
        <div className="td-hero-left">
          <div className="td-breadcrumb">Services <span>›</span> Testing & Debugging</div>
          <span className="td-hero-tag">Technical Service</span>
          <h1 className="td-hero-title">Testing &<br /><em>Debugging</em><br />Excellence</h1>
          <p className="td-hero-desc">Comprehensive hardware and software validation services. We detect, isolate, and resolve issues at every stage — from prototype to production.</p>
          <div className="td-hero-actions">
            <button className="td-btn-primary">Start a Project</button>
            <button className="td-btn-ghost">View Case Studies</button>
          </div>
          <div className="td-hero-stats">
            <div>
              <div className="td-stat-num">98%</div>
              <div className="td-stat-label">Defect Detection Rate</div>
            </div>
            <div>
              <div className="td-stat-num">24h</div>
              <div className="td-stat-label">Rapid Turnaround</div>
            </div>
            <div>
              <div className="td-stat-num">500+</div>
              <div className="td-stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
        <div className="td-hero-right">
          <div className="td-hero-right-inner">
            <div className="td-placeholder" style={{ height: '55%' }}>[ PCB Testing Setup ]</div>
            <div className="td-hero-right-grid">
              <div className="td-placeholder">[ Oscilloscope ]</div>
              <div className="td-placeholder">[ Debug Session ]</div>
            </div>
          </div>
          <div className="td-hero-badge">ISO Certified Testing</div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="td-marquee-bar">
        <div className="td-marquee-track">
          {['Functional Testing','Signal Integrity','Firmware Debugging','Boundary Scan','In-Circuit Testing','EMI/EMC Analysis','Stress Testing','Failure Analysis',
            'Functional Testing','Signal Integrity','Firmware Debugging','Boundary Scan','In-Circuit Testing','EMI/EMC Analysis','Stress Testing','Failure Analysis'].map((item, i) => (
            <span key={i}>{item}<span className="dot" style={{ padding: '0 1rem', opacity: 0.4 }}> ◆ </span></span>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="td-section" style={{ background: '#fff' }}>
        <div className="td-overview-grid">
          <div className="td-overview-img-wrap">
            <div className="td-placeholder" style={{ height: '420px', borderRadius: '1rem' }}>[ Hardware Testing Lab ]</div>
            <div className="td-overview-accent">500+<br /><small>Boards Tested</small></div>
          </div>
          <div>
            <p className="td-section-label">What We Do</p>
            <h2 className="td-section-title">End-to-End Hardware Validation</h2>
            <p className="td-section-sub">From bare-board inspection to full system functional testing, our engineers use industry-grade tools to ensure your product performs reliably.</p>
            <ul className="td-check-list">
              {[
                'Automated optical inspection (AOI) for solder joint quality and component placement',
                'In-circuit testing (ICT) to verify component values and board connectivity',
                'Functional testing against your exact product specifications',
                'Firmware flashing, validation, and regression testing pipelines',
                'Boundary scan (JTAG) for high-density BGA and complex PCB designs',
                'Real-time oscilloscope and logic analyzer debugging for signal-level issues',
              ].map((item, i) => (
                <li key={i}><span className="td-check-icon">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="td-section" style={{ background: 'var(--card-bg)' }}>
        <div className="td-cap-header">
          <div>
            <p className="td-section-label">Core Capabilities</p>
            <h2 className="td-section-title">What Our Lab Covers</h2>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', maxWidth: '300px', textAlign: 'right', lineHeight: 1.6 }}>Every service backed by ISO-compliant processes and experienced engineers.</p>
        </div>
        <div className="td-cap-grid">
          {[
            { num: '01', title: 'Functional Testing', desc: 'Full-board functional validation against design specs. Power-up sequencing, I/O verification, communication protocol checks (I2C, SPI, UART, USB).', accent: true },
            { num: '02', title: 'Signal Debugging', desc: 'Deep-dive waveform analysis using digital oscilloscopes and logic analyzers. Identify noise, glitches, timing violations, and crosstalk.' },
            { num: '03', title: 'Firmware Validation', desc: 'JTAG/SWD-based firmware flashing and debugging. Unit test execution, boundary condition testing, and OTA update validation.' },
            { num: '04', title: 'Environmental Stress', desc: 'Thermal cycling, humidity exposure, and vibration testing. Verify product robustness under worst-case operating conditions.' },
            { num: '05', title: 'In-Circuit Testing', desc: 'Bed-of-nails ICT fixture testing for high-volume boards. Fast, repeatable verification of component population and values.' },
            { num: '06', title: 'Failure Analysis', desc: 'Root cause investigation for field returns and production rejects. Detailed reports with corrective action recommendations.' },
          ].map((cap, i) => (
            <div key={i} className={`td-cap-card${cap.accent ? ' td-cap-accent' : ''}`}>
              <div className="td-cap-num">{cap.num}</div>
              <div className="td-cap-title">{cap.title}</div>
              <div className="td-cap-desc">{cap.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE FEATURE */}
      <div style={{ background: 'var(--light)', overflow: 'hidden' }}>
        <div className="td-img-feature-grid">
          <div className="td-img-feature-main">
            <div className="td-placeholder" style={{ height: '100%', minHeight: '560px' }}>[ Engineers at Test Station ]</div>
            <div className="td-img-main-overlay">
              <h3>State-of-the-Art Test Lab</h3>
              <p>Over 50 instruments and 3 dedicated test benches</p>
            </div>
          </div>
          <div className="td-img-feature-side">
            <div className="td-placeholder">[ Oscilloscope Waveform ]</div>
            <div className="td-placeholder">[ PCB Under Inspection ]</div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="td-section" style={{ background: '#fff' }}>
        <p className="td-section-label">How It Works</p>
        <h2 className="td-section-title">Our Testing Process</h2>
        <p className="td-section-sub">A structured approach that ensures nothing slips through the cracks — from brief to final report.</p>
        <div className="td-process-timeline">
          {[
            { num: '01', title: 'Requirements Intake', desc: 'Submit your design files, BOM, and test requirements. We review and confirm scope within 24 hours.' },
            { num: '02', title: 'Test Plan Design', desc: 'Engineers create a tailored test strategy covering all functional blocks and known risk areas.' },
            { num: '03', title: 'Fixture & Setup', desc: 'Test fixtures, jigs, and software scripts are developed and validated before production testing begins.' },
            { num: '04', title: 'Execution', desc: 'Systematic testing against the plan with real-time logging. Anomalies flagged and escalated immediately.' },
            { num: '05', title: 'Report & Debrief', desc: 'Detailed test report with pass/fail data, defect analysis, and recommendations for resolution.' },
          ].map((step, i) => (
            <div key={i} className="td-process-step">
              <div className="td-step-dot">{step.num}</div>
              <h4 className="td-step-title">{step.title}</h4>
              <p className="td-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="td-tools-section">
        <p className="td-section-label">Equipment & Tools</p>
        <h2 className="td-section-title">Our Instrument Arsenal</h2>
        <p className="td-section-sub">Professional-grade equipment used by engineers worldwide.</p>
        <div className="td-tools-grid">
          {[
            { icon: '📡', name: 'Digital Oscilloscopes', desc: '4-channel, 500 MHz bandwidth for high-speed signal analysis', tag: 'Signal' },
            { icon: '🔌', name: 'Logic Analyzers', desc: '32-channel protocol-aware analyzers for digital bus debugging', tag: 'Digital' },
            { icon: '🔍', name: 'AOI Systems', desc: 'Automated optical inspection for solder quality and placement accuracy', tag: 'Inspection' },
            { icon: '⚡', name: 'Programmable PSU', desc: 'Multi-channel programmable power supplies for controlled power testing', tag: 'Power' },
            { icon: '🌡️', name: 'Thermal Camera', desc: 'IR thermal imaging for hotspot detection and thermal profiling', tag: 'Thermal' },
            { icon: '💻', name: 'JTAG Debuggers', desc: 'Full suite of JTAG/SWD probes for embedded firmware debugging', tag: 'Firmware' },
            { icon: '📊', name: 'LCR Meters', desc: 'Precision component measurement — inductance, capacitance, resistance', tag: 'Measurement' },
            { icon: '🛡️', name: 'ICT Fixtures', desc: 'Custom bed-of-nails fixtures for high-volume in-circuit testing', tag: 'Production' },
          ].map((tool, i) => (
            <div key={i} className="td-tool-card">
              <div className="td-tool-icon">{tool.icon}</div>
              <div className="td-tool-name">{tool.name}</div>
              <div className="td-tool-desc">{tool.desc}</div>
              <span className="td-tool-tag">{tool.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="td-section" style={{ background: '#fff' }}>
        <p className="td-section-label">What You Receive</p>
        <h2 className="td-section-title">Testing Deliverables</h2>
        <p className="td-section-sub">Every engagement produces comprehensive, actionable documentation your team can act on immediately.</p>
        <div className="td-del-grid">
          {[
            { icon: '📋', title: 'Test Execution Report', desc: 'Complete pass/fail results for every test case, with waveform captures, screenshots, and measurement logs. Traceable to requirements.' },
            { icon: '🔎', title: 'Defect Analysis Report', desc: 'Root cause identification for each failure, with annotated images, hypothesis chain, and corrective action recommendations.' },
            { icon: '📈', title: 'Yield & Trend Data', desc: 'Statistical analysis of pass rates across batches. Identify systematic issues before they scale into costly production problems.' },
            { icon: '🛠️', title: 'Rework Recommendations', desc: 'Clear repair procedures for failed boards, prioritized by effort vs. impact. Optional rework service available in-house.' },
          ].map((del, i) => (
            <div key={i} className="td-del-card">
              <div className="td-del-card-head">
                <div className="td-del-icon">{del.icon}</div>
                <h4 className="td-del-title">{del.title}</h4>
              </div>
              <p className="td-del-desc">{del.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="td-cta">
        <p className="td-section-label" style={{ color: 'var(--orange)' }}>Ready to Proceed?</p>
        <h2 className="td-section-title">Start Testing Your Product Today</h2>
        <p className="td-section-sub">Send us your design files and we'll respond with a testing plan and quote within 24 hours.</p>
        <div className="td-cta-buttons">
          <button className="td-btn-primary">Submit Test Request</button>
          <button className="td-btn-ghost">Download Capabilities Deck</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}