import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --orange: #FF5C00;
    --orange-glow: rgba(255,92,0,0.2);
    --orange-pale: #FFF3EC;
    --black: #080808;
    --near-black: #111;
    --gray-mid: #5A5A5A;
    --gray-light: #999;
    --gray-bg: #F6F6F4;
    --white: #FFFFFF;
    --line: #EBEBEB;
  }

  .molds-page {
    font-family: 'DM Sans', sans-serif;
    color: var(--black);
    background: var(--white);
    overflow-x: hidden;
  }

  /* ── HERO: Split — text left, large 3D render right ── */
  .m-hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 45% 55%;
    background: var(--white);
    overflow: hidden;
  }

  .m-hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(3rem, 6vw, 7rem) clamp(2rem, 5vw, 6rem);
    border-right: 1px solid var(--line);
    position: relative;
    z-index: 1;
  }

  .m-service-label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .m-service-label::after {
    content: '';
    display: block;
    flex: 1;
    height: 1px;
    background: var(--orange);
    max-width: 40px;
  }

  .m-hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.8rem, 5vw, 5rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 2rem;
  }

  .m-hero-title .orange { color: var(--orange); }
  .m-hero-title .light { font-weight: 300; color: var(--gray-mid); }

  .m-hero-desc {
    color: var(--gray-mid);
    font-size: clamp(0.9rem, 1.3vw, 1rem);
    line-height: 1.9;
    max-width: 400px;
    margin-bottom: 3rem;
  }

  .m-hero-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .m-tag {
    background: var(--gray-bg);
    color: var(--gray-mid);
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    border: 1px solid var(--line);
    transition: all 0.3s;
    cursor: default;
  }

  .m-tag:hover { background: var(--orange); color: var(--white); border-color: var(--orange); }

  .m-hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-dark {
    background: var(--black);
    color: var(--white);
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.88rem;
    padding: 0.85rem 1.75rem;
    cursor: pointer;
    transition: background 0.3s;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .btn-dark:hover { background: var(--orange); }

  .btn-line {
    background: transparent;
    color: var(--black);
    border: 1.5px solid var(--line);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.88rem;
    padding: 0.85rem 1.75rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  .btn-line:hover { border-color: var(--black); }

  .m-hero-right {
    position: relative;
    overflow: hidden;
    background: var(--gray-bg);
  }

  .m-hero-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 10s ease;
    transform: scale(1.05);
  }

  .m-hero-right:hover img { transform: scale(1); }

  .m-hero-badge-stack {
    position: absolute;
    bottom: 2.5rem;
    left: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .m-badge {
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.5);
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }

  .m-badge-icon {
    font-size: 1.4rem;
  }

  .m-badge strong {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    line-height: 1;
    margin-bottom: 0.15rem;
  }

  .m-badge span {
    font-size: 0.72rem;
    color: var(--gray-mid);
  }

  /* ── SCROLL STRIP ── */
  .m-strip {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 0.75rem 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .m-strip-inner {
    display: inline-flex;
    animation: mStrip 22s linear infinite;
  }

  .m-strip-item {
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--black);
    padding: 0 2rem;
    opacity: 0.4;
    transition: opacity 0.3s;
  }

  .m-strip-item.accent {
    color: var(--orange);
    opacity: 1;
  }

  /* ── WHAT WE DO ── */
  .m-what {
    padding: clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem);
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 6rem;
    align-items: start;
  }

  .m-what-left {
    position: sticky;
    top: 4rem;
  }

  .section-eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 1rem;
  }

  .m-what-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .m-what-body {
    color: var(--gray-mid);
    font-size: 0.97rem;
    line-height: 1.9;
    margin-bottom: 2rem;
  }

  .m-what-right {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: var(--line);
  }

  .m-feature {
    background: var(--white);
    padding: 2rem 2.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: start;
    transition: background 0.3s;
    cursor: default;
  }

  .m-feature:hover { background: var(--orange-pale); }

  .m-feature-num {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--orange);
    padding-top: 0.35rem;
    letter-spacing: 0.05em;
  }

  .m-feature h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  .m-feature p {
    color: var(--gray-mid);
    font-size: 0.87rem;
    line-height: 1.75;
  }

  /* ── IMAGE INTERLUDE ── */
  .m-interlude {
    position: relative;
    height: clamp(350px, 45vw, 560px);
    overflow: hidden;
  }

  .m-interlude img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.65) saturate(0.85);
  }

  .m-interlude-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(8,8,8,0.65) 0%,
      transparent 60%
    );
  }

  .m-interlude-content {
    position: absolute;
    top: 50%;
    left: clamp(2rem, 7vw, 8rem);
    transform: translateY(-50%);
    max-width: 480px;
  }

  .m-interlude-content h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .m-interlude-content h2 em {
    font-style: normal;
    color: var(--orange);
  }

  .m-interlude-content p {
    color: rgba(255,255,255,0.65);
    font-size: 0.95rem;
    line-height: 1.8;
  }

  /* ── PROJECT SHOWCASE ── */
  .m-showcase {
    padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 6rem);
    background: var(--near-black);
  }

  .m-showcase-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3.5rem;
    align-items: end;
  }

  .m-showcase-head h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    color: var(--white);
  }

  .m-showcase-head p {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.8;
  }

  .m-project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2px;
    background: #222;
  }

  .m-project {
    background: var(--near-black);
    overflow: hidden;
    cursor: default;
    position: relative;
  }

  .m-project-img {
    height: 220px;
    overflow: hidden;
  }

  .m-project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.8) brightness(0.85);
    transition: transform 0.6s ease, filter 0.4s ease;
  }

  .m-project:hover .m-project-img img {
    transform: scale(1.08);
    filter: saturate(1) brightness(1);
  }

  .m-project-info {
    padding: 1.75rem;
    border-top: 2px solid #222;
    transition: border-color 0.3s;
  }

  .m-project:hover .m-project-info { border-color: var(--orange); }

  .m-project-cat {
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 0.4rem;
  }

  .m-project-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: var(--white);
    margin-bottom: 0.3rem;
  }

  .m-project-detail {
    font-size: 0.8rem;
    color: #555;
  }

  .m-project-arrow {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 0.9rem;
    opacity: 0;
    transform: translateY(5px);
    transition: all 0.3s;
  }

  .m-project:hover .m-project-arrow { opacity: 1; transform: translateY(0); }

  /* ── PROCESS ── */
  .m-process {
    padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 6rem);
    background: var(--gray-bg);
  }

  .m-process-head {
    text-align: center;
    margin-bottom: 4rem;
  }

  .m-process-head h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    margin-top: 0.5rem;
  }

  .m-process-flow {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2px;
    background: var(--line);
  }

  .m-flow-step {
    background: var(--white);
    padding: 2.5rem 2rem;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
  }

  .m-flow-step:hover { background: var(--orange); }

  .m-flow-bg-num {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 6rem;
    font-weight: 900;
    color: rgba(0,0,0,0.04);
    line-height: 1;
    transition: color 0.3s;
  }

  .m-flow-step:hover .m-flow-bg-num { color: rgba(255,255,255,0.1); }

  .m-flow-icon {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    position: relative;
    z-index: 1;
  }

  .m-flow-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
    transition: color 0.3s;
  }

  .m-flow-step:hover .m-flow-title { color: var(--white); }

  .m-flow-desc {
    font-size: 0.83rem;
    color: var(--gray-mid);
    line-height: 1.7;
    position: relative;
    z-index: 1;
    transition: color 0.3s;
  }

  .m-flow-step:hover .m-flow-desc { color: rgba(255,255,255,0.8); }

  /* ── MATERIALS ── */
  .m-materials {
    padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 6rem);
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 5rem;
    align-items: center;
  }

  .m-mat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--line);
  }

  .m-mat-cell {
    background: var(--white);
    padding: 1.75rem;
    transition: background 0.3s;
    cursor: default;
  }

  .m-mat-cell:hover { background: var(--orange-pale); }

  .m-mat-icon {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    display: block;
  }

  .m-mat-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }

  .m-mat-props {
    font-size: 0.78rem;
    color: var(--gray-light);
    line-height: 1.5;
  }

  .m-mat-right h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.25rem;
  }

  .m-mat-right p {
    color: var(--gray-mid);
    font-size: 0.95rem;
    line-height: 1.9;
    margin-bottom: 2rem;
  }

  /* ── CTA ── */
  .m-cta {
    padding: clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 6rem);
    text-align: center;
    position: relative;
    overflow: hidden;
    background: var(--white);
  }

  .m-cta::before {
    content: '';
    position: absolute;
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,92,0,0.07) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .m-cta-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .m-cta-eyebrow::before, .m-cta-eyebrow::after {
    content: '';
    display: block;
    width: 3rem;
    height: 1px;
    background: var(--orange);
  }

  .m-cta-eyebrow span {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
  }

  .m-cta h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
    position: relative;
  }

  .m-cta p {
    color: var(--gray-mid);
    font-size: clamp(0.95rem, 1.3vw, 1.05rem);
    max-width: 480px;
    margin: 0 auto 3rem;
    line-height: 1.9;
    position: relative;
  }

  .m-cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }

  /* ── ANIMATIONS ── */
  @keyframes mStrip {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1000px) {
    .m-hero { grid-template-columns: 1fr; }
    .m-hero-left { min-height: 80vh; border-right: none; border-bottom: 1px solid var(--line); }
    .m-hero-right { height: 55vw; min-height: 300px; }
    .m-badge-stack { bottom: 1rem; left: 1rem; }
    .m-what { grid-template-columns: 1fr; gap: 3rem; }
    .m-what-left { position: static; }
    .m-showcase-head { grid-template-columns: 1fr; }
    .m-materials { grid-template-columns: 1fr; gap: 3rem; }
    .m-mat-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 600px) {
    .m-hero-title { font-size: clamp(2.5rem, 10vw, 3.5rem); }
    .m-mat-grid { grid-template-columns: 1fr; }
    .m-process-flow { grid-template-columns: 1fr 1fr; }
    .m-badge-stack { display: none; }
  }
