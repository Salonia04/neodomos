/* NEODOME · DATOS Y FUNCIONES COMPARTIDAS (index, info y contacto).
   Todo lo editable (contacto, series, textos) se cambia SOLO ACÁ. */

/* 1) CONFIGURACIÓN ← CAMBIAR */
const CONFIG = {
  marca: "NEODOME",
  contacto: "Enzo Fernández",
  whatsapp: "5491151039571",
  telefono: "+54 9 11 5103 9571",
  email: "enzoferok@gmail.com",
  zona: "CABA, Argentina",
  instagram: "https://www.instagram.com/neodomos", // CONFIRMAR: ¿cuenta oficial de NEODOME?
  mensajeCotizar: "Hola! Quiero recibir información sobre las cápsulas modulares NEODOME.",
  mensajeGeneral: "Hola! Quiero más información sobre NEODOME."
};
const AVISO = "Imágenes conceptuales. Diseño y equipamiento sujetos a configuración y validación técnica.";
const $ = s => document.querySelector(s);
const wa = m => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m)}`;

/* 2) ÍCONOS (SVG de trazo fino) */
const ICONOS = {
  cama: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.5"/>',
  estudio: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 11h16M9 11v8"/>',
  maletin: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 13h18"/>',
  escudo: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
  cubiertos: '<path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 21V3c-2 1-3 4-3 8h3"/>',
  candado: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  llave: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3"/>',
  clima: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
  led: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  diseno: '<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  movilidad: '<path d="M4 12h16M15 7l5 5-5 5"/>',
  escala: '<path d="M4 20V10M10 20V6M16 20V13M20 20V3"/>',
  estrella: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  rayo: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
  hoja: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19c3-5 6-8 10-10"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
const icono = n => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONOS[n] || ""}</svg>`;

/* 3) SERIES ← ACÁ AGREGÁS / EDITÁS
   specs: SOLO datos validados contra el plano (si está vacío, la ficha dice "en validación").
   fondo / galeria: poné el render de CADA serie (hoy varias reutilizan el mismo). */
const NODOS = [
  { id: "stay-suite", nombre: "Stay Suite", uso: "Habitacional · Turismo / Hoteles", icono: "cama", fondo: "img/domo-disponible.jpg",
    resumen: "Cápsula modular inteligente para alojamiento: diseño futurista, tecnología y confort en un formato compacto.",
    titulo: "Stay Suite",
    descripcion: "Serie de alojamiento premium para turismo y hotelería. Configuraciones (con o sin baño) a definir según el plano de cada modelo.",
    specs: {}, orientado: ["Turismo y hoteles", "Alojamiento premium", "Domótica y acceso digital (según configuración)"],
    galeria: ["img/domo-disponible.jpg", "img/domo-blanco.jpg", "img/domo-ocupado.jpg"] },
  { id: "stay-studio", nombre: "Stay Studio", uso: "Alojamiento compacto", icono: "estudio", fondo: "img/domo-blanco.jpg",
    resumen: "Variante de alojamiento de la línea Stay, pensada para estadías cortas en un espacio optimizado.",
    titulo: "Stay Studio",
    descripcion: "Variante de la línea Stay. Sus características y diferencias con Stay Suite se detallarán al validar el modelo.",
    specs: {}, orientado: ["Estadías cortas", "Espacio optimizado"], galeria: ["img/domo-blanco.jpg"] },
  { id: "work", nombre: "Work", uso: "Oficinas · Empresas / Obras", icono: "maletin", fondo: "img/domo-blanco.jpg",
    resumen: "Espacios de trabajo modulares para empresas, obras y emprendimientos que necesitan instalarse con agilidad.",
    titulo: "Work",
    descripcion: "Serie orientada a oficinas y espacios de trabajo modulares, transportables y adaptables al lugar.",
    specs: {}, orientado: ["Oficinas", "Empresas y obras", "Equipamiento según configuración"], galeria: ["img/domo-blanco.jpg"] },
  { id: "guardian", nombre: "Guardian", uso: "Control de acceso · Seguridad / Minería", icono: "escudo", fondo: "img/domo-ocupado.jpg",
    resumen: "Cápsula de control y monitoreo para accesos, seguridad y operaciones remotas.",
    titulo: "Guardian",
    descripcion: "Serie pensada para control de acceso y monitoreo en espacios de seguridad, minería y operaciones.",
    specs: {}, orientado: ["Control de acceso", "Monitoreo", "Seguridad y minería"], galeria: ["img/domo-ocupado.jpg"] },
  { id: "food-pod", nombre: "Food Pod", uso: "Gastronomía · Espacios públicos", icono: "cubiertos", fondo: "img/domo-blanco.jpg",
    resumen: "Kiosco o cafetería modular para espacios públicos y propuestas gastronómicas.",
    titulo: "Food Pod",
    descripcion: "Serie gastronómica en formato kiosco o cafetería, para espacios públicos y desarrollos turísticos.",
    specs: {}, orientado: ["Kiosco / cafetería", "Espacios públicos", "Equipamiento según configuración"], galeria: ["img/domo-blanco.jpg"] }
];

/* 4) NAVBAR Y FOOTER */
function montarLayout(pagina) {
  $("#site-header").innerHTML = `
    <a class="logo" href="index.html"><img src="img/logo-neodome-blanco.png" alt="NEODOME"></a>
    <button class="burger" aria-label="Abrir menú" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
    <nav>
      <a class="l ${pagina === "home" ? "act" : ""}" href="index.html">Inicio</a>
      <a class="l" href="index.html#series">Series</a>
      <a class="l lock" title="Próximamente" onclick="return false">Tour Virtual ${icono("candado")}</a>
      <a class="l ${pagina === "contacto" ? "act" : ""}" href="contacto.html">Contacto</a>
      <a class="btn btn-v" href="${wa(CONFIG.mensajeCotizar)}" target="_blank" rel="noopener">Solicitar información</a>
    </nav>`;
  $("#site-footer").innerHTML = `
    <div class="foot">
      <div><img class="flogo" src="img/logo-neodome-blanco.png" alt="NEODOME">
        <p>Espacios inteligentes para un mejor futuro.</p>
        <a class="fi" href="${CONFIG.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icono("instagram")}</a></div>
      <div><h4>Navegación</h4><a href="index.html">Inicio</a><a href="index.html#series">Series</a><a href="index.html#proceso">Cómo trabajamos</a><a href="contacto.html">Contacto</a></div>
      <div><h4>Contacto comercial</h4><span>${CONFIG.contacto}</span>
        <a href="${wa(CONFIG.mensajeGeneral)}" target="_blank" rel="noopener">${CONFIG.telefono}</a>
        <a href="mailto:${CONFIG.email}">${CONFIG.email}</a><span>${CONFIG.zona}</span></div>
    </div>
    <div class="fcopy">${AVISO}<br>© ${new Date().getFullYear()} NEODOME · Todos los derechos reservados</div>`;
  document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => $("nav").classList.remove("open")));
}
