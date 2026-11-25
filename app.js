const titulo = document.querySelector("h1");
const parrafo = document.querySelector("main p");

let saludo = true;

titulo.style.cursor = "pointer";

titulo.addEventListener("click", () => {
  titulo.textContent = saludo ? "¡Bienvenido a mi sitio!" : "¡Hola, mundo!";
  parrafo.textContent = saludo
    ? "Gracias por visitar esta pequeña página. Sigue explorando y aprendiendo."
    : "Bienvenido a mi sitio web. Estoy aprendiendo a crear páginas con HTML y CSS, y este es el comienzo de una nueva idea.";

  titulo.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: "scale(1)" }
    ],
    { duration: 300 }
  );

  saludo = !saludo;
});