`;

const features = [
  { title: "Rapid Prototype Tooling", desc: "Skip traditional steel tooling lead times. Get functional injection mould inserts in days, not weeks, for prototype and short-run production." },
  { title: "Complex Geometries", desc: "3D printing enables conformal cooling channels, undercuts, and internal features that are impossible or prohibitively expensive in CNC machining." },
  { title: "Low-Volume Production", desc: "For runs of 10–10,000 parts, 3D printed moulds deliver cost parity or better versus aluminium tooling — with faster iteration cycles." },
  { title: "Material Versatility", desc: "Our mould portfolio spans standard PP/PE/ABS-compatible tooling resins up to high-temperature grades for PC, Nylon, and glass-filled materials." },
];

const projects = [
  { cat: "Automotive", name: "Interior Panel Inserts", detail: "ABS, 500 shots", img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=600&q=80" },
  { cat: "Medical", name: "Device Housing Prototype", detail: "PP, 100 shots", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80" },
  { cat: "Consumer Goods", name: "Packaging Closures", detail: "HDPE, 2,000 shots", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { cat: "Electronics", name: "Connector Housing", detail: "Nylon PA66, 300 shots", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
];

const flowSteps = [
  { icon: "📐", title: "Design Review", desc: "We analyse your CAD file for mouldability — draft angles, wall thickness, gate location, and ejection strategy." },
  { icon: "🖨️", title: "3D Printing", desc: "Mould inserts are printed in engineering-grade photopolymer or high-temp resin using industrial SLA/MSLA printers." },
  { icon: "🔧", title: "Post-Processing", desc: "Support removal, sanding, and surface finishing to achieve Ra values required for part surface quality." },
  { icon: "💉", title: "Trial Injection", desc: "First shots are run on our in-house injection moulding machine to validate part quality and mould performance." },
  { icon: "✅", title: "Approval & Dispatch", desc: "First article parts delivered to you for approval. Moulds shipped or retained for production runs." },
];

const moldMaterials = [
  { icon: "🔬", name: "Photopolymer Resin", props: "Standard / Low-cost tooling" },
  { icon: "🧪", name: "High-Temp Resin", props: "PC, Nylon compatible" },
  { icon: "⚡", name: "Digital ABS", props: "ABS-like properties" },
  { icon: "🛡️", name: "Tough 2000", props: "Glass-filled materials" },
];

export default function ThreeDMoldsPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="molds-page">

        {/* HERO */}
        <section className="m-hero">
          <div className="m-hero-left">
            <div className="m-service-label">3D Printed Mould Tooling</div>
            <h1 className="m-hero-title">
              Production<br />
              Tooling,<br />
              <span className="light">Done</span><br />
              <span className="orange">Faster.</span>
            </h1>
            <p className="m-hero-desc">
              High-precision 3D printed injection mould inserts that cut your tooling lead time from months to days — without sacrificing part quality or production capability.
            </p>
            <div className="m-hero-tags">
              {["SLA Tooling", "Short-Run", "Rapid Prototype", "Conformal Cooling", "Complex Geometry"].map((t) => (
                <span className="m-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="m-hero-actions">
              <button className="btn-dark">Upload Your CAD →</button>
              <button className="btn-line">See Case Studies</button>
            </div>
          </div>

          <div className="m-hero-right">
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
              alt="3D printed mold"
            />
            <div className="m-hero-badge-stack">
              <div className="m-badge">
                <span className="m-badge-icon">⏱️</span>
                <div>
                  <strong>3–5 Days</strong>
                  <span>Tooling lead time</span>
                </div>
              </div>
              <div className="m-badge">
                <span className="m-badge-icon">🎯</span>
                <div>
                  <strong>±0.1mm</strong>
                  <span>Dimensional accuracy</span>
                </div>
              </div>
              <div className="m-badge">
                <span className="m-badge-icon">🔁</span>
                <div>
                  <strong>10k+ Shots</strong>
                  <span>Mould life rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <div className="m-strip">
          <div className="m-strip-inner">
            {[...Array(2)].map((_, i) =>
              ["SLA Tooling", "•", "Injection Moulding", "•", "Conformal Cooling", "•", "Prototype Tooling", "•", "Short-Run Production", "•", "Complex Geometry", "•"].map((t, j) => (
                <span className={`m-strip-item${t === "•" ? " accent" : ""}`} key={`${i}-${j}`}>{t}</span>
              ))
            )}
          </div>
        </div>

        {/* WHAT WE DO */}
        <section className="m-what">
          <div className="m-what-left">
            <div className="section-eyebrow">What We Offer</div>
            <h2 className="m-what-title">Injection Moulding Without Traditional Tooling Costs</h2>
            <p className="m-what-body">
              Traditional steel moulds can cost £5,000–£50,000 and take 8–16 weeks. Our 3D printed mould inserts deliver injection-moulded parts in days at a fraction of the cost — making low-volume production and rapid iteration finally accessible.
            </p>
            <button className="btn-dark" style={{ marginTop: "0.5rem" }}>Get an Instant Quote →</button>
          </div>
          <div className="m-what-right">
            {features.map((f, i) => (
              <div className="m-feature" key={f.title}>
                <div className="m-feature-num">0{i + 1}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERLUDE IMAGE */}
        <div className="m-interlude">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
            alt="3D printing process"
          />
          <div className="m-interlude-overlay" />
          <div className="m-interlude-content">
            <h2>Iterate fast.<br /><em>Manufacture</em> confidently.</h2>
            <p>
              Our process bridges the gap between prototyping and production — giving you real injection-moulded parts during your design validation phase.
            </p>
          </div>
        </div>

        {/* PROJECT SHOWCASE */}
        <section className="m-showcase">
          <div className="m-showcase-head">
            <h2>Project Showcase</h2>
            <p>A selection of 3D printed mould projects delivered across automotive, medical, electronics, and consumer goods sectors.</p>
          </div>
          <div className="m-project-grid">
            {projects.map((p) => (
              <div className="m-project" key={p.name}>
                <div className="m-project-img">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="m-project-info">
                  <div className="m-project-cat">{p.cat}</div>
                  <div className="m-project-name">{p.name}</div>
                  <div className="m-project-detail">{p.detail}</div>
                </div>
                <div className="m-project-arrow">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="m-process">
          <div className="m-process-head">
            <div className="section-eyebrow">Our Workflow</div>
            <h2>From CAD to Moulded Part in 5 Steps</h2>
          </div>
          <div className="m-process-flow">
            {flowSteps.map((s, i) => (
              <div className="m-flow-step" key={s.title}>
                <div className="m-flow-bg-num">0{i + 1}</div>
                <div className="m-flow-icon">{s.icon}</div>
                <div className="m-flow-title">{s.title}</div>
                <div className="m-flow-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MATERIALS */}
        <section className="m-materials">
          <div>
            <div className="m-mat-grid">
              {moldMaterials.map((m) => (
                <div className="m-mat-cell" key={m.name}>
                  <span className="m-mat-icon">{m.icon}</span>
                  <div className="m-mat-name">{m.name}</div>
                  <div className="m-mat-props">{m.props}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="m-mat-right">
            <div className="section-eyebrow">Mould Materials</div>
            <h2>The Right Resin for Every Application</h2>
            <p>
              Not all injection materials are equal — and neither are mould resins. We match the tooling material to your production polymer, shot count requirements, and temperature demands to ensure mould longevity and part accuracy.
            </p>
            <button className="btn-dark">Talk to Our Engineers →</button>
          </div>
        </section>

        {/* CTA */}
        <section className="m-cta">
          <div className="m-cta-eyebrow"><span>Start Your Project</span></div>
          <h2>Ready to Slash Your<br />Tooling Lead Time?</h2>
          <p>Upload your CAD file and receive a detailed tooling assessment, design feedback, and quote within one business day.</p>
          <div className="m-cta-buttons">
            <button className="btn-dark" style={{ fontSize: "0.95rem", padding: "1rem 2.25rem" }}>Upload CAD File →</button>
            <button className="btn-line" style={{ fontSize: "0.95rem", padding: "1rem 2.25rem" }}>Talk to an Engineer</button>
          </div>
        </section>

      </div>
    </>
  );
}