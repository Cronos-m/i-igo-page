// =========================================================================
// CONFIGURACIÓN PRINCIPAL - IÑIGO ILUSIONISTA Y BURBUJÓLOGO
// =========================================================================
const WHATSAPP_NUMBER = "+573229261864"; // Reemplaza con tu número oficial
const MOSTRAR_TESTIMONIOS = false;
let currentLang = "es";

// Estado de categorías desplegadas (ninguna o las que el usuario abra)
const openCategories = new Set();

// Estado de tarjetas de show extendidas al tocar/seleccionar en móvil o clic
const expandedShowCards = new Set();

document.addEventListener("DOMContentLoaded", () => {
  const seccionTestimonios = document.getElementById("seccion-testimonios");
  if (seccionTestimonios && MOSTRAR_TESTIMONIOS) {
    seccionTestimonios.classList.remove("hidden");
  }
  updateContent();
});

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  document.getElementById("lang-btn").textContent = currentLang === "es" ? "EN / ES" : "ES / EN";
  updateContent();
}

function toggleCategory(catId) {
  if (openCategories.has(catId)) {
    openCategories.delete(catId);
  } else {
    openCategories.add(catId);
  }
  renderShowsSection();
}

function toggleShowCard(cardKey, event) {
  // Evitar colapsar/expandir si el usuario pulsó directamente el botón de WhatsApp
  if (event && event.target.closest("button[data-whatsapp-btn]")) {
    return;
  }
  if (expandedShowCards.has(cardKey)) {
    expandedShowCards.delete(cardKey);
  } else {
    expandedShowCards.add(cardKey);
  }
  const cardEl = document.querySelector(`[data-show-card="${CSS.escape(cardKey)}"]`);
  if (cardEl) {
    cardEl.classList.toggle("is-expanded", expandedShowCards.has(cardKey));
  }
}

function getFallbackImage(imgPath) {
  const fallbacks = {
    "img/laboratorio-burbujas.jpg": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    "img/show-magia.jpg": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    "img/magia-intima.jpg": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    "img/gran-escenario.jpg": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  };
  return fallbacks[imgPath] || fallbacks["img/show-magia.jpg"];
}

