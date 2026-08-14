import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  /** Atraso em ms antes da animação começar, útil para escalonar elementos em sequência. */
  delay?: number;
  /** Distância (em px) que o elemento percorre verticalmente durante o fade. */
  distance?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  distance = 32,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeita quem prefere menos animação: mostra o conteúdo direto, sem fade.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-out duration-700 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0"
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        transform: isVisible ? undefined : `translateY(${distance}px)`,
        willChange: isVisible ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}