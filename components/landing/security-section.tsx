"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Heart, Users, FileText } from "lucide-react";

const legalFeatures = [
  {
    icon: Shield,
    title: "Resolución Administrativa",
    description: "Creada mediante Resolución Nro. 0041 del 20 de noviembre del 2019 del Ministerio de Inclusión Económica y Social del Ecuador.",
    image: "/images/isolated.jpg",
  },
  {
    icon: Heart,
    title: "Misión social",
    description: "Fundación dedicada al bienestar de niños, familias y personas en situación de vulnerabilidad, generando oportunidades de empleo digno e inclusión social.",
    image: "/images/encrypted.jpg",
  },
  {
    icon: Users,
    title: "Compromiso comunitario",
    description: "Trabajamos para construir una sociedad más justa, creando oportunidades laborales para personas vulnerables y apoyando a familias emprendedoras en Esmeraldas.",
    image: "/images/audit.jpg",
  },
  {
    icon: FileText,
    title: "Transparencia",
    description: "Garantizamos que cada donación se destina con total transparencia a programas que transforman la vida de niños, familias y comunidades vulnerables en Ecuador.",
    image: "/images/permissions.jpg",
  },
];

const certifications = ["MIES", "Ecuador", "Esmeraldas", "Valle Hermoso"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % legalFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="transparencia" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Transparencia
          </span>
          
          {/* Title — full width */}
          <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Información
            <br />
            <span className="text-muted-foreground">legal.</span>
          </h2>
          
          {/* Description — below title */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              FUNDACION EMPRENDE CON AMOR, reconocida con las siglas FUNDECA, fue creada a través de la
              Resolución Administrativa Nro. 0041 del 20 de noviembre del 2019 del Ministerio de Inclusión
              Económica y Social del Ecuador. Operamos con total transparencia y compromiso social.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Large visual card */}
          <div className={`lg:col-span-7 relative p-8 lg:p-12 border border-foreground/10 min-h-[400px] overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Dynamic feature image with cross-fade — desktop only */}
            <div className="absolute inset-0 pointer-events-none items-center justify-end hidden lg:flex">
              {legalFeatures.map((feature, index) => (
                <img
                  key={feature.image}
                  src={feature.image}
                  alt={feature.title}
                  className="absolute h-3/4 w-3/4 object-contain object-right transition-opacity duration-500"
                  style={{ opacity: activeFeature === index ? 0.85 : 0 }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <span className="font-mono text-sm text-muted-foreground">Resolución Nro. 0041</span>
              <div className="mt-8">
                <span className="text-7xl lg:text-8xl font-display">2019</span>
                <span className="block text-muted-foreground mt-2">Año de fundación oficial</span>
              </div>
            </div>
            
            {/* Certification badges */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-3 py-1 border border-foreground/10 text-xs font-mono text-muted-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Feature cards stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {legalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border transition-all duration-500 cursor-default ${
                  activeFeature === index 
                    ? "border-foreground/30 bg-foreground/[0.04]" 
                    : "border-foreground/10"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 flex items-center justify-center border transition-colors ${
                    activeFeature === index 
                      ? "border-foreground bg-foreground text-background" 
                      : "border-foreground/20"
                  }`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-foreground/10">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-12 h-px bg-foreground/30" />
            Preguntas frecuentes
          </span>
          <h3 className="text-3xl lg:text-4xl font-display mb-10">Centro de ayuda</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-foreground/10">
              <h4 className="font-medium mb-3 text-base">Si hago una donación, ¿puedo decidir a qué sería destinado mi dinero?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sí. Puedes indicar si deseas que tu donación se destine a programas específicos como alimentación infantil, apoyo educativo, actividades para adultos mayores o emprendimientos familiares. Nosotros te mantenemos informado del impacto de tu contribución.
              </p>
            </div>
            <div className="p-6 border border-foreground/10">
              <h4 className="font-medium mb-3 text-base">¿Qué distingue a FUNDECA de otras organizaciones similares?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nos distingue nuestro compromiso directo con las comunidades de Esmeraldas, el respaldo del Ministerio de Inclusión Económica y Social del Ecuador, y un modelo de trabajo que combina empleo digno, programas sociales y el poder transformador del voluntariado.
              </p>
            </div>
            <div className="p-6 border border-foreground/10">
              <h4 className="font-medium mb-3 text-base">¿A cuántas personas ayudan con sus programas sociales?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A través de nuestros programas de alimentación, educación, empleo y acompañamiento, impactamos positivamente a cientos de niños, adolescentes, adultos mayores y familias en situación de vulnerabilidad en la provincia de Esmeraldas. Cada año seguimos creciendo gracias al apoyo de nuestros voluntarios y donantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
