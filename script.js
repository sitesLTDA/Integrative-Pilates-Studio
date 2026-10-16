const WHATSAPP_NUMBER = "5571999310908"; // Integrative Pilates Studio: +55 71 99931-0908
    const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de saber sobre as aulas de Pilates.";
    const whatsappURL = () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Atualiza automaticamente todos os links de WhatsApp com o número e a mensagem definidos acima.
    document.querySelectorAll("[data-whatsapp]").forEach(link => {
      link.href = whatsappURL();
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
    document.getElementById("year").textContent = new Date().getFullYear();

    // Animações discretas ao rolar; respeita a preferência por movimento reduzido.
    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach(item => observer.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add("visible"));
    }
