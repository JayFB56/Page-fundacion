"use client";

import { useEffect, useState, useRef } from "react";

const involucrateItems = [
  {
    title: "Voluntariado",
    category: "Ayuda directa",
    description: "El voluntariado es el corazón de FUNDECA. Únete a nuestro equipo y transforma la vida de niños, familias y comunidades en situación de vulnerabilidad en Esmeraldas. Tu tiempo y dedicación pueden marcar la diferencia.",
  },
  {
    title: "Recaudación de fondos",
    category: "Donaciones",
    description: "Organiza una recolecta de fondos con tus amigos, familiares o empresa. Cada contribución se convierte en alimentos, educación y esperanza para niños y familias vulnerables de Esmeraldas.",
  },
  {
    title: "Donativos temporada",
    category: "Fiestas",
    description: "En temporada de fiestas, multiplicamos la solidaridad. Tus donativos llevan alegría, alimentos y regalos a niños, adultos mayores y familias que más lo necesitan en nuestra comunidad.",
  },
  {
    title: "Membresía principiante",
    category: "Afiliación",
    description: "Comienza tu camino como miembro FUNDECA. Tu apoyo mensual financia programas sociales que benefician directamente a niños, adolescentes y familias vulnerables en Esmeraldas. Juntos construimos un futuro más justo.",
  },
  {
    title: "Membresía estudiante",
    category: "Afiliación",
    description: "Ideal para estudiantes y jóvenes comprometidos con la solidaridad. Con tu membresía apoyas programas educativos y recreativos para niños y adolescentes, mientras te formas como agente de cambio en tu comunidad.",
  },
  {
    title: "Membresía completa",
    category: "Afiliación",
    description: "Comprométete al máximo con nuestra causa. Como miembro completo, tus donaciones sostienen programas integrales de apoyo a niños, familias y personas en situación de vulnerabilidad en toda la provincia de Esmeraldas.",
  },
  {
    title: "Donación anual",
    category: "Donar",
    description: "Haz una donación anual y conviértete en un pilar fundamental para nuestros programas. Tu contribución sostenida nos permite planificar y ejecutar proyectos que transforman la vida de cientos de familias en Esmeraldas.",
  },
  {
    title: "Donación única",
    category: "Donar",
    description: "Cada donación, sin importar su tamaño, tiene un impacto real en la vida de niños, adolescentes y familias vulnerables. Tu generosidad se convierte en alimento, educación, empleo y esperanza para quienes más lo necesitan.",
  },
  {
    title: "Donación anual",
    category: "Donar",
    description: "Tu donación anual nos permite mantener y expandir nuestros programas durante todo el año. Garantizamos que cada recurso se utiliza con transparencia y responsabilidad para maximizar el beneficio a nuestra comunidad.",
  },
  {
    title: "Grupo Directivo",
    category: "Gobernanza",
    description: "Únete a nuestro grupo directivo y participa en las decisiones estratégicas que guían el impacto social de FUNDECA en la provincia de Esmeraldas, siempre pensando en el bienestar de niños, familias y comunidades.",
  },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="involucrese" ref={sectionRef} className="relative overflow-hidden">

      {/* Header — centré verticalement sur l'image */}
      <div className="relative z-10 pt-32 lg:pt-40 text-center">
        <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="w-12 h-px bg-foreground/20" />
          Involúcrese
          <span className="w-12 h-px bg-foreground/20" />
        </span>

        <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Dar para
          <br />
          <span className="text-muted-foreground">recibir.</span>
        </h2>

        <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          ¿Quieres ser parte del cambio? En FUNDECA hay muchas formas de contribuir al bienestar de niños,
          familias y comunidades vulnerables. Ya sea como voluntario, donante o miembro, tu ayuda
          transforma vidas y construye esperanza en Esmeraldas.
        </p>
      </div>

      {/* Full-width image */}
      <div className={`relative left-1/2 -translate-x-1/2 w-screen -mt-16 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Integration grid — remonte sur l'image avec spacing mobile approprié */}
      <div className="relative z-10 mt-0 lg:-mt-24 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {involucrateItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`group relative overflow-hidden p-6 lg:p-8 border transition-all duration-500 cursor-default ${
                hoveredIndex === index
                  ? "border-foreground bg-foreground/[0.04] scale-[1.02]"
                  : "border-foreground/10 hover:border-foreground/30"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${index * 30 + 300}ms`,
              }}
              onMouseEnter={(e) => {
                setHoveredIndex(index);
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePos(null);
              }}
            >
              {/* Cursor-following halo */}
              {hoveredIndex === index && mousePos && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{
                    background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                  }}
                />
              )}
              {/* Category tag */}
              <span className={`absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 transition-colors ${
                hoveredIndex === index
                  ? "bg-foreground text-background"
                  : "bg-foreground/10 text-muted-foreground"
              }`}>
                {item.category}
              </span>

              {/* Icon placeholder */}
              <div className={`w-10 h-10 mb-6 flex items-center justify-center text-2xl transition-colors ${
                hoveredIndex === index ? "text-white" : "text-foreground/60"
              }`}>
                &#x2764;
              </div>

              <span className="font-medium block mb-2">{item.title}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                <div className={`h-full bg-foreground transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 pb-32 lg:pb-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-12">
            {[
              { value: "Membresías", label: "3 niveles" },
              { value: "Voluntarios", label: "Siempre bienvenidos" },
              { value: "Donaciones", label: "Anuales y únicas" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#donar" className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            Quiero donar ahora
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