function renderShowsSection() {
  const t = translations[currentLang];
  const showsGrid = document.getElementById("shows-grid");
  if (!showsGrid) return;

  let html = "";

  t.shows.categories.forEach((cat, catIndex) => {
    const isOpen = openCategories.has(cat.id);

    html += `
      <div class="border ${isOpen ? 'border-gold/60 bg-theater/15' : 'border-gold/25 bg-theater/10 hover:border-gold/50'} rounded-sm transition-all duration-300 overflow-hidden">
        <!-- Encabezado Desplegable de la Categoría -->
        <button type="button"
                onclick="toggleCategory('${cat.id}')"
                aria-expanded="${isOpen}"
                class="w-full text-left p-5 sm:p-7 md:px-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group">
          <div class="flex items-baseline gap-3 sm:gap-4">
            <span class="font-serif italic text-xl sm:text-2xl text-gold/80">0${catIndex + 1}.</span>
            <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl text-bone group-hover:text-gold transition-colors">
              ${cat.title}
            </h3>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <span class="hidden sm:inline text-[11px] uppercase tracking-[0.2em] text-lavender group-hover:text-gold transition-colors">
              ${isOpen ? t.shows.closeCategoryLabel : t.shows.openCategoryLabel}
            </span>
            <span class="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold font-serif text-xl transition-transform duration-300 ${isOpen ? 'rotate-45 bg-gold text-obsidian' : ''}">
              +
            </span>
          </div>
        </button>

        <!-- Contenido Desplegable de la Categoría -->
        <div class="${isOpen ? 'block' : 'hidden'} px-5 sm:px-7 md:px-8 pb-7 sm:pb-8 pt-1 border-t border-gold/15">
          <p class="text-lavender font-light text-sm sm:text-base max-w-4xl leading-relaxed mt-4 mb-8">
            ${cat.intro}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${cat.items.map((item, itemIdx) => {
              const cardKey = `${cat.id}-${itemIdx}`;
              const isExpanded = expandedShowCards.has(cardKey);
              const fallbackUrl = getFallbackImage(item.img);

              return `
                <article data-show-card="${cardKey}"
                         onclick="toggleShowCard('${cardKey}', event)"
                         class="show-card-interactive ${isExpanded ? 'is-expanded border-gold/70' : 'border-gold/20'} bg-obsidian/90 hover:border-gold/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between cursor-pointer group shadow-lg">
                  
                  <!-- Fotografía del Show -->
                  <div class="relative aspect-[16/10] w-full overflow-hidden bg-theater/25 border-b border-gold/15">
                    <img src="${item.img}"
                         alt="${item.title}"
                         onerror="this.src='${fallbackUrl}'"
                         class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent pointer-events-none"></div>
                    <span class="absolute top-3 left-3 bg-obsidian/85 backdrop-blur-sm border border-gold/40 text-gold text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm">
                      ${item.label}
                    </span>
                  </div>

                  <!-- Cabecera Visible + Panel de Detalles Extensible -->
                  <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div class="flex items-start justify-between gap-3">
                        <h4 class="font-serif text-2xl text-bone group-hover:text-gold transition-colors">
                          ${item.title}
                        </h4>
                        <span class="text-[11px] uppercase tracking-wider text-gold/80 shrink-0 pt-1">
                          ${isExpanded ? '−' : '+'}
                        </span>
                      </div>

                      <p class="text-[11px] uppercase tracking-[0.16em] text-lavender/80 mt-2">
                        ${t.shows.expandHint}
                      </p>

                      <!-- Detalles Extendidos al pasar cursor o seleccionar -->
                      <div class="show-details-panel mt-3">
                        <div class="show-details-inner space-y-4">
                          <p class="text-lavender font-light text-sm leading-relaxed">
                            ${item.desc}
                          </p>
                          <p class="text-xs text-gold font-medium tracking-wide border-t border-gold/15 pt-3">
                            ${item.meta}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="pt-5 mt-4 border-t border-gold/10">
                      <button type="button"
                              data-whatsapp-btn="true"
                              onclick="cotizarWhatsApp('${item.whatsappKey}')"
                              class="w-full border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all py-3 text-xs uppercase tracking-[0.2em] font-medium cursor-pointer rounded-sm">
                        ${t.shows.btnRequest} →
                      </button>
                    </div>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;
  });

  showsGrid.innerHTML = html;
}

