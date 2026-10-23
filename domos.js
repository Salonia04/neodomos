/* ==========================================================
   NEODOMOS · DATOS Y FUNCIONES COMPARTIDAS
   Lo usan index.html, info.html y contacto.html.
   Todo lo que quieras cambiar (contactos, domos, textos del
   footer) se cambia SOLO ACÁ y se actualiza en las 3 páginas.
   ========================================================== */

/* 1) CONFIGURACIÓN GENERAL ← CAMBIAR */
const CONFIG = {
  whatsapp: "5493513991739",
  instagram: "https://www.instagram.com/neodomos",
  email: "info@neodomos.com",
  zona: "Córdoba, Argentina",
  mensajeCotizar: "Hola! Quiero cotizar un domo NEODOMOS.",
  mensajeGeneral: "Hola! Quiero más información sobre los domos NEODOMOS."
};
const $ = s => document.querySelector(s);
const wa = m => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m)}`;

/* 2) ÍCONOS (SVG de trazo fino, reemplazan a los emojis).
   Se usan con data-ico="nombre" en el HTML o icono("nombre") en JS. */
const ICONOS = {
  cama: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.5"/>',
  salud: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 7v10M7 12h10"/>',
  copa: '<path d="M5 4h14l-7 8zM12 12v8M8 20h8"/>',
  cubiertos: '<path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 21V3c-2 1-3 4-3 8h3"/>',
  maletin: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 13h18"/>',
  hoja: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19c3-5 6-8 10-10"/>',
  rayo: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
  domo: '<path d="M3 19h18M4 19a8 8 0 0 1 16 0M12 11v8M7 13.5 12 19l5-5.5"/>',
  candado: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  clima: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
  llave: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3"/>',
  escudo: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
  led: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
const icono = n => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONOS[n] || ""}</svg>`;

/* 3) FICHA TÉCNICA: estas filas aparecen en TODOS los domos.
   Cada domo completa solo las que conozca (las otras dicen "A confirmar"). */
const SPECS_BASE = ["Dimensiones", "Superficie", "Capacidad", "Estructura", "Aislación térmica", "Suelo requerido"];

/* 4) NODOS (menú de domos) ← ACÁ AGREGÁS MÁS DOMOS
   Copiá un bloque { ... }, pegalo al final con una coma y cambiá los datos.
   icono: cama · salud · copa · cubiertos · maletin · domo (o agregá uno en ICONOS)
   specs: solo las filas que tengas, ej: { "Superficie": "18 m²" }
   modelos (opcional): [["Domo 5 m","Ideal para oficina"],["Domo 7 m","Ideal para 4 personas"]] */
const NODOS = [
  { id: "habitacional", nombre: "Habitacional", icono: "cama", fondo: "img/domo-disponible.jpg",
    resumen: "Vivienda y alojamiento modular con diseño bioclimático. Confort todo el año, en cualquier entorno.",
    titulo: "Domo Habitacional",
    descripcion: "Un espacio pensado para habitar: ambiente integrado, ventanales panorámicos y toda la comodidad en un diseño compacto.",
    specs: { "Superficie": "18 m²", "Capacidad": "2 personas" },
    incluye: ["Ventanales panorámicos", "Aislación térmica", "Luz LED de estado", "Baño y kitchenette"],
    galeria: ["img/domo-blanco.jpg", "img/domo-disponible.jpg", "img/domo-ocupado.jpg"] },
  { id: "enfermeria", nombre: "Enfermería", icono: "salud", fondo: "img/domo-blanco.jpg",
    resumen: "Puestos de salud modulares, higiénicos y listos para instalar donde se necesiten.",
    titulo: "Domo Enfermería",
    descripcion: "Consultorio o puesto sanitario modular, de rápida instalación y fácil mantenimiento.",
    specs: {}, incluye: ["Superficies lavables", "Climatización", "Iluminación LED"], galeria: ["img/domo-blanco.jpg"] },
  { id: "bar", nombre: "Bar & Ocio", icono: "copa", fondo: "img/domo-ocupado.jpg",
    resumen: "Bares, lounges y espacios de ocio con una estética tecnológica que atrae clientes.",
    titulo: "Domo Bar & Ocio",
    descripcion: "Ideal para barras, lounges y espacios de entretenimiento con una estética moderna.",
    specs: {}, incluye: ["Barra integrada", "Iluminación ambiental", "Ventanales"], galeria: ["img/domo-ocupado.jpg", "img/domo-blanco.jpg"] },
  { id: "restaurante", nombre: "Restaurante", icono: "cubiertos", fondo: "img/domo-blanco.jpg",
    resumen: "Salones gastronómicos modulares para propuestas boutique en entornos naturales.",
    titulo: "Domo Restaurante",
    descripcion: "Salón gastronómico modular para propuestas boutique en entornos naturales.",
    specs: {}, incluye: ["Salón con vista", "Cocina equipada", "Climatización"], galeria: ["img/domo-blanco.jpg"] },
  { id: "oficina", nombre: "Oficina", icono: "maletin", fondo: "img/domo-disponible.jpg",
    resumen: "Oficinas y coworkings de despliegue ultra-rápido, silenciosos y eficientes.",
    titulo: "Domo Oficina",
    descripcion: "Oficina modular para equipos pequeños, coworking o espacios de reunión.",
    specs: {}, incluye: ["Escritorios", "Internet-ready", "Climatización"], galeria: ["img/domo-disponible.jpg", "img/domo-blanco.jpg"] }
];

/* 5) NAVBAR Y FOOTER (iguales en todas las páginas) */
function montarLayout(pagina) {
  $("#site-header").innerHTML = `
    <a class="logo" href="index.html"><img src="img/logo-solo.png" alt="NEODOMOS" onerror="this.outerHTML='<b>NEODOMOS</b>'"></a>
    <button class="burger" aria-label="Abrir menú" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
    <nav>
      <a class="l ${pagina === "home" ? "act" : ""}" href="index.html">Inicio</a>
      <a class="l lock" title="Próximamente" onclick="return false">Tour Virtual ${icono("candado")}</a>
      <a class="l ${pagina === "contacto" ? "act" : ""}" href="contacto.html">Contacto</a>
      <a class="btn btn-v" href="${wa(CONFIG.mensajeCotizar)}" target="_blank" rel="noopener">Cotizar mi domo</a>
    </nav>`;

  $("#site-footer").innerHTML = `
    <div class="foot">
      <div><b class="fb">NEODOMOS</b>
        <p>Domos modulares inteligentes y sustentables. Arquitectura del futuro, hoy.</p>
        <a class="fi" href="${CONFIG.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icono("instagram")}</a></div>
      <div><h4>Navegación</h4>
        <a href="index.html">Inicio</a><a href="index.html#proceso">Cómo funciona</a>
        <a href="index.html#faq">Preguntas frecuentes</a><a href="contacto.html">Contacto</a></div>
      <div><h4>Contacto</h4>
        <a href="${wa(CONFIG.mensajeGeneral)}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
        <span>${CONFIG.zona}</span><span>Consultá tu zona de cobertura</span></div>
      <div><h4>Legal</h4>
        <!-- CAMBIAR: href="#" por las páginas reales cuando las tengas -->
        <a href="#">Política de privacidad</a><a href="#">Términos y condiciones</a></div>
    </div>
    <div class="fcopy">© ${new Date().getFullYear()} NEODOMOS · Todos los derechos reservados</div>`;

  document.querySelectorAll("[data-ico]").forEach(e => e.innerHTML = icono(e.dataset.ico));
  document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => $("nav").classList.remove("open")));
}
