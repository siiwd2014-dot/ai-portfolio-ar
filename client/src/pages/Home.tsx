import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ExternalLink,
  Github,
  Globe2,
  Image as ImageIcon,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  Play,
  PlayCircle,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const heroImage = "/manus-storage/nova-hero_90d95235.jpg";

const projects = [
  {
    id: "01",
    category: "تصميم إعلاني",
    filter: "image",
    type: "IMAGE",
    title: "حقيبة الطوارئ الذكية",
    subtitle: "تصميم إعلاني مولّد لمنتج بقاء ذكي، مع سرد بصري واضح ومحتوى تسويقي عربي.",
    image: "/manus-storage/01-tawari_730bfbb3.jpg",
    accent: "amber",
    link: "https://drive.google.com/file/d/1kdfm8a7vW8wtTX-NOCnQSXWqQpjb7jgf/view?usp=drive_link",
    stat: "01",
    statLabel: "تصميم أصلي",
  },
  {
    id: "02",
    category: "تصميم داخلي",
    filter: "image",
    type: "IMAGE",
    title: "مساحة هادئة",
    subtitle: "تصوّر داخلي لغرفة معيشة مع تنسيق الألوان والخامات والتكوين النهائي.",
    image: "/manus-storage/02-decor_fbce4e84.jpg",
    accent: "lime",
    link: "https://drive.google.com/file/d/1kWmaXWWsJXHH_XNtrWpDhvXH3QFYgSsW/view?usp=drive_link",
    stat: "02",
    statLabel: "مشهد داخلي",
  },
  {
    id: "03",
    category: "تحليل هندسي",
    filter: "image",
    type: "IMAGE",
    title: "حلول البناء المقترحة",
    subtitle: "لوحة توضيحية تشرح أخطاء التنفيذ والحلول الهندسية المقترحة بطريقة مباشرة.",
    image: "/manus-storage/03-repaired_bca01e5c.jpg",
    accent: "orange",
    link: "https://drive.google.com/file/d/1jttnt9U9uwUJqvlOXcomCsZpn-7C8i79/view?usp=drive_link",
    stat: "03",
    statLabel: "لوحة هندسية",
  },
  {
    id: "04",
    category: "مشهد مركّب",
    filter: "image",
    type: "IMAGE",
    title: "الديناصور في وسط البلد",
    subtitle: "مشهد بصري مركّب يضع ديناصورًا عملاقًا وسط عمّان مع الحفاظ على التفاصيل المحلية.",
    image: "/manus-storage/04-edited_81956a31.png",
    accent: "blue",
    link: "https://drive.google.com/file/d/1gatPvwhiVqfXh1uqpJ8Rz7rErqMtxSYL/view?usp=drive_link",
    stat: "04",
    statLabel: "تجربة تركيبية",
  },
  {
    id: "05",
    category: "تجربة ويب",
    filter: "web",
    type: "WEB EXPERIENCE",
    title: "Pac-Man / نسخة مخصّصة",
    subtitle: "لعبة متصفح تفاعلية مبنية كقطعة ويب قابلة للتجربة والمشاركة.",
    image: "/manus-storage/pacman-cover_22c7b558.jpg",
    accent: "violet",
    link: "https://drive.google.com/uc?export=download&id=1svVhhJ9evP-Hpxqxq1AF8p9RYXDjTU1x",
    stat: "05",
    statLabel: "لعبة ويب",
  },
  {
    id: "06",
    category: "تجربة ويب",
    filter: "web",
    type: "WEB EXPERIENCE",
    title: "المرشد الذكي للمكيّف",
    subtitle: "أداة ويب تساعد المستخدم على تشخيص أعطال مكيّف السيارة بخطوات واضحة.",
    image: "/manus-storage/ac-guide-cover_80f089bf.jpg",
    accent: "cyan",
    link: "https://drive.google.com/uc?export=download&id=1_8eucLnIMvVWpjNVlImQc7xJlYe8Srpu",
    stat: "06",
    statLabel: "أداة ذكية",
  },
  {
    id: "07",
    category: "بيانات وتقييم",
    filter: "file",
    type: "DATA FILE",
    title: "لوحة درجات الطلاب",
    subtitle: "جدول درجات منظم لخمس اختبارات، يصلح كأساس لتقارير ولوحات متابعة تعليمية.",
    image: "/manus-storage/02-decor_fbce4e84.jpg",
    accent: "green",
    link: "https://docs.google.com/spreadsheets/d/164npyqf7hrM4TkfP8Jin76-EeznYTJio/edit?usp=drive_link&ouid=105977811018565278477&rtpof=true&sd=true",
    stat: "07",
    statLabel: "ملف بيانات",
  },
  {
    id: "08",
    category: "عرض تقديمي",
    filter: "file",
    type: "PRESENTATION",
    title: "تجميع الحاسوب من الصفر",
    subtitle: "عرض تعليمي يشرح مكونات الحاسوب وخطوات التجميع بأسلوب مبسط.",
    image: "/manus-storage/01-tawari_730bfbb3.jpg",
    accent: "orange",
    link: "https://drive.google.com/file/d/1bQ_ISe1BV_vTBQPRy6B3Tcw7WBRlG1qw/view?usp=drive_link",
    stat: "08",
    statLabel: "عرض تعليمي",
  },
];

