const translations = {
  es: {
    nav: {
      home: "Inicio",
      showsPage: "Shows",
      contact: "Contacto",
      exploreShows: "Ver Shows",
      quote: "Cotizar"
    },
    hero: {
      badge: "Ilusionista & Burbujólogo",
      titlePart1: "“La magia es un arte que nos permite ",
      titleAccent: "sentir lo imposible",
      titlePart2: "”",
      subtitle: "Magia, ilusionismo y arte de las burbujas para eventos, escenarios y experiencias especiales.",
      btnShowsPage: "Ir a Shows →",
      btnWhatsApp: "Cotizar por WhatsApp"
    },
    marquee: [
      "Ilusionismo Contemporáneo",
      "Burbujas Gigantes",
      "Arte Escénico",
      "Eventos Corporativos",
      "Experiencias Sensoriales",
      "Teatros y Festivales"
    ],
    carousel: {
      badge: "En Escena",
      title: "Videos Destacados",
      subtitle: "Cambia entre ambos videos de YouTube y haz clic para reproducir.",
      prev: "← Anterior",
      next: "Siguiente →",
      playHint: "Haz clic para reproducir en YouTube",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Reel Escénico · Magia e Ilusionismo",
          poster: "img/show-magia.jpg",
          fallbackPoster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Arte de las Burbujas Gigantes en Escena",
          poster: "img/laboratorio-burbujas.jpg",
          fallbackPoster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
        }
      ]
    },
    shows: {
      badge: "Catálogo Oficial",
      title: "Nuestros Espectáculos",
      subtitle: "Selecciona una categoría para desplegar sus espectáculos. Pasa el cursor o toca cada show para extender sus detalles.",
      btnRequest: "Solicitar este show",
      expandHint: "Pasa el cursor o toca para ver detalles",
      openCategoryLabel: "Desplegar categoría",
      closeCategoryLabel: "Ocultar categoría",
      categories: [
        {
          id: "magia",
          title: "Magia",
          intro: "La magia es el arte de sorprender, despertar la curiosidad y convertir al público en parte de lo imposible. Desde espectáculos narrativos y participativos hasta experiencias de mentalismo, magia escénica y magia de cerca, cada propuesta tiene una manera diferente de conectar con distintos públicos.",
          items: [
            {
              label: "Show 1",
              title: "El viaje mágico",
              img: "img/show-magia.jpg",
              desc: "Un espectáculo de magia, humor y participación que invita a niños y niñas a recorrer una historia llena de sorpresas. Una experiencia donde la imaginación y el asombro conducen a una reflexión final.",
              meta: "Duración: 45 minutos. · Público: Niños y niñas.",
              whatsappKey: "Magia - Show 1: El viaje mágico"
            },
            {
              label: "Show 2",
              title: "Secretos a contraluz",
              img: "img/magia-intima.jpg",
              desc: "Una experiencia de magia para adultos que combina mentalismo, fakirismo y magia escénica. Misterio, humor y situaciones sorprendentes que desafían los límites de lo posible.",
              meta: "Duración: 55 minutos. · Público: Adultos.",
              whatsappKey: "Magia - Show 2: Secretos a contraluz"
            },
            {
              label: "Show 3",
              title: "Magia para toda la familia",
              img: "img/gran-escenario.jpg",
              desc: "Un espectáculo participativo que reúne diferentes formas de magia para sorprender a grandes y pequeños. Ideal para celebraciones y encuentros familiares donde todas las generaciones pueden compartir el asombro.",
              meta: "Duración: 30–60 minutos. · Formato: Escénico y participativo.",
              whatsappKey: "Magia - Show 3: Magia para toda la familia"
            },
            {
              label: "Show 4",
              title: "Magia de cerca",
              img: "img/magia-intima.jpg",
              desc: "La magia sucede a pocos centímetros del público. Un formato itinerante e íntimo en el que los espectadores experimentan directamente los efectos mágicos, ideal para restaurantes, recepciones y eventos sociales.",
              meta: "Duración: A convenir. · Formato: Itinerante y de interacción cercana.",
              whatsappKey: "Magia - Show 4: Magia de cerca"
            }
          ]
        },
        {
          id: "burbujas",
          title: "Burbujas",
          intro: "El arte de las burbujas va mucho más allá de un juego infantil. A través de técnicas especializadas, formas sorprendentes, esculturas, vapor y efectos visuales, las burbujas se transforman en un espectáculo capaz de cautivar a públicos de todas las edades.",
          items: [
            {
              label: "Show 1",
              title: "Show de Burbujas",
              img: "img/laboratorio-burbujas.jpg",
              desc: "Un espectáculo escénico donde las burbujas toman vida y se transforman en sorprendentes figuras, esculturas y efectos visuales acompañados de música y vapor.",
              meta: "Público: Todo público. · Duración: 45 minutos.",
              whatsappKey: "Burbujas - Show 1: Show de Burbujas"
            },
            {
              label: "Show 2",
              title: "Laboratorio de Burbujas",
              img: "img/laboratorio-burbujas.jpg",
              desc: "Una experiencia íntima y delicada que explora las posibilidades del arte de las burbujas a través de imágenes y efectos visuales sorprendentes.",
              meta: "Duración: 30 minutos. · Público: Todo público.",
              whatsappKey: "Burbujas - Show 2: Laboratorio de Burbujas"
            },
            {
              label: "Show 3",
              title: "Burbujas al Viento",
              img: "img/gran-escenario.jpg",
              desc: "Un espectáculo al aire libre de gran impacto visual. Burbujas gigantes que flotan a grandes distancias y transforman los espacios abiertos en un escenario de asombro.",
              meta: "Público: Todo público. · Formato: Exterior.",
              whatsappKey: "Burbujas - Show 3: Burbujas al Viento"
            },
            {
              label: "Show 4",
              title: "Animación con Burbujas",
              img: "img/laboratorio-burbujas.jpg",
              desc: "Una experiencia recreativa y participativa donde niños juegan con burbujas gigantes, experimentan con sus formas y tienen la oportunidad de entrar en una burbuja.",
              meta: "Público: Para niños y niñas. · Formato: Participativo y lúdico.",
              whatsappKey: "Burbujas - Show 4: Animación con Burbujas"
            }
          ]
        },
        {
          id: "magia-burbujas",
          title: "Magia + Burbujas",
          intro: "Dos lenguajes artísticos que se encuentran para crear experiencias más completas. La magia y las burbujas se integran en espectáculos que combinan ilusión, humor, participación y belleza visual. Diferentes formatos que permiten disfrutar de ambas disciplinas en una misma presentación.",
          items: [
            {
              label: "Show 1",
              title: "Magia + Show de Burbujas",
              img: "img/gran-escenario.jpg",
              desc: "Una experiencia que reúne lo mejor de la magia y el arte de las burbujas en una presentación dinámica y participativa, pensada para sorprender a públicos de todas las edades.",
              meta: "Duración: 75 minutos. · Formato: Escénico y participativo.",
              whatsappKey: "Magia + Burbujas - Show 1: Magia + Show de Burbujas"
            },
            {
              label: "Show 2",
              title: "Magia + Show de Burbujas + Animación",
              img: "img/laboratorio-burbujas.jpg",
              desc: "Una experiencia ampliada que combina el espectáculo de magia, el show escénico de burbujas y un espacio de interacción donde los asistentes también pueden experimentar con burbujas gigantes.",
              meta: "Duración: 2 horas. · Formato: Espectáculo y actividad participativa.",
              whatsappKey: "Magia + Burbujas - Show 2: Magia + Show de Burbujas + Animación"
            }
          ]
        },
        {
          id: "experiencias-especiales",
          title: "Experiencias Especiales y Colaboraciones",
          intro: "La magia y las burbujas también encuentran nuevas posibilidades cuando se encuentran con otras disciplinas artísticas. Música en vivo, teatro, circo y diferentes lenguajes escénicos se unen para dar vida a propuestas colectivas y experiencias singulares, creadas para escenarios, festivales y eventos especiales.",
          items: [
            {
              label: "Show 1",
              title: "La Levedad del Momento Mágico",
              img: "img/show-magia.jpg",
              desc: "Una obra interdisciplinaria que entrelaza magia, música en vivo, narración oral y coplas. Cuatro artistas construyen una experiencia escénica sensible y poética para compartir en familia.",
              meta: "Duración: 60 minutos. · Formato: Teatral y musical.",
              whatsappKey: "Experiencias Especiales - Show 1: La Levedad del Momento Mágico"
            },
            {
              label: "Show 2",
              title: "Violín + Burbujas",
              img: "img/magia-intima.jpg",
              desc: "Una experiencia sensorial donde la música del violín y el arte de las burbujas se encuentran en una propuesta visual y musical. El repertorio se adapta al ambiente y la intención de cada evento.",
              meta: "Formato: Dúo artístico. · Duración: A convenir.",
              whatsappKey: "Experiencias Especiales - Show 2: Violín + Burbujas"
            },
            {
              label: "Show 3",
              title: "El Circo de las Burbujas",
              img: "img/gran-escenario.jpg",
              desc: "Un espectáculo colectivo que reúne diferentes disciplinas circenses en una propuesta llena de movimiento, humor y asombro, con clown, malabarismo, acrobacia, magia y burbujas.",
              meta: "Formato: Circense y multidisciplinario. · Espacios: Teatros, auditorios y eventos masivos.",
              whatsappKey: "Experiencias Especiales - Show 3: El Circo de las Burbujas"
            }
          ]
        }
      ]
    },
    services: {
      badge: "Adaptabilidad Escénica",
      title: "Eventos a los que Llegamos",
      items: [
        {
          title: "Cumpleaños",
          desc: "Celebraciones familiares inolvidables donde el homenajeado y sus invitados son protagonistas del asombro."
        },
        {
          title: "Eventos corporativos",
          desc: "Lanzamientos de marca, galas y convenciones con mensajes integrados de forma sofisticada y memorable."
        },
        {
          title: "Colegios e instituciones",
          desc: "Funciones pedagógicas y culturales que despiertan la curiosidad, la ciencia detrás de las burbujas y la imaginación."
        },
        {
          title: "Teatros y festivales",
          desc: "Puestas en escena de gran formato con iluminación teatral, dramaturgia visual y conexión con públicos masivos."
        }
      ]
    },
    about: {
      badge: "Trayectoria Artística",
      title: "Sobre Iñigo",
      p1: "Con más de una década dedicada al estudio y la puesta en escena del ilusionismo y el arte efímero de las burbujas, Iñigo ha construido un lenguaje propio donde la técnica clásica se encuentra con la poesía visual contemporánea.",
      p2: "Su trabajo trasciende el truco convencional para convertirse en una experiencia sensorial completa: cada movimiento, cada pausa y cada esfera iridiscente están pensados para devolverle al público la capacidad genuina de maravillarse.",
      quote: "“No busco engañar a los ojos, sino invitar al corazón a recordar cómo se siente creer en lo extraordinario.”",
      ctaShows: "Explorar Catálogo de Shows →",
      pillarsTitle: "¿Qué hace diferente mi trabajo?",
      pillars: [
        { title: "Estética Teatral Cuidada", desc: "Vestuario, utilería e iluminación diseñados con rigor artístico para elevar la atmósfera de cualquier evento." },
        { title: "Humor Blanco y Respetuoso", desc: "Participación del público siempre desde la elegancia, la empatía y el protagonismo positivo." },
        { title: "Fórmulas Propias de Burbujología", desc: "Estructuras gigantes, burbujas con vapor y esculturas aéreas de alta resistencia y brillo iridiscente." },
        { title: "Versatilidad Intergeneracional", desc: "Espectáculos diseñados para cautivar tanto la inocencia de los niños como la exigencia del público adulto." },
        { title: "Producción Autónoma y Puntual", desc: "Equipamiento técnico propio, adaptación a espacios interiores o exteriores y cumplimiento impecable." }
      ]
    },
    contact: {
      badge: "Reserva tu Fecha",
      title: "Lleva lo Imposible a tu Evento",
      desc: "Completa los detalles de tu celebración y recibirás atención directa e inmediata vía WhatsApp para diseñar la propuesta ideal.",
      coverage1: "Disponibles en toda Colombia.",
      coverage2: "Disponibles para giras y festivales internacionales.",
      labelName: "Tu Nombre",
      placeholderName: "Ej: Sofía Morales",
      labelEventType: "Tipo de Evento",
      labelShow: "Show de Interés",
      labelCity: "Ciudad / País",
      placeholderCity: "Ej: Bogotá, Medellín, Madrid...",
      labelDate: "Fecha Tentativa",
      btnSubmit: "Enviar Cotización por WhatsApp →",
      optionsEvent: ["Cumpleaños", "Evento Corporativo", "Colegio o Institución", "Teatro o Festival", "Otro Evento Especial"],
      optionsShow: [
        "El viaje mágico",
        "Secretos a contraluz",
        "Magia para toda la familia",
        "Magia de cerca",
        "Show de Burbujas",
        "Laboratorio de Burbujas",
        "Burbujas al Viento",
        "Animación con Burbujas",
        "Magia + Show de Burbujas",
        "Magia + Show de Burbujas + Animación",
        "La Levedad del Momento Mágico",
        "Violín + Burbujas",
        "El Circo de las Burbujas"
      ]
    },
    footer: "© 2026 Iñigo · Ilusionista y Burbujólogo · Todos los derechos reservados"
  },
  en: {
    nav: {
      home: "Home",
      showsPage: "Shows",
      contact: "Contact",
      exploreShows: "See Shows",
      quote: "Get Quote"
    },
    hero: {
      badge: "Magician & Bubble Artist",
      titlePart1: "“Magic is an art that allows us ",
      titleAccent: "to feel the impossible",
      titlePart2: "”",
      subtitle: "Magic, illusionism, and bubble art for events, stages, and special experiences.",
      btnShowsPage: "Go to Shows →",
      btnWhatsApp: "Get Quote via WhatsApp"
    },
    marquee: [
      "Contemporary Illusionism",
      "Giant Bubbles",
      "Performing Arts",
      "Corporate Events",
      "Sensory Experiences",
      "Theaters & Festivals"
    ],
    carousel: {
      badge: "On Stage",
      title: "Featured Videos",
      subtitle: "Switch between both YouTube videos and click to play.",
      prev: "← Previous",
      next: "Next →",
      playHint: "Click to play on YouTube",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Stage Reel · Magic & Illusionism",
          poster: "img/show-magia.jpg",
          fallbackPoster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Giant Bubble Art on Stage",
          poster: "img/laboratorio-burbujas.jpg",
          fallbackPoster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
        }
      ]
    },
    shows: {
      badge: "Official Catalog",
      title: "Our Shows",
      subtitle: "Select a category to unfold its shows. Hover or tap each show to expand its details.",
      btnRequest: "Request this show",
      expandHint: "Hover or tap to view details",
      openCategoryLabel: "Open category",
      closeCategoryLabel: "Hide category",
      categories: [
        {
          id: "magia",
          title: "Magic",
          intro: "Magic is the art of surprising, awakening curiosity, and making the audience part of the impossible. From narrative and participatory shows to mentalism, stage magic, and close-up magic, each proposal connects with different audiences in its own way.",
          items: [
            {
              label: "Show 1",
              title: "The Magical Journey",
              img: "img/show-magia.jpg",
              desc: "A magic, humor, and participation show inviting boys and girls on a story full of surprises. An experience where imagination and wonder lead to a final reflection.",
              meta: "Duration: 45 minutes. · Audience: Boys and girls.",
              whatsappKey: "Magic - Show 1: The Magical Journey"
            },
            {
              label: "Show 2",
              title: "Backlit Secrets",
              img: "img/magia-intima.jpg",
              desc: "A magic experience for adults combining mentalism, fakirism, and stage magic. Mystery, humor, and surprising situations challenging the limits of the possible.",
              meta: "Duration: 55 minutes. · Audience: Adults.",
              whatsappKey: "Magic - Show 2: Backlit Secrets"
            },
            {
              label: "Show 3",
              title: "Magic for the Whole Family",
              img: "img/gran-escenario.jpg",
              desc: "A participatory show bringing together different forms of magic to surprise young and old alike. Ideal for family celebrations and gatherings where all generations share the wonder.",
              meta: "Duration: 30–60 minutes. · Format: Stage and participatory.",
              whatsappKey: "Magic - Show 3: Magic for the Whole Family"
            },
            {
              label: "Show 4",
              title: "Close-up Magic",
              img: "img/magia-intima.jpg",
              desc: "Magic happens just centimeters from the audience. An itinerant and intimate format where spectators directly experience magical effects, ideal for restaurants, receptions, and social events.",
              meta: "Duration: To be agreed. · Format: Itinerant and close interaction.",
              whatsappKey: "Magic - Show 4: Close-up Magic"
            }
          ]
        },
        {
          id: "burbujas",
          title: "Bubbles",
          intro: "The art of bubbles goes far beyond a children's game. Through specialized techniques, surprising shapes, sculptures, vapor, and visual effects, bubbles transform into a show capable of captivating audiences of all ages.",
          items: [
            {
              label: "Show 1",
              title: "Bubble Show",
              img: "img/laboratorio-burbujas.jpg",
              desc: "A stage show where bubbles come to life and transform into surprising figures, sculptures, and visual effects accompanied by music and vapor.",
              meta: "Audience: All audiences. · Duration: 45 minutes.",
              whatsappKey: "Bubbles - Show 1: Bubble Show"
            },
            {
              label: "Show 2",
              title: "Bubble Lab",
              img: "img/laboratorio-burbujas.jpg",
              desc: "An intimate and delicate experience exploring the possibilities of bubble art through surprising images and visual effects.",
              meta: "Duration: 30 minutes. · Audience: All audiences.",
              whatsappKey: "Bubbles - Show 2: Bubble Lab"
            },
            {
              label: "Show 3",
              title: "Bubbles on the Wind",
              img: "img/gran-escenario.jpg",
              desc: "An outdoor show of high visual impact. Giant bubbles floating across wide distances and transforming open spaces into a stage of wonder.",
              meta: "Audience: All audiences. · Format: Outdoor.",
              whatsappKey: "Bubbles - Show 3: Bubbles on the Wind"
            },
            {
              label: "Show 4",
              title: "Bubble Animation",
              img: "img/laboratorio-burbujas.jpg",
              desc: "A recreational and participatory experience where children play with giant bubbles, experiment with their shapes, and get the chance to step inside a bubble.",
              meta: "Audience: Boys and girls. · Format: Participatory and playful.",
              whatsappKey: "Bubbles - Show 4: Bubble Animation"
            }
          ]
        },
        {
          id: "magia-burbujas",
          title: "Magic + Bubbles",
          intro: "Two artistic languages meet to create more complete experiences. Magic and bubbles integrate into shows combining illusion, humor, participation, and visual beauty. Different formats allowing both disciplines to be enjoyed in a single presentation.",
          items: [
            {
              label: "Show 1",
              title: "Magic + Bubble Show",
              img: "img/gran-escenario.jpg",
              desc: "An experience bringing together the best of magic and bubble art in a dynamic and participatory presentation, designed to surprise audiences of all ages.",
              meta: "Duration: 75 minutes. · Format: Stage and participatory.",
              whatsappKey: "Magic + Bubbles - Show 1: Magic + Bubble Show"
            },
            {
              label: "Show 2",
              title: "Magic + Bubble Show + Animation",
              img: "img/laboratorio-burbujas.jpg",
              desc: "An expanded experience combining the magic show, the stage bubble show, and an interactive space where guests can also experiment with giant bubbles.",
              meta: "Duration: 2 hours. · Format: Show and participatory activity.",
              whatsappKey: "Magic + Bubbles - Show 2: Magic + Bubble Show + Animation"
            }
          ]
        },
        {
          id: "experiencias-especiales",
          title: "Special Experiences & Collaborations",
          intro: "Magic and bubbles also find new possibilities when meeting other artistic disciplines. Live music, theater, circus, and different scenic languages unite to bring collective proposals and unique experiences to life, created for stages, festivals, and special events.",
          items: [
            {
              label: "Show 1",
              title: "The Levity of the Magical Moment",
              img: "img/show-magia.jpg",
              desc: "An interdisciplinary work intertwining magic, live music, oral storytelling, and coplas. Four artists build a sensitive and poetic stage experience to share as a family.",
              meta: "Duration: 60 minutes. · Format: Theatrical and musical.",
              whatsappKey: "Special Experiences - Show 1: The Levity of the Magical Moment"
            },
            {
              label: "Show 2",
              title: "Violin + Bubbles",
              img: "img/magia-intima.jpg",
              desc: "A sensory experience where violin music and bubble art meet in a visual and musical proposal. The repertoire adapts to the atmosphere and intention of each event.",
              meta: "Format: Artistic duo. · Duration: To be agreed.",
              whatsappKey: "Special Experiences - Show 2: Violin + Bubbles"
            },
            {
              label: "Show 3",
              title: "The Bubble Circus",
              img: "img/gran-escenario.jpg",
              desc: "A collective show bringing together different circus disciplines in a proposal full of movement, humor, and wonder, featuring clowning, juggling, acrobatics, magic, and bubbles.",
              meta: "Format: Circus and multidisciplinary. · Spaces: Theaters, auditoriums, and large-scale events.",
              whatsappKey: "Special Experiences - Show 3: The Bubble Circus"
            }
          ]
        }
      ]
    },
    services: {
      badge: "Stage Versatility",
      title: "Events We Cater To",
      items: [
        {
          title: "Birthdays",
          desc: "Unforgettable family celebrations where the guest of honor and their guests take center stage in wonder."
        },
        {
          title: "Corporate Events",
          desc: "Brand launches, galas, and conventions featuring messages integrated seamlessly in a sophisticated and memorable way."
        },
        {
          title: "Schools & Institutions",
          desc: "Educational and cultural performances that spark curiosity, reveal the science behind bubbles, and awaken imagination."
        },
        {
          title: "Theaters & Festivals",
          desc: "Large-scale stage productions featuring theatrical lighting, visual dramaturgy, and connection with mass audiences."
        }
      ]
    },
    about: {
      badge: "Artistic Career",
      title: "About Iñigo",
      p1: "With over a decade dedicated to the study and staging of illusionism and the ephemeral art of bubbles, Iñigo has built a unique language where classical technique meets contemporary visual poetry.",
      p2: "His work transcends the conventional trick to become a complete sensory experience: every movement, every pause, and every iridescent sphere is designed to restore the audience's genuine capacity to marvel.",
      quote: "“I don't seek to fool the eyes, but to invite the heart to remember what it feels like to believe in the extraordinary.”",
      ctaShows: "Explore Shows Catalog →",
      pillarsTitle: "What makes my work different?",
      pillars: [
        { title: "Refined Theatrical Aesthetics", desc: "Costumes, props, and lighting designed with artistic rigor to elevate the atmosphere of any event." },
        { title: "Gentle & Respectful Humor", desc: "Audience participation always approached with elegance, empathy, and positive spotlighting." },
        { title: "Custom Bubble Formulas", desc: "Giant structures, vapor-filled bubbles, and high-strength aerial sculptures with iridescent shine." },
        { title: "Intergenerational Versatility", desc: "Performances designed to captivate both the innocence of children and the refinement of adults." },
        { title: "Autonomous & Timely Production", desc: "Own technical equipment, adaptability to indoor/outdoor spaces, and flawless execution." }
      ]
    },
    contact: {
      badge: "Book Your Date",
      title: "Bring the Impossible to Your Event",
      desc: "Complete your celebration details and receive direct, immediate assistance via WhatsApp to design the ideal proposal.",
      coverage1: "Available throughout Colombia.",
      coverage2: "Available for international tours and festivals.",
      labelName: "Your Name",
      placeholderName: "E.g., Sofia Morales",
      labelEventType: "Event Type",
      labelShow: "Show of Interest",
      labelCity: "City / Country",
      placeholderCity: "E.g., Bogota, Medellin, Madrid...",
      labelDate: "Tentative Date",
      btnSubmit: "Send Quote via WhatsApp →",
      optionsEvent: ["Birthday", "Corporate Event", "School or Institution", "Theater or Festival", "Other Special Event"],
      optionsShow: [
        "The Magical Journey",
        "Backlit Secrets",
        "Magic for the Whole Family",
        "Close-up Magic",
        "Bubble Show",
        "Bubble Lab",
        "Bubbles on the Wind",
        "Bubble Animation",
        "Magic + Bubble Show",
        "Magic + Bubble Show + Animation",
        "The Levity of the Magical Moment",
        "Violin + Bubbles",
        "The Bubble Circus"
      ]
    },
    footer: "© 2026 Iñigo · Magician & Bubble Artist · All rights reserved"
  }
};