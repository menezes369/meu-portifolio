const { useMemo, useState } = React;

/* ====== CONTEÚDO (edite aqui) ====== */
const NAME = "Menezes";
const WHATSAPP_NUMBER = "5518996241216"; // 55 (Brasil) + 18 99624-1216
const WHATSAPP_MSG = "olá";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const INSTAGRAM_URL = "https://www.instagram.com/menezssz_/";

const TECH = [
  { label: "Premiere Pro", cls: "t1" },
  { label: "After Effects", cls: "t2" },
  { label: "DaVinci Resolve", cls: "t3" },
  { label: "CapCut", cls: "t4" },
  { label: "Photoshop", cls: "t5" },
  { label: "Final Cut", cls: "t6" },
  { label: "Motion", cls: "t7" },
];

const TABS = [
  { id: "sfx", icon: "wave", title: "SFX UX/UI", desc: "Sons de interface e efeitos sonoros sincronizados com a imagem: cliques, transições e whooshes que deixam o vídeo mais vivo e profissional." },
  { id: "curtos", icon: "play", title: "Edição de vídeos curtos", desc: "Reels, TikTok e Shorts com cortes rápidos, legendas dinâmicas e ritmo pensado para segurar a atenção desde os primeiros segundos." },
  { id: "anuncios", icon: "spark", title: "Anúncios para VSL ou criativos", desc: "Vídeos de vendas (VSL) e criativos para tráfego pago, editados para prender o público e levar até a ação." },
];

/* Coloque os arquivos video1.mp4 ... video4.mp4 na mesma pasta deste arquivo */
const PROJECTS = [
  { title: "Projeto 1", src: "video1.mp4" },
  { title: "Projeto 2", src: "video2.mp4" },
  { title: "Projeto 3", src: "video3.mp4" },
  { title: "Projeto 4", src: "video4.mp4" },
];

/* ====== ÍCONES ====== */
const I = ({ name, size = 18 }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const d = {
    doc: <><rect x="4" y="3.5" width="16" height="17" rx="3" /><path d="M8 9h8M8 13h8M8 17h4" /></>,
    frame: <><path d="M4 9V6a2 2 0 0 1 2-2h3M15 4h3a2 2 0 0 1 2 2v3M20 15v3a2 2 0 0 1-2 2h-3M9 20H6a2 2 0 0 1-2-2v-3" /></>,
    check: <><path d="M20 12a8 8 0 1 1-4.5-7.2" /><path d="M8.5 12.2l2.6 2.6L20 6" /></>,
    bolt: <path d="M13 3L5 13.5h6L10 21l8-10.5h-6z" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    spark: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 17v4M17 19h4" /></>,
    wave: <path d="M3 12h2M7.5 8v8M12 4.5v15M16.5 8v8M21 11v2" />,
    play: <path d="M8 5.5v13l11-6.5z" />,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" /></>,
    github: <path d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.7 5.5 3 5.5 3a4.4 4.4 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 9.5c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 0 0-.8 2.2V21" />,
  };
  return <svg {...p}>{d[name]}</svg>;
};

const WhatsIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41" />
  </svg>
);

/* Foto de perfil: se perfil.png não for encontrado, mostra a inicial */
function Avatar() {
  const [ok, setOk] = useState(true);
  return ok ? (
    <img className="avatar" src="perfil.png" alt={NAME} onError={() => setOk(false)} />
  ) : (
    <div className="avatar avatar-fallback">{NAME[0]}</div>
  );
}

/* Vídeo: se o arquivo não for encontrado, mostra um aviso no lugar */
function VideoBox({ src }) {
  const [err, setErr] = useState(false);
  return (
    <div className="video-frame">
      {err ? (
        <div className="video-empty"><I name="play" size={28} /><span>Vídeo em breve</span></div>
      ) : (
        <video src={src} controls playsInline preload="metadata" onError={() => setErr(true)} />
      )}
    </div>
  );
}

