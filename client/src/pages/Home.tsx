/** Luminous Systems Atelier: pearl space, charcoal editorial contrast, Aurelis Gold depth, asymmetric plates, and calm pointer-responsive layers. */
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleDot, MoveUpRight, Sparkles } from "lucide-react";
import { PointerEvent, useRef } from "react";
import DepthText from "@/components/DepthText";
import FallingText from "@/components/FallingText";
import TextPressure from "@/components/TextPressure";
import { orbitalMark } from "@/lib/brand";
import { guardianEmbedded } from "@/lib/guardianEmbedded";

const SERVICES = [
  {
    number: "01",
    title: "Business websites",
    text: "Clear, fast websites that make your offer easy to understand and your next conversation easy to start.",
    tag: "Built for clarity",
  },
  {
    number: "02",
    title: "Online presence",
    text: "A professional digital home that makes your business easier to find, trust, and remember.",
    tag: "Made to be found",
  },
  {
    number: "03",
    title: "Growth-ready foundations",
    text: "A considered, responsive baseline that supports your next stage without adding unnecessary complexity.",
    tag: "Ready to evolve",
  },
];

const PROCESS = [
  ["01", "Start with the people using it", "We identify what visitors need to understand before they can choose you."],
  ["02", "Make the useful path obvious", "Pages, messages, and actions are arranged around the next honest step."],
  ["03", "Keep the technical side dependable", "Responsive, practical foundations make room for your business to keep moving."],
  ["04", "Improve the small details that add up", "Spacing, rhythm, performance, and language are refined until the experience feels inevitable."],
];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="section-label" aria-label={`${index} ${label}`}>
      <span>{index}</span>
      <i />
      <strong>{label}</strong>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  const updateHeroField = (event: PointerEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    hero.style.setProperty("--pointer-left", `${x * 100}%`);
    hero.style.setProperty("--pointer-top", `${y * 100}%`);
    hero.style.setProperty("--pointer-opacity", "1");
    hero.style.setProperty("--ring-x", `${(x - 0.5) * 18}px`);
    hero.style.setProperty("--ring-y", `${(y - 0.5) * 12}px`);
    hero.style.setProperty("--art-x", `${(x - 0.5) * -24}px`);
    hero.style.setProperty("--art-y", `${(y - 0.5) * -16}px`);
    hero.style.setProperty("--card-x", `${(x - 0.5) * -10}px`);
    hero.style.setProperty("--card-y", `${(y - 0.5) * -8}px`);
  };

  const resetHeroField = () => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--pointer-opacity", "0");
    hero.style.setProperty("--ring-x", "0px");
    hero.style.setProperty("--ring-y", "0px");
    hero.style.setProperty("--art-x", "0px");
    hero.style.setProperty("--art-y", "0px");
    hero.style.setProperty("--card-x", "0px");
    hero.style.setProperty("--card-y", "0px");
  };

  return (
    <main className="site-shell">
      <section
        className="hero"
        id="top"
        ref={heroRef}
        onPointerMove={updateHeroField}
        onPointerLeave={resetHeroField}
      >
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__rings hero__rings--outer" aria-hidden="true" />
        <div className="hero__rings hero__rings--inner" aria-hidden="true" />
        <div className="hero__pointer-bloom" aria-hidden="true" />
        <img
          className="hero__guardian"
          src={guardianEmbedded}
          alt="A celestial guardian in pearl-white drapery, crowned in gold and framed by feathered wings"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />

        <header className="site-nav">
          <a className="brand" href="#top" aria-label="Ayash Dev home">
            <img src={orbitalMark} alt="" className="brand__mark" />
            <span>AYASH<span className="brand__slash">/</span>DEV</span>
          </a>
          <nav className="site-nav__links" aria-label="Primary navigation">
            <a href="#services">How I help</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button--light site-nav__cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </header>

        <div className="hero__layout">
          <div className="hero__copy">
            <div className="eyebrow reveal-one"><span /> Website developer · India</div>
            <h1 className="hero__title reveal-two">
              Websites that help your business <em>move forward.</em>
            </h1>
            <p className="hero__lead reveal-three">
              I&apos;m Ayash, a developer who builds clear, modern websites that help businesses look professional, reach more people, and grow online.
            </p>
            <div className="hero__actions reveal-four">
              <a className="button button--dark" href="#contact">Start a project <ArrowUpRight size={18} strokeWidth={1.8} /></a>
              <a className="text-link" href="#services">See how I help <ArrowDownRight size={17} strokeWidth={1.6} /></a>
            </div>
            <div className="hero__micro reveal-four"><CircleDot size={13} /> Thoughtful design. Dependable build.</div>
          </div>

          <div className="hero__stage" aria-label="Interactive visual field">
            <div className="hero__stage-disc hero__stage-disc--one" aria-hidden="true" />
            <div className="hero__stage-disc hero__stage-disc--two" aria-hidden="true" />
            <div className="hero__quote-card">
              <span className="quote-card__topline">Private by design</span>
              <DepthText
                text="Forward."
                layers={18}
                depth={1.2}
                faceColor="#242521"
                depthColor="#b28a50"
                tilt={5}
                pointerTracking
                smoothing={0.12}
                perspective={760}
                autoOrbit
                orbitSpeed={0.13}
                fontSize="clamp(2.1rem, 4.5vw, 4rem)"
                shadow={false}
              />
              <p>One clear direction. A website designed to move your business forward.</p>
              <div className="quote-card__rule" />
              <span className="quote-card__index">01 — 03</span>
            </div>
            <div className="hero__mark-card" aria-hidden="true">
              <img src={orbitalMark} alt="" />
            </div>
          </div>
        </div>

        <a className="hero__scroll" href="#services">Scroll to explore <span /></a>
      </section>

      <section className="statement section-shell" id="services">
        <SectionLabel index="01" label="How I help" />
        <div className="statement__grid">
          <p className="statement__kicker">Made for real life</p>
          <div className="statement__heading-wrap">
            <h2>I build websites that help your business get</h2>
            <FallingText text="seen and chosen" highlightWords={["seen"]} trigger="hover" gravity={0.42} fontSize="clamp(2.9rem, 5.2vw, 6.25rem)" className="statement__gravity" />
          </div>
          <div className="statement__body">
            <p>Your website should do more than sit online. It should explain what you offer, build trust quickly, and make it easy for the right customers to contact you.</p>
            <a href="#contact" className="arrow-link">Tell me what you&apos;re building <ArrowRight size={18} /></a>
          </div>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article className={`service-card service-card--${index + 1}`} key={service.number}>
              {index === 0 && <div className="service-card__line-art" aria-hidden="true"><span /><span /><span /></div>}
              <div className="service-card__header"><span>{service.number}</span><Sparkles size={16} strokeWidth={1.4} /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-card__footer"><span>{service.tag}</span><ArrowUpRight size={18} /></div>
            </article>
          ))}
        </div>
        <div className="pressure-panel">
          <div className="pressure-panel__meta"><span>Pointer pressure</span><i /> <span>Move across the letters</span></div>
          <TextPressure text="Seen & Chosen" stroke strokeColor="#b28a50" textColor="#262620" alpha minFontSize={30} className="pressure-panel__type" />
        </div>
      </section>

      <section className="process section-shell" id="approach">
        <SectionLabel index="02" label="How we build it" />
        <div className="process__top">
          <div>
            <p className="statement__kicker">From friction to flow</p>
            <h2>Your website should make it easier to <em>say yes.</em></h2>
          </div>
          <p>Whether you are starting a new business or improving an existing one, the process starts with your offer, your audience, and what growth means in practice.</p>
        </div>
        <div className="process__grid">
          <figure className="process__image-wrap">
            <div className="process__diagram" role="img" aria-label="An abstract process lens with concentric design rings and editorial layout blocks">
              <span className="process__diagram-ring process__diagram-ring--one" />
              <span className="process__diagram-ring process__diagram-ring--two" />
              <span className="process__diagram-lens" />
              <span className="process__diagram-rule process__diagram-rule--one" />
              <span className="process__diagram-rule process__diagram-rule--two" />
              <span className="process__diagram-dot" />
              <span className="process__diagram-label">Focus / form / forward</span>
            </div>
            <figcaption>Focus the signal. Shape the system.</figcaption>
          </figure>
          <ol className="process-list">
            {PROCESS.map(([number, title, detail]) => (
              <li key={number}>
                <span className="process-list__number">{number}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                <MoveUpRight size={18} strokeWidth={1.4} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="promise section-shell">
        <div className="promise__rule" />
        <p className="statement__kicker">Built to grow</p>
        <blockquote>“Your website should work as hard as you do.”</blockquote>
        <a href="#contact" className="text-link">Talk through an idea <ArrowDownRight size={17} /></a>
      </section>

      <section className="contact" id="contact">
        <div className="contact__art" aria-hidden="true" />
        <div className="contact__overlay" />
        <div className="contact__inner section-shell">
          <SectionLabel index="03" label="A good place to begin" />
          <div className="contact__content">
            <p className="statement__kicker">Ready to grow your business online?</p>
            <h2>Let&apos;s make your next move <em>clear.</em></h2>
            <p className="contact__lead">Message me about the website you need. We can turn your idea into a professional online presence that brings your business forward.</p>
            <div className="contact__actions">
              <a className="button button--gold" href="mailto:bhadouriayash876@gmail.com?subject=Website%20project%20enquiry">Start the conversation <ArrowUpRight size={18} /></a>
              <a className="contact__email" href="mailto:bhadouriayash876@gmail.com">bhadouriayash876@gmail.com</a>
            </div>
          </div>
          <footer className="site-footer">
            <a className="brand brand--footer" href="#top"><img src={orbitalMark} alt="" className="brand__mark" /><span>AYASH<span className="brand__slash">/</span>DEV</span></a>
            <p>Websites built for businesses that want to grow.</p>
            <a href="#top" className="footer-top">Back to top <ArrowUpRight size={15} /></a>
          </footer>
        </div>
      </section>
    </main>
  );
}