const filters = [
  { label: "الكل", value: "all" },
  { label: "صور", value: "image" },
  { label: "ويب", value: "web" },
  { label: "ملفات", value: "file" },
];

function ArrowButton({ onClick, label = "افتح المشروع" }: { onClick?: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-3 text-sm font-bold text-white/70 transition hover:text-[#d8ff61]"
    >
      <span>{label}</span>
      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition duration-300 group-hover:-translate-x-1 group-hover:border-[#d8ff61]/60 group-hover:bg-[#d8ff61] group-hover:text-[#09100d]">
        <ArrowUpLeft className="h-4 w-4" />
      </span>
    </button>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof projects)[number];
  onOpen: (project: (typeof projects)[number]) => void;
}) {
  return (
    <article className="project-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111a1d]" onClick={() => onOpen(project)}>
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
        <span>{project.id} / {project.type}</span>
        {project.filter === "video" && <PlayCircle className="h-5 w-5 text-[#d8ff61]" />}
      </div>
      <div className="relative aspect-[1.05/1] overflow-hidden">
        <img src={project.image} alt={project.title} className="project-image absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1315] via-transparent to-black/30 opacity-80" />
        <div className="absolute inset-0 bg-[#d8ff61]/0 transition duration-500 group-hover:bg-[#d8ff61]/10" />
        <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs text-[#d8ff61]">{project.category}</p>
            <h3 className="text-2xl font-extrabold leading-none text-white md:text-3xl">{project.title}</h3>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#0a1518] transition duration-300 group-hover:-translate-x-1 group-hover:bg-[#d8ff61]">
            <ArrowUpLeft className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <p className="max-w-[22rem] text-xs leading-6 text-white/50">{project.subtitle}</p>
        <div className="shrink-0 text-left">
          <div className="font-display text-lg font-bold text-white">{project.stat}</div>
          <div className="text-[10px] text-white/40">{project.statLabel}</div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["home", "work", "studio", "contact"];
      const current = ids.find((id) => {
        const section = document.getElementById(id);
        return section && window.scrollY >= section.offsetTop - 180;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visibleProjects = useMemo(
    () => (activeFilter === "all" ? projects : projects.filter((project) => project.filter === activeFilter)),
    [activeFilter],
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#091113] text-white">
      <div className="noise" />
      <div className="cursor-orb" />

      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#091113]/80 shadow-2xl shadow-black/20 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-10">
          <button className="flex items-center gap-3" onClick={() => scrollTo("home")} aria-label="العودة للرئيسية">
            <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#d8ff61] text-[#091113] shadow-[0_0_30px_rgba(216,255,97,0.16)]">
              <Sparkles className="h-[18px] w-[18px]" />
            </span>
            <span className="text-right leading-none">
              <span className="font-display block text-[17px] font-bold tracking-[-0.06em]">NOVA<span className="text-[#d8ff61]">/</span></span>
              <span className="mt-1 block text-[9px] font-semibold tracking-[0.25em] text-white/40">AI ART DIRECTION</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/50 md:flex">
            {[
              ["home", "الرئيسية"],
              ["work", "المعرض"],
              ["studio", "الاستوديو"],
              ["contact", "تواصل"],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`nav-link relative py-2 transition hover:text-white ${activeSection === id ? "text-white" : ""}`}>
                {label}
                {activeSection === id && <span className="absolute -bottom-1 right-0 h-[2px] w-4 rounded-full bg-[#d8ff61]" />}
              </button>
            ))}
          </nav>

          <button className="hidden items-center gap-2 rounded-full border border-[#d8ff61]/40 px-4 py-2 text-xs font-bold text-[#d8ff61] transition hover:bg-[#d8ff61] hover:text-[#091113] md:flex" onClick={() => scrollTo("contact")}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d8ff61]" />
            متاح لمشروع جديد
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="فتح القائمة">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#091113]/95 px-5 py-5 backdrop-blur-xl md:hidden">
            {[['home', 'الرئيسية'], ['work', 'المعرض'], ['studio', 'الاستوديو'], ['contact', 'تواصل']].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full border-b border-white/10 py-4 text-right font-semibold text-white/70 last:border-0">{label}</button>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative min-h-[820px] border-b border-white/10 pt-28 lg:min-h-[920px]">
        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: `linear-gradient(rgba(216,255,97,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(216,255,97,.035) 1px, transparent 1px)`, backgroundSize: "72px 72px" }} />
        <div className="hero-glow absolute -right-28 top-12 h-[32rem] w-[32rem] rounded-full bg-[#d8ff61]/10 blur-[120px]" />
        <div className="hero-glow-delay absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-[#f37036]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1380px] gap-16 px-5 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-32">
          <div className="max-w-[720px] pt-8 lg:pt-20">
            <div className="reveal mb-7 flex items-center gap-3 text-xs font-semibold text-[#d8ff61]" style={{ animationDelay: "80ms" }}>
              <span className="h-px w-14 bg-[#d8ff61]" />
              <span>مختبر بصري مستقل للذكاء الاصطناعي</span>
            </div>
            <h1 aria-label="نُعيد تخيّل الممكن" className="reveal font-display text-[clamp(4rem,9vw,8.9rem)] font-bold leading-[.88] tracking-[-0.09em] text-[#f5f8ef]" style={{ animationDelay: "160ms" }}>
              نُعيد
              <br />
              <span className="text-gradient">تخيّل</span>
              <br />
              <span className="relative inline-block">الممكن<span className="absolute -left-3 top-1 h-3 w-3 rounded-full bg-[#f37036] shadow-[0_0_25px_#f37036]" /></span>
            </h1>
            <div className="reveal mt-9 flex flex-col gap-8 sm:flex-row sm:items-end" style={{ animationDelay: "240ms" }}>
              <p className="max-w-[310px] text-sm leading-7 text-white/55">نصمّم صورًا وأفلامًا وتجارب رقمية لا تبدو كأنها خرجت من آلة، بل كأنها كانت تنتظر أن تُكتشف.</p>
              <button onClick={() => scrollTo("work")} className="group flex items-center gap-3 text-sm font-bold text-[#d8ff61]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#d8ff61] text-[#091113] transition duration-300 group-hover:-translate-x-1 group-hover:rotate-[-8deg]"><ArrowUpLeft className="h-5 w-5" /></span>
                <span>استكشف الأعمال</span>
              </button>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[560px] lg:mt-16" style={{ animationDelay: "300ms" }}>
            <div className="absolute -right-7 -top-7 z-10 grid h-20 w-20 place-items-center rounded-full bg-[#d8ff61] text-center text-[10px] font-bold leading-4 text-[#091113] shadow-[0_0_50px_rgba(216,255,97,0.16)]">
              <span>AI<br />GENERATIVE<br />STUDIO</span>
            </div>
            <div className="hero-frame relative overflow-hidden rounded-[2.6rem] border border-white/15 bg-[#111d1c] p-2 shadow-2xl shadow-black/40">
              <div className="relative aspect-[.82/1] overflow-hidden rounded-[2.2rem]">
                <img src={heroImage} alt="عمل فني مولّد بالذكاء الاصطناعي" className="h-full w-full object-cover grayscale-[20%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091113] via-transparent to-[#091113]/10" />
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                  <div>
                    <p className="mb-2 text-[10px] font-bold tracking-[0.24em] text-[#d8ff61]">FEATURED STUDY / 001</p>
                    <p className="text-2xl font-extrabold leading-tight">الضوء<br />حين يتذكّر</p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md"><ArrowUpLeft className="h-4 w-4" /></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 grid h-28 w-28 place-items-center rounded-full border border-white/15 bg-[#0d1719]/85 text-center backdrop-blur-xl">
              <div><div className="font-display text-2xl font-bold text-white">24<span className="text-[#d8ff61]">+</span></div><div className="text-[9px] text-white/45">مشروعًا حيًا</div></div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-[1380px] grid-cols-2 gap-6 border-t border-white/10 px-5 py-6 text-right sm:grid-cols-4 lg:px-10">
          {[["24", "مشروعًا أطلقناه"], ["11", "علامة وثقت بنا"], ["07", "بلدان حول العالم"], ["∞", "مساحة للتجريب"]].map(([value, label], index) => (
            <div key={label} className="stat-item" style={{ animationDelay: `${index * 80 + 300}ms` }}><div className="font-display text-2xl font-bold text-white">{value}<span className="text-[#d8ff61]">{value !== "∞" && "+"}</span></div><div className="mt-1 text-[10px] text-white/40">{label}</div></div>
          ))}
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-[1380px] px-5 py-24 lg:px-10 lg:py-36">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-bold text-[#d8ff61]"><span className="h-px w-10 bg-[#d8ff61]" />SELECTED WORKS / 2024 — 2026</div>
            <h2 className="font-display text-5xl font-bold tracking-[-0.07em] text-white md:text-7xl">أعمال<br /><span className="text-white/30">تتحرك.</span></h2>
          </div>
          <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {filters.map((filter) => <button key={filter.value} onClick={() => setActiveFilter(filter.value)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${activeFilter === filter.value ? "bg-[#d8ff61] text-[#091113]" : "text-white/50 hover:text-white"}`}>{filter.label}</button>)}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}
        </div>
        <div className="mt-10 flex justify-center"><ArrowButton onClick={() => setActiveFilter("all")} label="عرض كل التجارب" /></div>
      </section>

      <section id="studio" className="relative border-y border-white/10 bg-[#0d1719]">
        <div className="mx-auto grid max-w-[1380px] gap-14 px-5 py-24 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10 lg:py-32">
          <div className="relative order-2 aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 lg:order-1">
            <img src="/manus-storage/nova-architecture_d5d7c879.jpg" alt="مساحة استوديو مستقبلية" className="h-full w-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d8ff61]/20 via-transparent to-[#f37036]/20 mix-blend-screen" />
            <div className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-[#091113]/70 px-4 py-2 text-[10px] font-bold tracking-[0.18em] backdrop-blur-md">NOVA / BEYOND THE OBVIOUS</div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold text-[#d8ff61]"><span className="h-px w-10 bg-[#d8ff61]" />عن الاستوديو</div>
            <h2 className="max-w-[720px] font-display text-4xl font-bold leading-[1.08] tracking-[-0.07em] text-white md:text-6xl">نحن لا نستخدم الذكاء الاصطناعي لصناعة المزيد،<span className="text-[#d8ff61]"> بل لصناعة ما لم يكن موجودًا.</span></h2>
            <p className="mt-8 max-w-[590px] text-base leading-8 text-white/55">NOVA هو استوديو إبداعي يعمل عند التقاطع بين الفن والتقنية. نبدأ بالسؤال، نختبر المستحيل، ثم نترك خلفنا أثرًا بصريًا لا يشبه أحدًا.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[{ icon: Layers3, label: "هوية" }, { icon: Play, label: "موشن" }, { icon: Globe2, label: "ويب" }, { icon: Zap, label: "تجريب" }].map(({ icon: Icon, label }) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-[#d8ff61]/40"><Icon className="mb-5 h-5 w-5 text-[#d8ff61]" /><div className="text-xs font-bold text-white/70">{label}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-5 py-24 lg:px-10 lg:py-36">
        <div className="contact-orb absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#f37036]/10 blur-[100px]" />
        <div className="relative mx-auto max-w-[1000px] text-center">
          <div className="mx-auto mb-7 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-white/50"><span className="h-2 w-2 animate-pulse rounded-full bg-[#d8ff61]" /> نفتح أبوابنا للأفكار الجريئة</div>
          <h2 className="font-display text-5xl font-bold leading-[.95] tracking-[-0.08em] text-white md:text-8xl">لديك فكرة<br /><span className="text-gradient">غير عادية؟</span></h2>
          <p className="mx-auto mt-8 max-w-[520px] text-sm leading-7 text-white/50">أرسل لنا شرارتك الأولى. سنساعدك على تحويلها إلى تجربة تُرى، تُسمع، وتُحفظ.</p>
          <a href="mailto:hello@nova-studio.ai" target="_blank" rel="noopener noreferrer" className="group mx-auto mt-10 inline-flex items-center gap-4 rounded-full bg-[#d8ff61] px-6 py-4 text-sm font-extrabold text-[#091113] transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(216,255,97,0.18)]">hello@nova-studio.ai <ArrowUpLeft className="h-5 w-5 transition group-hover:-translate-x-1" /></a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-5 text-xs text-white/35 md:flex-row md:items-center">
          <div className="font-display font-bold tracking-[-0.04em] text-white/70">NOVA<span className="text-[#d8ff61]">/</span> AI ART DIRECTION</div>
          <div className="flex items-center gap-5"><a href="#" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d8ff61]"><Instagram className="h-4 w-4" /></a><a href="#" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d8ff61]"><Linkedin className="h-4 w-4" /></a><a href="#" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d8ff61]"><Github className="h-4 w-4" /></a><span>© 2026 NOVA Studio</span></div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4 backdrop-blur-md" role="dialog" aria-modal="true" onClick={() => setSelectedProject(null)}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-white/15 bg-[#101a1c] p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute left-6 top-6 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-[#d8ff61] hover:text-[#091113]" aria-label="إغلاق"><X className="h-5 w-5" /></button>
            <img src={selectedProject.image} alt={selectedProject.title} className="aspect-[16/9] w-full rounded-[1.5rem] object-cover" />
            <div className="grid gap-8 p-5 md:grid-cols-[1fr_auto] md:items-end">
              <div><p className="mb-3 text-xs font-bold text-[#d8ff61]">{selectedProject.category} / {selectedProject.id}</p><h3 className="font-display text-4xl font-bold tracking-[-0.07em]">{selectedProject.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{selectedProject.subtitle} هذه صفحة عرض تجريبية توضّح كيف يمكن تقديم تفاصيل المشروع، مخرجاته، ورحلته البصرية ضمن موقعك الحقيقي.</p></div>
              {selectedProject.link ? <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8ff61] px-5 py-3 text-xs font-bold text-[#091113]">فتح العمل الأصلي <ExternalLink className="h-4 w-4" /></a> : <a href="#contact" onClick={() => setSelectedProject(null)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8ff61] px-5 py-3 text-xs font-bold text-[#091113]">اطلب تجربة مشابهة <ExternalLink className="h-4 w-4" /></a>}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