/* Linha de ferramentas que anda sozinha (loop infinito) */
function Marquee({ items, reverse }) {
  const row = [...items, ...items]; // um "conjunto" largo
  return (
    <div className={`marquee ${reverse ? "rev" : ""}`}>
      <div className="marquee-track">
        {[...row, ...row].map((t, i) => (
          <span key={i} className={`tech ${t.cls}`}>{t.label}</span>
        ))}
      </div>
    </div>
  );
}

const Logo = () => <span className="logo" aria-label={NAME} />;

/* ====== ESTRELAS ====== */
function Stars({ count = 40 }) {
  const stars = useMemo(
    () => Array.from({ length: count }, () => ({ x: Math.random() * 100, y: Math.random() * 100, s: Math.random() * 1.6 + 0.6, o: Math.random() * 0.6 + 0.2 })),
    [count]
  );
  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s, i) => (
        <i key={i} style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, opacity: s.o }} />
      ))}
    </div>
  );
}

function App() {
  const [tab, setTab] = useState(null);
  const active = TABS.find((t) => t.id === tab);

  return (
    <div className="page">
      <style>{`
        :root {
          --bg: #0f1729; --purple: #a855f7; --purple-2: #7c3aed;
          --text: #e9e8f5; --muted: #9aa3bd; --line: rgba(168, 130, 255, 0.28);
          --font: system-ui, sans-serif;
          /* Cantos arredondados das seções. 0px = sem borda (padrão). Ex.: 120px para voltar ao canto do modelo */
          --corner: 0px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: var(--bg); }
        body { background: var(--bg); color: var(--text); font-family: var(--font); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; }
        .page { position: relative; overflow: hidden; background: var(--bg); }

        .stars { position: absolute; inset: 0; pointer-events: none; }
        .stars i { position: absolute; border-radius: 50%; background: #cfc6ff; }
        .muted { color: var(--muted); line-height: 1.65; font-size: 15px; }
        .center { text-align: center; margin-inline: auto; }
        .narrow { max-width: 560px; }

        .grad-title, .grad-h2 {
          color: #cfc9ea;
          background: linear-gradient(180deg, #f1f0fb 0%, #a9a4c8 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.03em; font-weight: 700;
        }
        .grad-title { font-size: clamp(34px, 6.6vw, 54px); line-height: 1.1; }
        .grad-h2 { font-size: clamp(26px, 4.4vw, 36px); line-height: 1.2; }

        /* ---------- HERO ---------- */
        .hero {
          position: relative; min-height: 640px; overflow: hidden;
          border-bottom-right-radius: var(--corner);
          background:
            radial-gradient(ellipse 70% 55% at 50% 105%, rgba(190,110,255,.95) 0%, rgba(124,58,237,.55) 35%, transparent 70%),
            radial-gradient(ellipse 120% 90% at 50% 100%, #3b1b7a 0%, #1a1440 45%, var(--bg) 80%);
        }
        /* dissolve a base do hero no fundo, sem linha dura */
        .hero::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 110px; z-index: 2; pointer-events: none;
          background: linear-gradient(180deg, rgba(15,23,41,0), var(--bg));
        }
        .beam {
          position: absolute; top: -10%; left: 12%; width: 55%; height: 80%;
          background: linear-gradient(160deg, rgba(120,110,255,.65), rgba(90,70,220,.15) 55%, transparent 75%);
          clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%);
          filter: blur(26px); transform: rotate(14deg); opacity: .8;
        }
        .glow-orb {
          position: absolute; left: 50%; bottom: -120px; width: 520px; height: 300px; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(255,255,255,.85) 0%, rgba(214,160,255,.7) 28%, transparent 70%);
          filter: blur(36px);
        }
        .nav { position: relative; z-index: 3; display: flex; justify-content: space-between; align-items: center; max-width: 1080px; margin: 0 auto; padding: 22px 24px; }
        .logo { width: 24px; height: 24px; border-radius: 50%; border: 4px solid #fff; border-right-color: var(--purple); border-bottom-color: #7c6cff; box-shadow: 0 0 14px rgba(168,85,247,.8); display: inline-block; }
        .nav-actions { display: flex; align-items: center; gap: 22px; font-size: 12px; }
        .link { color: #dcd8f5; }
        .pill-outline { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 999px; border: 1px solid var(--line); background: rgba(80,60,160,.22); }

        .hero-inner { position: relative; z-index: 3; max-width: 680px; margin: 0 auto; padding: 40px 24px 150px; text-align: center; display: flex; flex-direction: column; align-items: center; }
        .badge { display: inline-flex; align-items: center; gap: 7px; padding: 6px 14px; margin-bottom: 22px; border-radius: 999px; font-size: 11px; color: #e4defc; border: 1px solid rgba(190,150,255,.55); background: rgba(124,58,237,.25); box-shadow: 0 0 22px rgba(168,85,247,.35), inset 0 0 12px rgba(168,85,247,.25); }
        .hero-sub { margin-top: 18px; max-width: 470px; color: #b7bbd6; font-size: 14px; line-height: 1.6; }
        .hero-cta { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 26px; }
        .btn-white, .btn-glass { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 999px; font-size: 12px; font-weight: 500; }
        .btn-white { background: #f4f2ff; color: #1a1535; }
        .btn-glass { color: #e6e1ff; background: rgba(150,110,240,.32); border: 1px solid rgba(200,170,255,.25); }


        /* ---------- PERFIL / BOTÕES ---------- */
        .avatar-wrap { margin-bottom: 22px; padding: 4px; border-radius: 50%; background: linear-gradient(160deg, #c084fc, #7c6cff 60%, #3b1b7a); box-shadow: 0 0 40px rgba(168,85,247,.55), 0 0 90px rgba(124,58,237,.35); }
        .avatar { display: block; width: 124px; height: 124px; border-radius: 50%; object-fit: cover; object-position: center 20%; background: #1a1440; border: 3px solid var(--bg); }
        .role { margin-top: 10px; font-size: 14px; letter-spacing: .02em; color: #c4b5fd; }
        .cta-col { flex-direction: column; align-items: stretch; width: min(100%, 260px); margin-left: auto; margin-right: auto; }
        .cta-col a { justify-content: center; padding: 13px 20px; font-size: 13px; }

        .avatar-fallback { display: grid; place-items: center; font-size: 48px; font-weight: 700; color: #e9e8f5; }
        .video-empty { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; font-size: 13px; color: #8f98b8; }

        /* ---------- VÍDEOS ---------- */
        .video-frame { --ratio: 16 / 9; aspect-ratio: var(--ratio); background: #05070f; }
        .video-frame video { display: block; width: 100%; height: 100%; object-fit: contain; background: #05070f; }

        /* ---------- TECNOLOGIAS ---------- */
        .logos { padding: 34px 0; background: var(--bg); border-top: 1px solid rgba(168,130,255,.14); border-bottom: 1px solid rgba(168,130,255,.14); display: flex; flex-direction: column; gap: 22px; }
        .tech { display: inline-flex; align-items: center; font-size: 22px; color: #d9d6ee; opacity: .85; white-space: nowrap; margin-right: 52px; }
        .tech::after { content: ""; width: 5px; height: 5px; margin-left: 52px; border-radius: 50%; background: #8b7cff; box-shadow: 0 0 10px rgba(168,85,247,.8); }
        .marquee { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
        .marquee-track { display: flex; width: max-content; animation: marquee-left 38s linear infinite; }
        .marquee.rev .marquee-track { animation-name: marquee-right; }
        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
        .tab-desc { margin-top: 14px; max-width: 400px; font-size: 14px; animation: fadeIn .25s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        .t1 { font-weight: 700; } .t2 { font-weight: 800; } .t3 { font-style: italic; } .t4 { font-weight: 600; } .t5 { font-size: 24px; } .t6 { font-weight: 700; } .t7 { font-style: italic; font-size: 22px; }

        /* ---------- FEATURE ---------- */
        .feature { position: relative; padding: 110px 24px 100px; background: radial-gradient(ellipse 60% 55% at 40% 0%, rgba(168,85,247,.55), rgba(60,40,140,.35) 45%, transparent 75%); }
        /* dissolve o topo da seção, sem linha dura */
        .feature::before {
          content: ""; position: absolute; top: 0; left: 0; right: 0; height: 120px; z-index: 1; pointer-events: none;
          background: linear-gradient(180deg, var(--bg), rgba(15,23,41,0));
        }
        .feature-glow { position: absolute; top: 0; left: 8%; width: 35%; height: 55%; background: radial-gradient(ellipse, rgba(255,255,255,.35), transparent 70%); filter: blur(40px); }
        .feature-grid { position: relative; z-index: 2; max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; align-items: center; }
        .eyebrow { font-size: 12px; color: #d1cbe8; }
        .eyebrow b { color: #c084fc; font-weight: 500; }
        .feature-text .grad-h2 { margin: 10px 0 14px; max-width: 440px; }
        .feature-text .muted { max-width: 380px; font-size: 14px; }
        .tabs { display: flex; flex-direction: column; gap: 8px; margin-top: 26px; max-width: 320px; }
        .tab { display: flex; align-items: center; gap: 10px; padding: 11px 14px; font-size: 12.5px; color: #7f89a6; background: rgba(15,23,41,.55); border: 1px solid rgba(120,110,200,.18); border-radius: 6px; cursor: pointer; text-align: left; }
        .tab.on { color: #ece8ff; border-color: rgba(168,130,255,.8); background: rgba(40,30,90,.55); box-shadow: 0 0 18px rgba(168,85,247,.3); }

        .visual { position: relative; height: 300px; }
        .grid-lines {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(168,130,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168,130,255,.35) 1px, transparent 1px);
          background-size: 38px 38px;
          -webkit-mask-image: radial-gradient(ellipse at center, #000 25%, transparent 72%);
          mask-image: radial-gradient(ellipse at center, #000 25%, transparent 72%);
        }
        .chip { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(-4deg); width: 52px; height: 52px; display: grid; place-items: center; border-radius: 14px; color: #fff; background: linear-gradient(160deg, #2a2a55, #151a35); border: 1px solid rgba(190,160,255,.45); box-shadow: 0 0 30px rgba(168,85,247,.45); }

        /* ---------- PROJETOS ---------- */
        .projects { position: relative; padding: 70px 24px 40px; }
        .projects .grad-h2 { margin-bottom: 14px; }
        .cards { max-width: 1040px; margin: 54px auto 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr)); gap: 22px; }
        .card { border-radius: 20px; overflow: hidden; border: 1px solid rgba(150,130,230,.22); background: linear-gradient(180deg, rgba(30,36,68,.7), rgba(15,23,41,.9)); }
        .card-img { height: 170px; position: relative; background: radial-gradient(ellipse at 30% 110%, hsl(var(--h) 90% 62%) 0%, hsl(var(--h) 70% 35%) 40%, #15183a 85%); }
        .card-ui { position: absolute; left: 18px; top: 16px; display: flex; gap: 6px; }
        .card-ui i { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.45); display: inline-block; }
        .card-body { padding: 20px 22px 24px; }
        .card-tag { font-size: 11px; color: #c084fc; }
        .card h3 { margin: 0; font-size: 19px; color: #f1f0fb; }
        .card p { font-size: 13.5px; line-height: 1.6; color: var(--muted); }
        .card-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; font-size: 12px; color: #d8ccff; }

        /* ---------- CONTATO ---------- */
        .contact { position: relative; padding: 70px 24px 130px; text-align: center; border-top-left-radius: var(--corner); overflow: hidden;
          background: radial-gradient(ellipse 70% 70% at 50% 110%, rgba(190,110,255,.85) 0%, rgba(124,58,237,.4) 40%, transparent 72%), linear-gradient(180deg, var(--bg), #1a1440); }
        .contact-glow { position: absolute; left: 50%; bottom: -150px; width: 520px; height: 260px; transform: translateX(-50%); background: radial-gradient(ellipse, rgba(255,255,255,.6), transparent 70%); filter: blur(40px); }
        .contact .grad-h2, .contact .muted, .contact .hero-cta { position: relative; z-index: 2; }
        .footer { padding: 26px 24px; text-align: center; font-size: 12px; color: #6f7a99; background: var(--bg); }

        @media (max-width: 760px) {
          .hero { min-height: 560px; }
          .hero-inner { padding: 70px 22px 120px; }
          .feature { padding: 90px 22px 100px; }
          .feature-grid { grid-template-columns: 1fr; }
          .visual { height: 240px; order: -1; }
          .tabs { max-width: 100%; }
          .logos { padding: 26px 0; gap: 16px; }
          .tech { font-size: 18px; }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="beam" />
        <div className="glow-orb" />
        <Stars count={45} />

        <nav className="nav">
          <Logo />
          <div className="nav-actions">
            <a href="#projetos" className="link">Projetos</a>
            <a href="#contato" className="pill-outline">Contato <I name="arrow" size={11} /></a>
          </div>
        </nav>

        <div className="hero-inner">
          <div className="avatar-wrap">
            <Avatar />
          </div>
          <a href="#projetos" className="badge">Disponível para novos projetos <I name="arrow" size={11} /></a>
          <h1 className="grad-title">{NAME}</h1>
          <p className="hero-sub">
            Está procurando por um editor de vídeo? Essa é sua chance perfeita!
          </p>
          <div className="hero-cta cta-col">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-white"><WhatsIcon size={17} /> Vamos conversar</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-glass"><I name="instagram" size={16} /> Instagram</a>
          </div>
        </div>
      </section>

      
{/* ===== TECNOLOGIAS ===== */}
<section className="logos">
  <Marquee items={TECH} />
  <Marquee items={[...TECH].reverse()} reverse />
</section>

{/* ===== PROJETOS ===== */}
<section className="projects" id="projetos">
  <h2 className="grad-h2 center">
    Edições que prendem a atenção.
  </h2>

  <p className="muted center narrow">
    Uma seleção dos meus trabalhos mais recentes, feitos com atenção a cada corte, ritmo e detalhe.
  </p>

  <div className="cards">
    {PROJECTS.map((p) => (
      <article className="card" key={p.src}>
        <VideoBox key={p.src} src={p.src} />
        <div className="card-body">
          <h3>{p.title}</h3>
        </div>
      </article>
    ))}
  </div>
</section>

{/* ===== SOBRE (TABS) ===== */}
<section className="feature">
  <div className="feature-glow" />
  <Stars count={22} />

  <div className="feature-grid">
    <div className="feature-text">
      <p className="eyebrow">
        <b>MEUS SERVIÇOS</b> — O QUE POSSO FAZER
      </p>

      <h2 className="grad-h2">
        Alguns serviços que sei fazer também
      </h2>

      <p className="muted">
        Além da edição tradicional, também trabalho com recursos
        que ajudam a deixar seus vídeos mais dinâmicos,
        profissionais e envolventes.
      </p>

      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab ${tab === t.id ? "on" : ""}`}
            onClick={() => setTab(tab === t.id ? null : t.id)}
          >
            <I name={t.icon} size={17} />
            {t.title}
          </button>
        ))}
      </div>

      {active && (
        <p className="muted tab-desc" key={active.id}>
          {active.desc}
        </p>
      )}
    </div>

    <div className="visual">
      <div className="grid-lines" />
      <div className="chip">
        <I name="spark" size={25} />
      </div>
    </div>
  </div>
</section>

{/* ===== CONTATO ===== */}
<section className="contact" id="contato">
  <div className="contact-glow" />
  <Stars count={18} />

  <h2 className="grad-h2 center">
    Vamos editar o seu próximo vídeo?
  </h2>

  <p className="muted center narrow">
    Me chame no WhatsApp e conte sobre seu projeto.
  </p>

  <div className="hero-cta cta-col" style={{ marginTop: "20px" }}>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-white"
    >
      <WhatsIcon size={17} /> Vamos conversar
    </a>

    <a
      href="https://www.instagram.com/menezssz_/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-glass"
    >
      <I name="instagram" size={16} /> Instagram
    </a>
  </div>
</section>

<footer className="footer">
  © {new Date().getFullYear()} {NAME}
</footer>
</div>
);
  }


// Renderização no Spck Editor
ReactDOM.render(<App />, document.getElementById("root"));
