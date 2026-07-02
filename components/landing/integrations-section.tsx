"use client";

import { useEffect, useState, useRef } from "react";

const involucrateItems = [
  {
    title: "Voluntariado",
    category: "Ayuda directa",
    description: "La generosidad es una de las fuerzas humanas más poderosas. En FUNDACION FUNDECA, aprovechamos los esfuerzos de nuestro personal y voluntarios para tener un efecto positivo sobre las vidas de quienes más ayuda necesitan. Nos encantaría que se una a nuestro equipo.",
  },
  {
    title: "Recaudación de fondos",
    category: "Donaciones",
    description: "Hay muchas formas de contribuir a nuestras labores de beneficencia. Hasta el menor esfuerzo cuenta, en especial para los más necesitados. Conozca más sobre lo que hacemos y cómo puede brindar apoyo.",
  },
  {
    title: "Donativos temporada",
    category: "Fiestas",
    description: "Utilice su talento para ayudar a nuestro personal y a la comunidad. Siempre estamos en busca de personas talentosas que gusten de dedicar tiempo a una buena causa. Si desea hacer una diferencia en la vida de otros, no hay mejor manera que participando con FUNDACION FUNDECA.",
  },
  {
    title: "Membresía principiante",
    category: "Afiliación",
    description: "Regístrese hoy mismo. Su apoyo proporcionará fondos cruciales para nuestras actividades, eventos y programas. Juntos lograremos cambiar la forma en que se trata a los ciudadanos y nos aseguraremos de que haya mejoras.",
  },
  {
    title: "Membresía estudiante",
    category: "Afiliación",
    description: "Si quiere familiarizarse con el trabajo que hacemos, esta es una excelente manera de aprender lo básico. Su apoyo tendrá un gran impacto en los necesitados. Contáctenos para averiguar qué significa pertenecer a la fundación.",
  },
  {
    title: "Membresía completa",
    category: "Afiliación",
    description: "A lo largo de los años, FUNDACION FUNDECA ha podido promover continuamente nuestras causas mediante las amables donaciones de nuestros miembros y colaboradores. Su contribución nos ayuda a seguir con nuestra labor benéfica.",
  },
  {
    title: "Donación anual",
    category: "Donar",
    description: "¿Quiere lograr un impacto positivo en la comunidad? Es tan simple como hacer una donación. Ninguna cantidad de tiempo o de dinero es demasiado pequeña o grande. Agradecemos toda la ayuda que nos pueda proporcionar.",
  },
  {
    title: "Donación única",
    category: "Donar",
    description: "Si le inspiran las causas que promueve FUNDACION FUNDECA, apreciaríamos mucho su apoyo. Done hoy. Es fácil y tendrá un enorme impacto en la vida de muchas personas necesitadas.",
  },
  {
    title: "Donación anual",
    category: "Donar",
    description: "Agradecemos toda la ayuda que nos pueda proporcionar, y le garantizamos que se usará de la mejor forma posible. Contáctenos para conocer más sobre lo que hacemos con las donaciones que recibimos.",
  },
  {
    title: "Grupo Directivo",
    category: "Gobernanza",
    description: "Grupo directivo de FUNDACION FUNDECA. Únase a nuestro grupo público para participar en las decisiones y actividades de la fundación.",
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
          ¿Busca cómo involucrarse con FUNDACION FUNDECA? Vea aquí las diferentes oportunidades disponibles.
          Todo tipo de ayuda es inmensamente apreciado, ya sea que busque un trabajo de tiempo completo
          o colaborar como voluntario en su tiempo libre.
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
