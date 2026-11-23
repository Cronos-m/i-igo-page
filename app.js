// =========================================================================
// CONFIGURACIÓN PRINCIPAL - IÑIGO ILUSIONISTA Y BURBUJÓLOGO
// =========================================================================
const WHATSAPP_NUMBER = "573000000000"; // Reemplaza con tu número real
const MOSTRAR_TESTIMONIOS = false;
let currentLang = "es";

// =========================================================================
// MAPA CENTRAL DE IMÁGENES (CARPETA img/ · camelCase.png)
// =========================================================================
const SITE_IMAGES = {
  hero: {
    src: "img/fotoPrincipal.png",
    alt: "Iñigo en escena"
  },
  videoCarousel: [
    {
      poster: "img/portadaShow.png"
    },
    {
      poster: "img/portadaBurbujas.png"
    }
  ],
  gallery: [
    {
      src: "img/galeriaUno.png",
      alt: "Laboratorio de Burbujas"
    },
    {
      src: "img/galeriaDos.png",
      alt: "Show de Magia"
    },
    {
      src: "img/galeriaTres.png",
      alt: "Magia Íntima"
    },
    {
      src: "img/galeriaCuatro.png",
      alt: "Gran Escenario"
    }
  ],
  shows: {
    "magia-0": { src: "img/elViajeMagico.png" },
    "magia-1": { src: "img/secretosAContraluz.png" },
    "magia-2": { src: "img/magiaParaTodaLaFamilia.png" },
    "magia-3": { src: "img/magiaDeCerca.png" },
    "burbujas-0": { src: "img/showDeBurbujas.png" },
    "burbujas-1": { src: "img/laboratorioDeBurbujas.png" },
    "burbujas-2": { src: "img/burbujasAlViento.png" },
    "burbujas-3": { src: "img/animacionConBurbujas.png" },
    "magia-burbujas-0": { src: "img/magiaMasShowDeBurbujas.png" },
    "magia-burbujas-1": { src: "img/magiaMasShowDeBurbujasMasAnimacion.png" },
    "experiencias-especiales-0": { src: "img/laLevedadDelMomentoMagico.png" },
    "experiencias-especiales-1": { src: "img/violinMasBurbujas.png" },
    "experiencias-especiales-2": { src: "img/elCircoDeLasBurbujas.png" }
  }
};

// Estado del carrusel de 2 videos de YouTube (sin reproducción automática)
let currentVideoIndex = 0;
let playingVideoIndex = null;

// Estado de categorías desplegadas y tarjetas extendidas en shows.html
const openCategories = new Set();
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
  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.textContent = currentLang === "es" ? "EN / ES" : "ES / EN";
  }
  updateContent();
}

function applyImageSrc(imgElement, src, altText) {
  if (!imgElement || !src) return;
  if (altText) imgElement.alt = altText;
  imgElement.src = src;
}

// =========================================================================
// FOTO PRINCIPAL (HERO) Y GALERÍA AUDIOVISUAL (EN INICIO)
// =========================================================================
function renderHeroImage() {
  const heroImg = document.getElementById("hero-img");
  if (heroImg && SITE_IMAGES.hero) {
    applyImageSrc(heroImg, SITE_IMAGES.hero.src, SITE_IMAGES.hero.alt);
  }
}

function renderGallerySection() {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  const t = translations[currentLang];
  galleryGrid.innerHTML = SITE_IMAGES.gallery.map((item, idx) => {
    const caption = t.gallery.captions[idx] || item.alt;
    return `
      <button type="button"
              onclick="openLightbox('${item.src}', ${idx})"
              class="group relative aspect-[3/4] w-full overflow-hidden border border-gold/20 rounded-sm cursor-pointer bg-theater/15">
        <img src="${item.src}"
             alt="${caption}"
             class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
        <div class="absolute inset-0 bg-obsidian/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span class="text-xs uppercase tracking-widest text-gold">${t.gallery.zoomLabel}</span>
        </div>
      </button>
    `;
  }).join("");
}

// =========================================================================
// CARRUSEL DE 2 VIDEOS DE YOUTUBE (EN INICIO)
// =========================================================================
function setVideoSlide(index) {
  const videos = translations[currentLang].carousel.videos;
  const total = videos.length;
  currentVideoIndex = ((index % total) + total) % total;
  playingVideoIndex = null;
  renderVideoCarousel();
}