function updateContent() {
  const t = translations[currentLang];

  // 1. Traducir elementos estáticos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.getAttribute("data-i18n").split(".");
    let val = t;
    keys.forEach(k => { if (val) val = val[k]; });
    if (val) el.innerHTML = val;
  });

  // 2. Traducir placeholders con data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const keys = el.getAttribute("data-i18n-placeholder").split(".");
    let val = t;
    keys.forEach(k => { if (val) val = val[k]; });
    if (val) el.placeholder = val;
  });

  // 3. Renderizar cinta marquee
  const marqueeContainer = document.getElementById("marquee-container");
  if (marqueeContainer) {
    let marqueeHTML = "";
    const items = [...t.marquee, ...t.marquee];
    items.forEach(text => {
      marqueeHTML += `<span>${text}</span><span class="text-lavender/40">✦</span>`;
    });
    marqueeContainer.innerHTML = marqueeHTML;
  }

  // 4. Renderizar sección desplegable de espectáculos
  renderShowsSection();

  // 5. Renderizar servicios por tipo de evento
  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    let servHTML = "";
    const icons = [
      `<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />`,
      `<path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />`
    ];
    t.services.items.forEach((srv, i) => {
      servHTML += `
        <div class="border border-gold/20 bg-obsidian/80 p-6 sm:p-7 rounded-sm hover:border-gold transition-colors">
          <svg class="w-8 h-8 text-gold mb-5" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24">${icons[i]}</svg>
          <h3 class="font-serif text-2xl text-bone mb-2">${srv.title}</h3>
          <p class="text-sm text-lavender font-light leading-relaxed">${srv.desc}</p>
        </div>
      `;
    });
    servicesGrid.innerHTML = servHTML;
  }

  // 6. Renderizar los 5 pilares diferenciales
  const pillarsList = document.getElementById("pillars-list");
  if (pillarsList) {
    let pillarsHTML = "";
    t.about.pillars.forEach((pil, idx) => {
      pillarsHTML += `
        <li class="flex gap-4">
          <span class="text-gold font-serif italic text-xl">0${idx + 1}.</span>
          <div>
            <h4 class="font-medium text-bone text-sm uppercase tracking-wider">${pil.title}</h4>
            <p class="text-sm text-lavender font-light mt-1">${pil.desc}</p>
          </div>
        </li>
      `;
    });
    pillarsList.innerHTML = pillarsHTML;
  }

  // 7. Actualizar selects del formulario de contacto
  const selectEvent = document.getElementById("tipo-evento");
  const selectShow = document.getElementById("show-interes");
  if (selectEvent && selectShow) {
    selectEvent.innerHTML = t.contact.optionsEvent.map(opt => `<option value="${opt}">${opt}</option>`).join("");
    selectShow.innerHTML = t.contact.optionsShow.map(opt => `<option value="${opt}">${opt}</option>`).join("");
  }
}

// =========================================================================
// WHATSAPP & LIGHTBOX
// =========================================================================
function cotizarWhatsApp(nombreShow) {
  const mensaje = currentLang === "es"
    ? `¡Hola Iñigo! ✨ Me encantaría recibir información y cotización para el espectáculo:\n• *${nombreShow}*\n\nQuedo atento a tu disponibilidad. ¡Gracias!`
    : `Hello Iñigo! ✨ I would love to receive information and a quote for the show:\n• *${nombreShow}*\n\nI look forward to your availability. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener,noreferrer");
}

function enviarFormularioWhatsApp(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const tipoEvento = document.getElementById("tipo-evento").value;
  const showInteres = document.getElementById("show-interes").value;
  const ciudad = document.getElementById("ciudad").value.trim();
  const fecha = document.getElementById("fecha").value;

  const mensaje = currentLang === "es"
    ? `¡Hola Iñigo! ✨ Me gustaría cotizar un espectáculo con los siguientes detalles:\n\n• *Nombre:* ${nombre}\n• *Tipo de evento:* ${tipoEvento}\n• *Show de interés:* ${showInteres}\n• *Ciudad / País:* ${ciudad}\n• *Fecha tentativa:* ${fecha}\n\n¡Muchas gracias!`
    : `Hello Iñigo! ✨ I would like to quote a show with the following details:\n\n• *Name:* ${nombre}\n• *Event Type:* ${tipoEvento}\n• *Show of Interest:* ${showInteres}\n• *City / Country:* ${ciudad}\n• *Tentative Date:* ${fecha}\n\nThank you very much!`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener,noreferrer");
}

function openLightbox(src, indexCaption) {
  const t = translations[currentLang];
  const modal = document.getElementById("lightbox-modal");
  const imgEl = document.getElementById("lightbox-img");
  imgEl.src = src;
  imgEl.onerror = function () {
    this.src = getFallbackImage(src);
  };
  document.getElementById("lightbox-caption").textContent = t.gallery.captions[indexCaption];
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLightbox() {
  document.getElementById("lightbox-modal").classList.add("hidden");
  document.getElementById("lightbox-modal").classList.remove("flex");
}

document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

function loadDeferredVideo(youtubeId) {
  document.getElementById("video-facade").innerHTML = `
    <iframe class="w-full h-full" src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0" title="Showreel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
}