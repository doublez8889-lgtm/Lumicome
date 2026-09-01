import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing after reveal for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Parallax effect for hero and large sections
    let ticking = false;
    const handleParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const parallaxElements = document.querySelectorAll(".parallax");
          parallaxElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const scrollY = window.scrollY;
            const elementTop = rect.top + scrollY;
            const distance = scrollY - (elementTop - window.innerHeight);
            const yOffset = distance * 0.5; // 50% parallax effect
            (el as HTMLElement).style.transform = `translateY(${yOffset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleParallax, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);
}