function prevVideoSlide() {
  setVideoSlide(currentVideoIndex - 1);
}

function nextVideoSlide() {
  setVideoSlide(currentVideoIndex + 1);
}

function playCarouselVideo(index) {
  playingVideoIndex = index;
  renderVideoCarousel();
}

function renderVideoCarousel() {
  const viewport = document.getElementById("youtube-carousel-viewport");
  const dotsContainer = document.getElementById("youtube-carousel-dots");
  if (!viewport) return;

  const t = translations[currentLang];
  const videos = t.carousel.videos;
  const video = videos[currentVideoIndex];
  const posterObj = SITE_IMAGES.videoCarousel[currentVideoIndex] || {};
  const posterSrc = posterObj.poster || "img/portadaShow.png";

  if (playingVideoIndex === currentVideoIndex) {
    viewport.innerHTML = `
      <iframe class="w-full h-full"
              src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0"
              title="${video.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
      </iframe>
    `;
  } else {
    viewport.innerHTML = `
      <button type="button" onclick="playCarouselVideo(${currentVideoIndex})"
              class="relative w-full h-full flex items-center justify-center cursor-pointer group text-center bg-theater/25">
        <img src="${posterSrc}"
             alt="${video.title}"
             class="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-700" />
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/25 to-transparent pointer-events-none"></div>
        <div class="relative z-10 px-4 sm:px-6 max-w-full">
          <div class="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-gold bg-obsidian/85 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all mb-3 sm:mb-4">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <p class="font-serif text-lg sm:text-2xl text-bone">${video.title}</p>
          <p class="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-lavender mt-1">${t.carousel.playHint}</p>
        </div>
      </button>
    `;
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = videos.map((v, idx) => {
      const active = idx === currentVideoIndex;
      return `
        <button type="button"
                onclick="setVideoSlide(${idx})"
                aria-label="Video ${idx + 1}"
                class="h-2.5 rounded-full transition-all cursor-pointer ${active ? 'w-7 sm:w-8 bg-gold' : 'w-2.5 bg-lavender/40 hover:bg-gold/60'}">
        </button>
      `;
    }).join("");
  }
}

// =========================================================================
// SECCIÓN DESPLEGABLE DE SHOWS (EN SHOWS.HTML)
// =========================================================================
function toggleCategory(catId) {
  if (openCategories.has(catId)) {
    openCategories.delete(catId);
  } else {
    openCategories.add(catId);
  }
  renderShowsSection();
}

