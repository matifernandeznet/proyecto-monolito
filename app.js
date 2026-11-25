const titulo = document.querySelector("h1");
const parrafo = document.querySelector("main p");

if (!titulo || !parrafo) {
  console.warn("No se encontraron los elementos necesarios para iniciar la interacción.");
} else {
  const estados = [
    {
      titulo: "¡Hola, mundo!",
      parrafo:
        "Bienvenido a mi sitio web. Estoy aprendiendo a crear páginas con HTML y CSS, y este es el comienzo de una nueva idea."
    },
    {
      titulo: "¡Bienvenido a mi sitio!",
      parrafo:
        "Gracias por visitar esta pequeña página. Sigue explorando y aprendiendo."
    }
  ];

  let estadoActual = 0;
  const animacionesReducidas = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  titulo.setAttribute("role", "button");
  titulo.setAttribute("tabindex", "0");
  titulo.setAttribute("aria-pressed", "false");

  const cambiarContenido = () => {
    estadoActual = (estadoActual + 1) % estados.length;
    const estado = estados[estadoActual];

    titulo.textContent = estado.titulo;
    parrafo.textContent = estado.parrafo;
    titulo.setAttribute("aria-pressed", String(estadoActual === 1));

    if (!animacionesReducidas && typeof titulo.animate === "function") {
      titulo.animate(
        [
          { transform: "scale(1)", color: "#4f46e5" },
          { transform: "scale(1.05)", color: "#6366f1" },
          { transform: "scale(1)", color: "#4f46e5" }
        ],
        { duration: 300, easing: "ease-out" }
      );
    }
  };

  titulo.addEventListener("click", cambiarContenido);
  titulo.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      cambiarContenido();
    }
  });
}

