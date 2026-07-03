"use client";

import { useState, useEffect, useRef } from "react";

const news = [
  { 
    title: "Aniversario especial", 
    description: "Celebramos un año más de compromiso con los niños, familias y comunidades de Esmeraldas. Nuevos programas, más voluntarios y el mismo amor por nuestra gente."
  },
  { 
    title: "Entrevista exclusiva", 
    description: "Conversamos sobre el impacto de nuestros programas sociales en la niñez y las familias vulnerables de Esmeraldas, y los planes de expansión de FUNDECA para llegar a más comunidades."
  },
  { 
    title: "Discusión: Donativos", 
    description: "Cómo las donaciones a FUNDECA se transforman en alimentos, educación, empleo y esperanza para cientos de familias vulnerables en la provincia de Esmeraldas."
  },
  { 
    title: "Última colecta", 
    description: "Gracias a la solidaridad de cientos de personas, nuestra última colecta benéfica llevó alimentos, ropa y útiles escolares a niños y familias vulnerables de Esmeraldas."
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLSection>(null);

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
    <section id="novedades" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">

      {/* Image — absolute, bottom-right, behind all content */}
      <div
        className={`absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left-top"
        />
        {/* Fade left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        {/* Fade top edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      {/* All text content sits on top */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — Full width */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Novedades
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9]">
            Sala de
            <br />
            <span className="text-muted-foreground">prensa.</span>
          </h2>
        </div>

        {/* Description + Features — left half only */}
        <div
          className={`max-w-[50%] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-md">
            FUNDECA en las noticias. Descubre cómo nuestros programas y actividades están transformando la
            vida de niños, familias y comunidades en Esmeraldas. Cada artículo refleja el compromiso y la
            solidaridad de quienes creen en un futuro mejor para nuestra provincia.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {news.map((item, index) => (
              <div
                key={item.title}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className={`max-w-[50%] mt-20 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Eventos
          </span>
          <h3 className="text-3xl lg:text-4xl font-display mb-10">Próximos eventos</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-foreground/10 p-6">
              <div className="text-3xl font-display mb-2">18</div>
              <div className="text-sm text-muted-foreground mb-4">Septiembre 2026</div>
              <h4 className="font-medium mb-1">Subasta anual</h4>
              <p className="text-sm text-muted-foreground">Gran subasta anual para recaudar fondos.</p>
            </div>
            <div className="border border-foreground/10 p-6">
              <div className="text-3xl font-display mb-2">12</div>
              <div className="text-sm text-muted-foreground mb-4">Octubre 2026</div>
              <h4 className="font-medium mb-1">Media maratón</h4>
              <p className="text-sm text-muted-foreground">Carrera benéfica para la recaudación de fondos.</p>
            </div>
            <div className="border border-foreground/10 p-6">
              <div className="text-3xl font-display mb-2">08</div>
              <div className="text-sm text-muted-foreground mb-4">Noviembre 2026</div>
              <h4 className="font-medium mb-1">Mercado de segunda mano</h4>
              <p className="text-sm text-muted-foreground">Venta de artículos de segunda mano para apoyar la causa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