function toggleShowCard(cardKey, event) {
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

function renderShowsSection() {
  const t = translations[currentLang];
  const showsGrid = document.getElementById("shows-grid");
  if (!showsGrid) return;

  let html = "";

  t.shows.categories.forEach((cat, catIndex) => {
    const isOpen = openCategories.has(cat.id);

    html += `
      <div class="border ${isOpen ? 'border-gold/60 bg-theater/15' : 'border-gold/25 bg-theater/10 hover:border-gold/50'} rounded-sm transition-all duration-300 overflow-hidden min-w-0">
        <button type="button"
                onclick="toggleCategory('${cat.id}')"
                aria-expanded="${isOpen}"
                class="w-full text-left p-4 sm:p-6 md:px-8 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none group">
          <div class="flex items-baseline gap-2.5 sm:gap-4 min-w-0">
            <span class="font-serif italic text-lg sm:text-2xl text-gold/80 shrink-0">0${catIndex + 1}.</span>
            <h2 class="font-serif text-xl sm:text-3xl md:text-4xl text-bone group-hover:text-gold transition-colors break-words">
              ${cat.title}
            </h2>
          </div>

          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <span class="hidden md:inline text-[11px] uppercase tracking-[0.2em] text-lavender group-hover:text-gold transition-colors">
              ${isOpen ? t.shows.closeCategoryLabel : t.shows.openCategoryLabel}
            </span>
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold font-serif text-lg sm:text-xl transition-transform duration-300 ${isOpen ? 'rotate-45 bg-gold text-obsidian' : ''}">
              +
            </span>
          </div>
        </button>

        <div class="${isOpen ? 'block' : 'hidden'} px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-1 border-t border-gold/15">
          <p class="text-lavender font-light text-sm sm:text-base max-w-4xl leading-relaxed mt-4 mb-6 sm:mb-8">
            ${cat.intro}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            ${cat.items.map((item, itemIdx) => {
              const cardKey = `${cat.id}-${itemIdx}`;
              const isExpanded = expandedShowCards.has(cardKey);
              const showImgObj = SITE_IMAGES.shows[cardKey] || { src: "img/fotoPrincipal.png" };

              return `
                <article data-show-card="${cardKey}"
                         onclick="toggleShowCard('${cardKey}', event)"
                         class="show-card-interactive ${isExpanded ? 'is-expanded border-gold/70' : 'border-gold/20'} bg-obsidian/90 hover:border-gold/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between cursor-pointer group shadow-lg min-w-0">
                  
                  <div class="relative aspect-[16/10] w-full overflow-hidden bg-theater/25 border-b border-gold/15">
                    <img src="${showImgObj.src}"
                         alt="${item.title}"
                         class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent pointer-events-none"></div>
                    <span class="absolute top-3 left-3 bg-obsidian/85 backdrop-blur-sm border border-gold/40 text-gold text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm">
                      ${item.label}
                    </span>
                  </div>

                  <div class="p-4 sm:p-6 flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div class="flex items-start justify-between gap-3">
                        <h3 class="font-serif text-xl sm:text-2xl text-bone group-hover:text-gold transition-colors">
                          ${item.title}
                        </h3>
                        <span class="text-sm uppercase tracking-wider text-gold/80 shrink-0 pt-0.5">
                          ${isExpanded ? '−' : '+'}
                        </span>
                      </div>

                      <p class="text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.16em] text-lavender/80 mt-2">
                        ${t.shows.expandHint}
                      </p>

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

                    <div class="pt-4 sm:pt-5 mt-4 border-t border-gold/10">
                      <button type="button"
                              data-whatsapp-btn="true"
                              onclick="cotizarWhatsApp('${item.whatsappKey}')"
                              class="w-full border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all py-3 text-xs uppercase tracking-[0.18em] font-medium cursor-pointer rounded-sm">
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

// =========================================================================
// RENDERIZADO GENERAL Y TRADUCCIÓN
// =========================================================================
function updateContent() {
  const t = translations[currentLang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.getAttribute("data-i18n").split(".");
    let val = t;
    keys.forEach(k => { if (val) val = val[k]; });
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const keys = el.getAttribute("data-i18n-placeholder").split(".");
    let val = t;
    keys.forEach(k => { if (val) val = val[k]; });
    if (val) el.placeholder = val;
  });

  const marqueeContainer = document.getElementById("marquee-container");
  if (marqueeContainer) {
    let marqueeHTML = "";
    const items = [...t.marquee, ...t.marquee];
    items.forEach(text => {
      marqueeHTML += `<span class="whitespace-nowrap">${text}</span><span class="text-lavender/40 shrink-0">✦</span>`;
    });
    marqueeContainer.innerHTML = marqueeHTML;
  }

  renderHeroImage();
  renderGallerySection();
  renderVideoCarousel();
  renderShowsSection();

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
        <div class="border border-gold/20 bg-obsidian/80 p-5 sm:p-7 rounded-sm hover:border-gold transition-colors min-w-0">
          <svg class="w-7 h-7 sm:w-8 sm:h-8 text-gold mb-4 sm:mb-5" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24">${icons[i]}</svg>
          <h3 class="font-serif text-xl sm:text-2xl text-bone mb-2">${srv.title}</h3>
          <p class="text-sm text-lavender font-light leading-relaxed">${srv.desc}</p>
        </div>
      `;
    });
    servicesGrid.innerHTML = servHTML;
  }

  const pillarsList = document.getElementById("pillars-list");
  if (pillarsList) {
    let pillarsHTML = "";
    t.about.pillars.forEach((pil, idx) => {
      pillarsHTML += `
        <li class="flex gap-3 sm:gap-4 min-w-0">
          <span class="text-gold font-serif italic text-lg sm:text-xl shrink-0">0${idx + 1}.</span>
          <div class="min-w-0">
            <h4 class="font-medium text-bone text-xs sm:text-sm uppercase tracking-wider">${pil.title}</h4>
            <p class="text-sm text-lavender font-light mt-1">${pil.desc}</p>
          </div>
        </li>
      `;
    });
    pillarsList.innerHTML = pillarsHTML;
  }

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
  if (!modal || !imgEl) return;
  imgEl.src = src;
  document.getElementById("lightbox-caption").textContent = t.gallery.captions[indexCaption] || "";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });