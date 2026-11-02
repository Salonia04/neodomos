/* NEODOME · DATOS Y FUNCIONES COMPARTIDAS (index, info y contacto).
   Todo lo editable (contacto, series, textos) se cambia SOLO ACÁ. */

/* 1) CONFIGURACIÓN ← CAMBIAR */
const CONFIG = {
  marca: "NEODOME",
  /* CONTACTOS COMERCIALES ← CAMBIAR. Para agregar otro, copiá un bloque { ... }.
     El PRIMERO de la lista es el que recibe los botones "Solicitar información" (WhatsApp). */
  contactos: [
    { nombre: "Enzo Fernández",   whatsapp: "5491151039571", telefono: "+54 9 11 5103 9571", email: "enzoferok@gmail.com",  zona: "CABA, Argentina" },
    { nombre: "Fernando Salonia", whatsapp: "5493513991739", telefono: "+54 9 351 399 1739", email: "fersalonia@gmail.com", zona: "Córdoba, Argentina" }
  ],
  instagram: "https://www.instagram.com/neodomos", // CONFIRMAR: ¿cuenta oficial de NEODOME?
  mensajeCotizar: "Hola! Quiero recibir información sobre las cápsulas modulares NEODOME.",
  mensajeGeneral: "Hola! Quiero más información sobre NEODOME."
};
// Atajos al contacto principal (el primero de la lista de arriba)
Object.assign(CONFIG, { contacto: CONFIG.contactos[0].nombre, whatsapp: CONFIG.contactos[0].whatsapp,
  telefono: CONFIG.contactos[0].telefono, email: CONFIG.contactos[0].email, zona: CONFIG.contactos[0].zona });
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
  ducha: '<path d="M6 21v-9a5 5 0 0 1 9-3M13 9l3 3M9 16v.01M12 18v.01M15 16v.01"/>',
  salud: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 7v10M7 12h10"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
const icono = n => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONOS[n] || ""}</svg>`;

/* 3) SERIES ← ACÁ AGREGÁS / EDITÁS
   specs: SOLO datos validados contra el plano (si está vacío, la ficha dice "en validación").
   fondo / galeria: poné el render de CADA serie (hoy varias reutilizan el mismo). */
/* FOTO DE FONDO DE LA PORTADA ← CAMBIAR
   Hoy todos los botones usan la misma foto. Cuando tengas las demás, en cada serie
   cambiá  portada: PORTADA  por  portada: "img/portada-work.jpg"  (por ejemplo). */
const PORTADA = "img/portada.jpg";

const NODOS = [
  {"id": "stay-suite", "nombre": "Stay Suite", "uso": "Alojamiento premium · Baño y cocina", "icono": "cama", "fondo": "img/series/stay-suite-1.jpg", "portada": PORTADA, "resumen": "Cápsula modular inteligente de diseño futurista y tecnología aeronáutica: confortable y adaptable a cualquier entorno.", "titulo": "Stay Suite", "descripcion": "Alojamiento premium con baño y cocina integrados en un solo módulo. Medidas y ambientes según los planos de la presentación.", "specs": {"Ancho": "3,00 m", "Ambientes": "Dormitorio, baño y sector de cocina y estar"}, "orientado": ["Alojamiento premium", "Baño y cocina", "Turismo y hotelería"], "galeria": ["img/series/stay-suite-1.jpg", "img/series/stay-suite-2.jpg", "img/series/stay-suite-3.jpg"]},
  {"id": "studio-sin-bano", "nombre": "Studio sin baño", "uso": "Cápsula habitacional compacta", "icono": "estudio", "fondo": "img/series/studio-sin-bano-1.jpg", "portada": PORTADA, "resumen": "Cápsula habitacional compacta, pensada para estadías cortas en un espacio optimizado.", "titulo": "Studio sin baño", "descripcion": "Cápsula habitacional compacta, pensada para estadías cortas en un espacio optimizado. Medidas y ambientes según los planos de la presentación.", "specs": {"Dimensiones": "4,50 × 3,00 m", "Ambientes": "Ambiente único con dos camas"}, "orientado": ["Cápsula habitacional compacta", "Sin baño incorporado"], "galeria": ["img/series/studio-sin-bano-1.jpg", "img/series/studio-sin-bano-2.jpg", "img/series/studio-sin-bano-3.jpg", "img/series/studio-sin-bano-4.jpg"]},
  {"id": "studio-con-bano", "nombre": "Studio con baño", "uso": "Cápsula habitacional con sanitario", "icono": "ducha", "fondo": "img/series/studio-con-bano-1.jpg", "portada": PORTADA, "resumen": "Cápsula habitacional con sanitario incorporado, lista para alojar en un formato compacto.", "titulo": "Studio con baño", "descripcion": "Cápsula habitacional con sanitario incorporado, lista para alojar en un formato compacto. Medidas y ambientes según los planos de la presentación.", "specs": {"Dimensiones": "4,50 × 3,00 m", "Ambientes": "Ambiente con camas y sanitario"}, "orientado": ["Cápsula habitacional con sanitario", "Alojamiento compacto"], "galeria": ["img/series/studio-con-bano-1.jpg", "img/series/studio-con-bano-2.jpg", "img/series/studio-con-bano-3.jpg", "img/series/studio-con-bano-4.jpg"]},
  {"id": "sanitario", "nombre": "Sanitario independiente", "uso": "Línea independiente de sanitarios", "icono": "ducha", "fondo": "img/series/sanitario-1.jpg", "portada": PORTADA, "resumen": "Módulo independiente de sanitarios y cocina, para complementar otros espacios.", "titulo": "Sanitario independiente", "descripcion": "Módulo independiente de sanitarios y cocina, para complementar otros espacios. Medidas y ambientes según los planos de la presentación.", "specs": {"Dimensiones": "4,50 × 3,00 m", "Ambientes": "Cocina, lavadero, ducha y baño"}, "orientado": ["Línea independiente de sanitarios", "Complemento de otros módulos"], "galeria": ["img/series/sanitario-1.jpg", "img/series/sanitario-2.jpg", "img/series/sanitario-3.jpg", "img/series/sanitario-4.jpg"]},
  {"id": "work", "nombre": "Work", "uso": "Coworking y oficinas remotas", "icono": "maletin", "fondo": "img/series/work-1.jpg", "portada": PORTADA, "resumen": "Oficinas y coworking remotos en un módulo con puestos de trabajo y sanitario.", "titulo": "Work", "descripcion": "Oficinas y coworking remotos en un módulo con puestos de trabajo y sanitario. Medidas y ambientes según los planos de la presentación.", "specs": {"Ambientes": "Dos sectores de trabajo y sanitario"}, "orientado": ["Coworking", "Oficinas remotas", "Empresas y obras"], "galeria": ["img/series/work-1.jpg", "img/series/work-2.jpg", "img/series/work-3.jpg", "img/series/work-4.jpg"]},
  {"id": "safe", "nombre": "Safe · Emergencia", "uso": "Supervivencia y emergencias", "icono": "salud", "fondo": "img/series/safe-1.jpg", "portada": PORTADA, "resumen": "Módulos para supervivencia y emergencias: alojamiento rápido con dormitorios y baños.", "titulo": "Safe · Emergencia", "descripcion": "Módulos para supervivencia y emergencias: alojamiento rápido con dormitorios y baños. Medidas y ambientes según los planos de la presentación.", "specs": {"Largo total": "10,50 m", "Ambientes": "Dos dormitorios con baño"}, "orientado": ["Supervivencia y emergencias", "Alojamiento transitorio"], "galeria": ["img/series/safe-1.jpg", "img/series/safe-2.jpg", "img/series/safe-3.jpg"]},
  {"id": "guardian", "nombre": "Guardian · Shield", "uso": "Vigilancia y seguridad", "icono": "escudo", "fondo": "img/series/guardian-1.jpg", "portada": PORTADA, "resumen": "Garita de vigilancia y seguridad con puestos de control y sanitario.", "titulo": "Guardian · Shield", "descripcion": "Garita de vigilancia y seguridad con puestos de control y sanitario. Medidas y ambientes según los planos de la presentación.", "specs": {"Ancho": "4,50 m", "Ambientes": "Garita con dos puestos y sanitario"}, "orientado": ["Vigilancia y seguridad", "Control de acceso y monitoreo"], "galeria": ["img/series/guardian-1.jpg", "img/series/guardian-2.jpg", "img/series/guardian-3.jpg", "img/series/guardian-4.jpg"]},
  {"id": "food-pod", "nombre": "Food Pod", "uso": "Kiosco y cafetería", "icono": "cubiertos", "fondo": "img/series/food-pod-1.jpg", "portada": PORTADA, "resumen": "Kiosco o cafetería modular con mostrador, cafetera y góndolas.", "titulo": "Food Pod", "descripcion": "Kiosco o cafetería modular con mostrador, cafetera y góndolas. Medidas y ambientes según los planos de la presentación.", "specs": {"Dimensiones": "4,50 × 3,00 m", "Ambientes": "Mostrador, cafetera, estantes y góndolas"}, "orientado": ["Kiosco y cafetería", "Espacios públicos"], "galeria": ["img/series/food-pod-1.jpg", "img/series/food-pod-2.jpg", "img/series/food-pod-3.jpg"]}
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
      ${CONFIG.contactos.map(c => `<div><h4>Contacto comercial</h4><span>${c.nombre}</span>
        <a href="https://wa.me/${c.whatsapp}?text=${encodeURIComponent(CONFIG.mensajeGeneral)}" target="_blank" rel="noopener">${c.telefono}</a>
        <a href="mailto:${c.email}">${c.email}</a><span>${c.zona}</span></div>`).join("")}
    </div>
    <div class="fcopy">${AVISO}<br>© ${new Date().getFullYear()} NEODOME · Todos los derechos reservados</div>`;
  document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => $("nav").classList.remove("open")));
}
