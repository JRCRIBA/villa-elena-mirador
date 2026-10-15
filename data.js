/**
 * VILLA ELENA MIRADOR & ECO-RESORT (Paipa, Boyacá)
 * Single Source of Truth (SSOT) - Catálogo Oficial de Servicios, Tarifas y Datos
 * Actualizado: Octubre 2026
 */

const VILLA_ELENA_DATA = {
  resortInfo: {
    name: "Villa Elena Mirador",
    subtitle: "Glamping, Astro-Turismo & Experiencias de Bienestar",
    location: "Paipa, Boyacá, Colombia",
    altitude: "2.525 m.s.n.m.",
    viewpoint: "Vista panorámica al Lago Sochagota y Serranía de Marcura",
    phone: "+57 312 345 6789", // Línea WhatsApp de Atención
    whatsappFormatted: "573123456789",
    email: "reservas@villaelenamirador.com",
    tagline: "Un espacio para mirar hacia adentro y reconectar con lo que realmente importa.",
    description: "La ruta experiencial de Villa Elena Mirador busca una conexión constante con el entorno natural y la cultura local como vía de desconexión del afán de la vida diaria, mediante una experiencia de 24 horas inmerso en la serenidad andina.",
    checkIn: "15:00",
    checkOut: "13:00"
  },

  accommodations: [
    {
      id: "glamping-jacuzzi-1",
      title: "Glamping Mirador Suite 1",
      category: "Glamping de Lujo",
      subtitle: "Con Jacuzzi Hidromasaje Privado & Vista Panorámica",
      price: 280000,
      priceFormatted: "$280.000",
      unit: "pareja / noche",
      capacity: "2 personas (Pareja)",
      badge: "Más Exclusivo",
      image: "assets/curated/glamping_domo.jpeg",
      includesBreakfast: true,
      description: "Suite premium con deck exterior de madera, jacuzzi de hidromasaje privado con agua caliente y vista franca al Lago Sochagota. Cama queen ortopédica, lencería térmica de plumas y amenidades botánicas.",
      amenities: [
        "Jacuzzi privado con hidromasaje",
        "Baño privado con ducha caliente",
        "Desayuno campestre consciente incluido",
        "Deck panorámico privado con asoleadoras",
        "Lencería térmica de alto gramaje",
        "Calefactor / Manta eléctrica y tomas USB",
        "Copas de cortesía y jarra de agua de manantial"
      ]
    },
    {
      id: "glamping-jacuzzi-2",
      title: "Glamping Mirador Suite 2",
      category: "Glamping de Lujo",
      subtitle: "Con Jacuzzi Hidromasaje Privado & Vista al Valle",
      price: 280000,
      priceFormatted: "$280.000",
      unit: "pareja / noche",
      capacity: "2 personas (Pareja)",
      badge: "Alta Demanda",
      image: "assets/curated/hero_vista_lago.jpeg",
      includesBreakfast: true,
      description: "Atmósfera íntima rodeada de flora nativa boyacense. Jacuzzi privado con vista al atardecer sobre las montañas de Paipa, chimenea ecológica y servicio a la habitación.",
      amenities: [
        "Jacuzzi privado con hidromasaje",
        "Baño privado con ducha caliente",
        "Desayuno campestre consciente incluido",
        "Terraza privada con vista al atardecer",
        "Mobiliario de diseño rústico-contemporáneo",
        "Lámparas de lectura y tomas eléctricas",
        "Wi-Fi de fibra óptica en áreas y suite"
      ]
    },
    {
      id: "glamping-domo",
      title: "Glamping Domo Geodésico",
      category: "Domo Panorámico",
      subtitle: "Cúpula Cenital para Observación de Estrellas",
      price: 220000,
      priceFormatted: "$220.000",
      unit: "pareja / noche",
      capacity: "2 personas (Pareja)",
      badge: "Astro-Experiencia",
      image: "assets/curated/glamping_domo.jpeg",
      includesBreakfast: true,
      description: "Estructura geodésica con ventanal panorámico transparente hacia el firmamento estrellado de Paipa. Diseñado para amantes del astroturismo y la geometría sagrada.",
      amenities: [
        "Baño privado con ducha caliente",
        "Desayuno campestre consciente incluido",
        "Cúpula transparente para observación estelar",
        "Cama queen size con plumón térmico",
        "Aislamiento térmico de doble capa",
        "Deck exterior con sillas mecedoras boyacenses"
      ]
    },
    {
      id: "carpa-fija-1",
      title: "Carpa Fija Tipo Glamping 1",
      category: "Carpa Confort",
      subtitle: "Espaciosa con Deck de Madera & Desayuno",
      price: 180000,
      priceFormatted: "$180.000",
      unit: "pareja / noche",
      capacity: "2 personas",
      badge: "Favorito Confort",
      image: "assets/curated/carpa_fija_interior.jpeg",
      includesBreakfast: true,
      description: "Carpa de expedición impermeable montada sobre plataforma elevada de madera. Habitación equipada con cama matrimonial, iluminación cálida y acceso a baños rústicos con agua caliente.",
      amenities: [
        "Cama doble confort vestida",
        "Desayuno campestre consciente incluido",
        "Acceso a baterías de baños rústicos con agua caliente",
        "Deck de madera privado con hamaca",
        "Conexión eléctrica interior y luz ambiental",
        "Cobijas térmicas adicionales de lana boyacense"
      ]
    },
    {
      id: "carpa-fija-2",
      title: "Carpa Fija Compacta 2",
      category: "Carpa Confort",
      subtitle: "Acogedora & Económica para Pareja",
      price: 150000,
      priceFormatted: "$150.000",
      unit: "pareja / noche",
      capacity: "2 personas",
      badge: "Mejor Precio",
      image: "assets/curated/carpa_fija_noche.jpeg",
      includesBreakfast: false,
      description: "Opción práctica y romántica para parejas aventureras. Cama doble con tendidos térmicos, vista al bosque andino y acceso a todas las zonas comunes y fogata.",
      amenities: [
        "Cama doble confortable lista",
        "Acceso a baños rústicos impecables con agua caliente",
        "Tomacorriente y lámpara LED recargable",
        "Acceso libre a zona BBQ, hamacas y mirador",
        "Desayuno campestre opcional por $35.000 c/u"
      ]
    },
    {
      id: "camping-dotado",
      title: "Camping con Dotación Completa",
      category: "Camping Asistido",
      subtitle: "Sin Preocupaciones: Todo Listo a tu Llegada",
      price: 60000,
      priceFormatted: "$60.000",
      unit: "persona / noche",
      capacity: "1 a 4 personas",
      badge: "Aventura Fácil",
      image: "assets/curated/camping_dotado.jpeg",
      includesBreakfast: false,
      description: "No cargues nada pesado. Te entregamos la carpa de alta montaña completamente armada sobre césped nivelado con colchoneta, cobijas térmicas, linterna, panel solar y bebida caliente.",
      amenities: [
        "Alquiler de carpa instalada",
        "Colchones y cobijas térmicas",
        "Linterna de campamento y punto de carga solar",
        "Bebida caliente de bienvenida en la fogata",
        "Acceso a baños y duchas calientes 24h"
      ]
    },
    {
      id: "camping-sencillo",
      title: "Camping Autónomo (Alquiler de Espacio)",
      category: "Camping Libre",
      subtitle: "Trae tus Implementos y Acampa Frente al Mirador",
      price: 30000,
      priceFormatted: "$30.000",
      unit: "persona / noche",
      capacity: "Por persona",
      badge: "Económico",
      image: "assets/curated/camino_luces_astroturismo.jpeg",
      includesBreakfast: false,
      description: "Trae tu propia carpa y equipo. Villa Elena te brinda el lugar más seguro y escénico de Boyacá, con pasto cuidado, vigilancia, batería sanitaria de agua caliente y zona de fogatas.",
      amenities: [
        "Uso de terreno plano y protegido",
        "Acceso a duchas con agua caliente y sanitarios",
        "Acceso a zonas comunes, mirador y hamacas",
        "Punto de agua potable de manantial",
        "Derecho a encendido de fogata comunitaria"
      ]
    }
  ],

  dayPasses: [
    {
      id: "pasadia-parrillero-bbq",
      title: "Pasadía Parrillero BBQ con Mise en Place",
      subtitle: "Parrilla privada, cortes marinados y cero complicaciones",
      category: "Gastronómico & Amigos",
      badge: "Más Popular",
      price: 50000,
      priceFormatted: "$50.000",
      unit: "persona (mín 4 personas)",
      hours: "10:30 a 18:30 (8 Horas)",
      image: "assets/curated/juegos_pasadia.jpeg",
      whyUnique: "Llegas con las manos vacías y encuentras la parrilla encendida, carnes seleccionadas marinadas en finas hierbas, papas al rescoldo Elimani y hamacas privadas frente al Lago Sochagota.",
      includes: [
        "Uso exclusivo de Kiosko BBQ con hamacas y mirador",
        "Mise en place de carnes: lomo de res y lomo de cerdo marinado en cítricos",
        "Chorizo artesanal boyacense y morcilla tradicional",
        "Papas sabaneras rústicas en sal Elimani y mazorcas con mantequilla de ajo",
        "Guacamole casero de aguacate Hass fresco y bebida de panela con limón",
        "Carbón vegetal listo para encender, pinzas de parrilla y delantal",
        "Acceso libre a juegos autóctonos y senderos mirador"
      ]
    },
    {
      id: "pasadia-bienestar-spa",
      title: "Pasadía Bienestar & Spa Holístico",
      subtitle: "Yoga al aire libre, cuencos tibetanos y botánica andina",
      category: "Bienestar & Relax",
      badge: "Santuario Holístico",
      price: 120000,
      priceFormatted: "$120.000",
      unit: "persona",
      hours: "09:30 a 17:00 (7.5 Horas)",
      image: "assets/curated/spa_holistico.jpeg",
      whyUnique: "Una pausa restauradora a 2.525 msnm donde el sonido envolvente de cuencos tibetanos y la aromaterapia de la huerta viva revitalizan tu cuerpo y disuelven el agobio diario.",
      includes: [
        "Clase de Hatha Yoga o meditación pranayama frente al Lago Sochagota",
        "Sesión profunda de Sonidoterapia con cuencos de bronce y cuarzo",
        "Circuito facial botánico con mascarilla de arcilla andina y miel virgen",
        "Exfoliación aromática de menta silvestre y romero del huerto",
        "Almuerzo campestre consciente y balanceado servido en terraza",
        "Barra de infusiones digestivas y mimosas de bienvenida",
        "Hamacas de contemplación y silencio en zona de bosque"
      ]
    },
    {
      id: "pasadia-cultural-arepas",
      title: "Pasadía Cultural con Taller de Arepas & Terruño",
      subtitle: "Manos en la masa, tiestos de barro y cata de Queso Paipa D.O.",
      category: "Cultura & Tradición",
      badge: "Herencia Viva",
      price: 95000,
      priceFormatted: "$95.000",
      unit: "persona",
      hours: "10:00 a 16:30 (6.5 Horas)",
      image: "assets/curated/ritual_bienvenida.jpeg",
      whyUnique: "Aprende el arte de amasar y dorar arepas campesinas sobre tiestos de barro con leña andina, maridado con la única denominación de origen quesera de Colombia.",
      includes: [
        "Taller vivencial de Arepa Boyacense en tiesto de barro y fuego de leña",
        "Cata guiada de Queso Paipa con Denominación de Origen en 3 maduraciones",
        "Paseo etnobotánico por la huerta orgánica 'Farmacia Viva'",
        "Almuerzo tradicional campesino servido en vajilla de barro boyacense",
        "Ritual de café especial filtrado en mesa (V60) y chocolate artesanal",
        "Acceso a miradores y relatos sobre la historia muisca de Marcura"
      ]
    },
    {
      id: "pasadia-astronomico-atardecer",
      title: "Pasadía Atardecer & Noche Astronómica",
      subtitle: "Ocaso dorado sobre el lago, fogata andina y telescopio estelar",
      category: "Astro-Turismo & Noche",
      badge: "Experiencia Estelar",
      price: 110000,
      priceFormatted: "$110.000",
      unit: "persona",
      hours: "15:30 a 22:30 (7 Horas)",
      image: "assets/curated/camino_luces_astroturismo.jpeg",
      whyUnique: "El cielo más despejado y limpio de Boyacá frente al espejo del Lago Sochagota: observa constelaciones y cráteres lunares con telescopio al calor de la fogata y un canelazo.",
      includes: [
        "Montaje de Picnic Boho al atardecer frente al Lago Sochagota",
        "Tabla de quesos madurados, charcutería y copa de vino tinto o blanco",
        "Sesión de astronomía con telescopio computarizado y puntero láser",
        "Relato astronómico y cosmovisión muisca sobre la Laguna de Marcura",
        "Fogata andina bajo las estrellas con canelazo caliente tradicional",
        "Mantas térmicas boyacenses de lana virgen para abrigarte en la noche"
      ]
    }
  ],

  whyVillaElenaPasadia: {
    title: "¿Por qué un Pasadía en Villa Elena es Incomparable en Paipa?",
    subtitle: "Mucho más que un día de campo: una experiencia transformadora de privacidad, alta gastronomía de origen y horizonte andino sin aglomeraciones.",
    pillars: [
      {
        icon: "shield-check",
        title: "Privacidad & Aforo Exclusivo",
        desc: "Cero aglomeraciones ni ruido de balnearios concurridos. Aceptamos un cupo limitado de visitantes por día para garantizar silencio, descanso real y atención de primer nivel."
      },
      {
        icon: "mountain",
        title: "Mirador Panorámico a 2.525 msnm",
        desc: "Balcón natural con vista 180° ininterrumpida hacia el Lago Sochagota y la cordillera oriental. Aire puro de alta montaña y una puesta de sol inolvidable."
      },
      {
        icon: "flame",
        title: "Mise en Place & Logística Impecable",
        desc: "Llegas sin preocupaciones de compras ni acarreos. Carbón listo, carnes marinadas, utensilios profesionales, tiestos curados o cuencos tibetanos preparados a tu llegada."
      },
      {
        icon: "sparkles",
        title: "Contenido Vivencial Transformador",
        desc: "No vienes solo a contemplar: aprendes recetas ancestrales, siembras árboles nativos, armonizas tu cuerpo con cuencos o descubres nebulosas con telescopio."
      }
    ]
  },

  bbqExperience: {
    title: "Alquiler de Zona BBQ & Mise en Place Boyacense",
    subtitle: "El Placer de Parrillar sin Complicaciones ni Compras Previas",
    baseFee: {
      pasadiaRegular: 50000,
      pasadiaRegularLabel: "$50.000 x hasta 10 personas máx (uso de parrilla, área social, hamacas y baños)",
      huespedFee: 25000,
      huespedFeeLabel: "$25.000 para huéspedes hospedados"
    },
    ingredients: [
      { item: "Lomo de Res Seleccionado", detail: "160 g - Corte tierno porcionado y atemperado, listo para sazonar a tu gusto y sellar a la parrilla." },
      { item: "Lomo de Cerdo Marinado", detail: "150 g - Corte porcionado y bañado en adobo suave de cítricos y finas hierbas locales." },
      { item: "Chorizo Artesanal Boyacense", detail: "1 unidad fresca de tradición boyacense, lista para dorar a fuego medio." },
      { item: "Morcilla / Rellena Tradicional", detail: "1 unidad precocida al estilo boyacense, lista para calentar y ahumar sobre la rejilla." },
      { item: "Papa Sabanera Rústica", detail: "2 unidades precocidas al dente en sal Elimani, listas para dorar al carbón." },
      { item: "Mazorca Dulce", detail: "1/2 unidad precocida al vapor, con mantequilla de la casa para caramelizar a las brasas." },
      { item: "Plátano Maduro", detail: "1/2 unidad en su piel, listo para colocar a fuego lento hasta ablandar y endulzar." },
      { item: "Guacamole Artesanal de la Casa", detail: "80 g preparado al instante con aguacate Hass fresco, cebolla, cilantro y toque de limón." }
    ],
    includesTooling: [
      "Sal marina parrillera con especias Elimani",
      "Mantequilla aromatizada con ajo para las mazorcas",
      "Pinzas profesionales de parrilla y delantal",
      "Carbón vegetal seleccionado listo para encender"
    ],
    groupPackages: [
      { people: 5, price: 175000, priceFormatted: "$175.000", perPerson: "$35.000 / persona" },
      { people: 10, price: 341000, priceFormatted: "$341.000", perPerson: "$34.100 / persona" },
      { people: 15, price: 506000, priceFormatted: "$506.000", perPerson: "$33.733 / persona" },
      { people: 20, price: 671000, priceFormatted: "$671.000", perPerson: "$33.550 / persona" }
    ],
    individualRateNote: "$35.000 COP por persona (incluye bebida preparada tradicional de Panela con Limón)."
  },

  experiences: [
    // 1. Conexión, Naturaleza & Reforestación
    {
      id: "exp-laguna-marcura",
      category: "naturaleza",
      categoryLabel: "Conexión & Naturaleza",
      title: "Caminata Ecológica a la Laguna de Marcura",
      price: 40000,
      priceFormatted: "$40.000",
      unit: "persona",
      duration: "2.5 horas",
      intensity: "Media - Suave",
      image: "assets/curated/picnic_laguna.jpeg",
      highlight: "Laguna Ancestral",
      description: "Recorrido guiado por senderos veredales y bosques nativos de Paipa hasta el cuerpo de agua sagrado de Marcura. Interpretación de flora andina y avistamiento de aves.",
      includes: ["Guía local certificado", "Bastón de senderismo de madera", "Refrigerio hidratante de agua de panela con jengibre"]
    },
    {
      id: "exp-paramo-huella",
      category: "naturaleza",
      categoryLabel: "Conexión & Naturaleza",
      title: "Recorrido Eco-Páramo de la Ranchería + 'Deja tu Huella'",
      price: 80000,
      priceFormatted: "$80.000",
      unit: "persona",
      duration: "4.5 horas",
      intensity: "Media - Alta",
      image: "assets/curated/hero_vista_lago.jpeg",
      highlight: "Páramo & Frailejones",
      description: "Inmersión al ecosistema de alta montaña en el Páramo de la Ranchería. Avistamiento de frailejones gigantes, interpretación de especies nativas e invasoras, culminando con la siembra de un árbol nativo con placa personalizada.",
      includes: [
        "Transporte 4x4 o acceso guiado al páramo",
        "Interpretación botánica y de cuenca hidrográfica",
        "Árbol nativo con placa personalizada grabada",
        "Refrigerio campesino boyacense tradicional"
      ]
    },
    {
      id: "exp-deja-tu-huella",
      category: "naturaleza",
      categoryLabel: "Conexión & Naturaleza",
      title: "Plan 'Deja tu Huella' (Siembra de Árbol Nativo)",
      price: 30000,
      priceFormatted: "$30.000",
      unit: "participante / árbol",
      duration: "1 hora",
      intensity: "Fácil para toda la familia",
      image: "assets/curated/brindis_experiencias.jpeg",
      highlight: "Impacto Regenerativo",
      description: "Siembra un árbol nativo (Arrayán, Aliso o Hayuelo) en la ladera de conservación de Villa Elena. Se te entrega certificado digital y refrigerio campesino.",
      includes: ["Plántula nativa certificada", "Herramientas de siembra y tutor", "Placa conmemorativa", "Refrigerio campesino"]
    },
    {
      id: "exp-farmacia-viva",
      category: "naturaleza",
      categoryLabel: "Conexión & Naturaleza",
      title: "Taller de Botánica & Farmacia Viva",
      price: 30000,
      priceFormatted: "$30.000",
      unit: "persona",
      duration: "1.5 horas",
      intensity: "Relajante",
      image: "assets/curated/spa_holistico.jpeg",
      highlight: "Sabiduría Herbolaria",
      description: "Descubre los secretos curativos de la menta, romero, caléndula, ruda y sauco cultivados en la huerta orgánica de Villa Elena. Aprende a elaborar tinturas e infusiones para llevar a casa.",
      includes: ["Recorrido por la huerta medicinal", "Materiales para infusión personalizada", "Guía digital de botánica andina"]
    },

    // 2. Mirador Experiencial & Astro-Turismo
    {
      id: "exp-sensorial-mirador",
      category: "astroturismo",
      categoryLabel: "Mirador & Astronomía",
      title: "Experiencia Sensorial en el Mirador",
      price: 50000,
      priceFormatted: "$50.000",
      unit: "persona",
      duration: "1 hora",
      intensity: "Meditación Guiada",
      image: "assets/curated/salon_atardecer.jpeg",
      highlight: "Aromaterapia & Meditación",
      description: "Sesión de armonización al aire libre frente al espejo de agua del Lago Sochagota. Aromaterapia con aceites esenciales destilados de menta, romero y lavanda, combinada con ejercicios de respiración consciente.",
      includes: ["Aceites esenciales botánicos puros", "Guía facilitador de respiración consciente", "Infusión herbal caliente al finalizar"]
    },
    {
      id: "exp-noche-muisca-astronomia",
      category: "astroturismo",
      categoryLabel: "Mirador & Astronomía",
      title: "Noche 'Marcura Territorio Muisca' & Telescopio",
      price: 70000,
      priceFormatted: "$70.000",
      unit: "persona",
      duration: "2 horas",
      intensity: "Nocturna / Mágica",
      image: "assets/curated/camino_luces_astroturismo.jpeg",
      highlight: "Cosmovisión & Telescopio",
      description: "Encuentro alrededor del fuego para revivir las leyendas muiscas del Lago Sochagota y Marcura. Observación astronómica de luna, planetas y nebulosas a través de telescopio computarizado, acompañado de degustación boyacense.",
      includes: [
        "Observación guiada con telescopio de alta precisión",
        "Narrativa de mitología muisca y mapa estelar",
        "Canelazo artesanal caliente",
        "Bocadillo boyacense tradicional con queso"
      ]
    },
    {
      id: "exp-astronomia-guiada",
      category: "astroturismo",
      categoryLabel: "Mirador & Astronomía",
      title: "Observación Astronómica Guiada 'Mapa Celeste'",
      price: 30000,
      priceFormatted: "$30.000",
      unit: "persona (mín 5)",
      duration: "1 hora",
      intensity: "Didáctica / Estelar",
      image: "assets/curated/carpa_fija_noche.jpeg",
      highlight: "Clase de Astronomía",
      description: "Clase introductoria de astronomía visual. Aprende a ubicar la Cruz del Sur, Orión, constelaciones zodiacales y satélites con puntero láser astronómico y telescopio.",
      includes: ["Puntero láser astronómico y telescopio", "Carta estelar interactiva para móvil", "Taza de chocolate caliente"]
    },
    {
      id: "exp-astronomia-libre",
      category: "astroturismo",
      categoryLabel: "Mirador & Astronomía",
      title: "Observación Astronómica Libre en Telescopio",
      price: 15000,
      priceFormatted: "$150.000",
      unit: "persona / 15 min",
      duration: "15 minutos",
      intensity: "Rápido / Intenso",
      image: "assets/curated/camino_luces_astroturismo.jpeg",
      highlight: "Mirada Estelar",
      description: "Sesión personal de 15 minutos en el telescopio principal para observar cráteres lunares o anillos de Saturno bajo la guía del monitor.",
      includes: ["Acceso exclusivo al telescopio", "Enfoque asistido"]
    },

    // 3. Experiencias Gastronómicas
    {
      id: "exp-queso-paipa-vino",
      category: "gastronomia",
      categoryLabel: "Gastronomía Boyacense",
      title: "Cata Guiada de Queso Paipa D.O. & Maridaje Sunset",
      price: 45000,
      priceFormatted: "$45.000",
      unit: "persona",
      duration: "1.5 horas",
      intensity: "Gourmet / Sensorial",
      image: "assets/curated/cena_maridaje.jpeg",
      highlight: "Denominación de Origen",
      description: "Experiencia culinaria imperdible: degustación de 3 maduraciones del único queso con Denominación de Origen en Colombia (Queso Paipa semimaduro y maduro), maridado con vinos seleccionados, dulce de papayuela y frutos secos mientras cae el sol sobre el lago.",
      includes: ["Tabla de degustación de Queso Paipa D.O. en 3 etapas", "2 copas de vino tinto/blanco seleccionado", "Mermeladas artesanales y frutos de la huerta"]
    },
    {
      id: "exp-picnic-gourmet",
      category: "gastronomia",
      categoryLabel: "Gastronomía Boyacense",
      title: "Picnic Gourmet Atardecer en el Mirador",
      price: 60000,
      priceFormatted: "$60.000",
      unit: "persona",
      duration: "2 horas",
      intensity: "Romántico / Amigos",
      image: "assets/curated/picnic_laguna.jpeg",
      highlight: "Montaje Escénico",
      description: "Montaje boho-chic en el césped del mirador con cojines, manteles rústicos, flores andinas y cesta gourmet: quesos madurados, jamones, pan artesanal de masa madre, frutas frescas y bebida de autor.",
      includes: ["Cesta de picnic gourmet completa", "Montaje privado con cojines y velas", "Bebida artesanal o copa de sangría"]
    },
    {
      id: "exp-asado-chileno",
      category: "gastronomia",
      categoryLabel: "Gastronomía Boyacense",
      title: "Experiencia Asado Chileno & Vino bajo las Estrellas",
      price: 95000,
      priceFormatted: "$95.000",
      unit: "persona",
      duration: "2.5 horas",
      intensity: "Parrilla de Lujo",
      image: "assets/curated/salon_atardecer.jpeg",
      highlight: "Carne Madurada & Fuego",
      description: "Asado estilo trasandino en la Zona BBQ con corte grueso de carne madurada al término perfecto, ensalada criolla boyacense, chimichurri casero con hierbas del huerto y copa de vino tinto reserva bajo el cielo estrellado.",
      includes: ["Corte premium madurado a la brasa", "Guarniciones tradicionales y ensalada fresca", "Copa de vino tinto reserva", "Servicio parrillero asistido"]
    },
    {
      id: "exp-cafe-cacao",
      category: "gastronomia",
      categoryLabel: "Gastronomía Boyacense",
      title: "Cata de Café Especial & Cacao Boyacense Journey",
      price: 50000,
      priceFormatted: "$50.000",
      unit: "persona",
      duration: "1.5 horas",
      intensity: "Aromática / Gourmet",
      image: "assets/curated/brindis_experiencias.jpeg",
      highlight: "Sabores de Origen",
      description: "Viaje de aromas y perfiles de taza de cafés de altura de Boyacá y Santander filtrados con métodos artesanales (V60 y Chemex), maridados con bombones de cacao fino de aroma al 70%.",
      includes: ["3 métodos de extracción de café especial", "Maridaje con cacaos y chocolates artesanales", "Ficha técnica de catación guiada"]
    },
    {
      id: "exp-desayuno-campestre",
      category: "gastronomia",
      categoryLabel: "Gastronomía Boyacense",
      title: "Desayuno Campestre Consciente",
      price: 35000,
      priceFormatted: "$35.000",
      unit: "persona",
      duration: "1 hora",
      intensity: "Nutritivo",
      image: "assets/curated/carpa_fija_interior.jpeg",
      highlight: "Energía Matutina",
      description: "Desayuno preparado con huevos de campo de gallinas felices, arepa boyacense en tiesto, queso campesino fresco, bowl de frutas con yogur artesanal, granola de la casa y café recién molido.",
      includes: ["Desayuno completo a la mesa o al deck", "Café de origen o chocolate campesino"]
    },

    // 4. Bienestar, Mente & Spa Holístico
    {
      id: "exp-yoga-mirador",
      category: "bienestar",
      categoryLabel: "Bienestar & Holístico",
      title: "Clase de Yoga o Reiki al Aire Libre frente al Lago",
      price: 35000,
      priceFormatted: "$35.000",
      unit: "persona (pareja o mín 5)",
      duration: "1.5 horas",
      intensity: "Restaurativo",
      image: "assets/curated/yoga_mirador.jpeg",
      highlight: "Paz Mental & Prana",
      description: "Práctica de Hatha o Vinyasa suave sobre deck de madera con vista abierta al Lago Sochagota. Alineación de chakras, respiración pranayama y relajación profunda al despertar.",
      includes: ["Mat de yoga ecológico y bloques", "Instructor certificado", "Infusión detox matutina"]
    },
    {
      id: "exp-sonidoterapia",
      category: "bienestar",
      categoryLabel: "Bienestar & Holístico",
      title: "Sesión de Sonidoterapia con Cuencos Tibetanos",
      price: 50000,
      priceFormatted: "$50.000",
      unit: "persona",
      duration: "1 hora",
      intensity: "Relajación Total",
      image: "assets/curated/spa_holistico.jpeg",
      highlight: "Vibración Curativa",
      description: "Baño sonoro inmersivo mediante frecuencias armónicas de cuencos de cuarzo y bronce tibetanos. Alivia tensiones musculares, reduce la ansiedad y equilibra el campo electromagnético.",
      includes: ["Sesión guiada por terapeuta sonoro", "Antifaz aromático para los ojos", "Manta térmica durante la terapia"]
    },
    {
      id: "exp-spa-herbal-wine",
      category: "bienestar",
      categoryLabel: "Bienestar & Holístico",
      title: "Beauty & Wine Social Spa Herbal",
      price: 85000,
      priceFormatted: "$85.000",
      unit: "persona",
      duration: "2 horas",
      intensity: "Mimos & Social",
      image: "assets/curated/spa_holistico.jpeg",
      highlight: "Consentimiento Total",
      description: "Experiencia de spa relajado entre amigas o pareja en el salón social: mascarillas faciales orgánicas con miel y arcilla andina, exfoliación corporal con hierbas del huerto, manicura exprés y copas de mimosa fría.",
      includes: ["Mascarilla facial botánica y exfoliante", "Manicura exprés con esmaltes naturales", "2 mimosas por persona y pasabocas saludables"]
    },
    {
      id: "exp-mindfulness-digital",
      category: "bienestar",
      categoryLabel: "Bienestar & Holístico",
      title: "Taller de Mindfulness & Desconexión Digital",
      price: 45000,
      priceFormatted: "$45.000",
      unit: "persona",
      duration: "1.5 horas",
      intensity: "Atención Plena",
      image: "assets/curated/yoga_mirador.jpeg",
      highlight: "Detox Tecnológico",
      description: "Espacio guiado para apagar pantallas y reconectar con los sentidos. Prácticas de respiración consciente, contemplación del horizonte y técnicas para gestionar el agobio diario.",
      includes: ["Caja de resguardo digital", "Libreta ecológica de journaling", "Guía práctica de hábitos conscientes"]
    },
    {
      id: "exp-biodanza",
      category: "bienestar",
      categoryLabel: "Bienestar & Holístico",
      title: "Taller de Biodanza y Movimiento Consciente",
      price: 45000,
      priceFormatted: "$45.000",
      unit: "persona",
      duration: "1.5 horas",
      intensity: "Expresión Libre",
      image: "assets/curated/brindis_experiencias.jpeg",
      highlight: "Vitalidad Andina",
      description: "Danza integrativa al aire libre para liberar emociones acumuladas, recuperar la espontaneidad y celebrar el contacto con la naturaleza.",
      includes: ["Música curada y facilitación profesional", "Bebida hidratante natural"]
    },
    {
      id: "exp-constelaciones",
      category: "bienestar",
      categoryLabel: "Bienestar & Holístico",
      title: "Constelaciones Familiares & Dinámicas Sistémicas",
      price: 60000,
      priceFormatted: "$60.000",
      unit: "persona",
      duration: "2 horas",
      intensity: "Terapéutica Profunda",
      image: "assets/curated/salon_atardecer.jpeg",
      highlight: "Sanación de Lazos",
      description: "Taller grupal para mirar dinámicas relacionales inconscientes, liberar cargas transgeneracionales y encontrar orden y reconciliación personal en un entorno sagrado.",
      includes: ["Facilitador sistémico certificado", "Ambiente de contención y confidencialidad"]
    },

    // 5. Talleres de Cultura Local & Salón de Eventos
    {
      id: "exp-arepa-tiesto",
      category: "cultura",
      categoryLabel: "Cultura & Talleres",
      title: "Taller de Arepa Boyacense en Tiesto de Barro",
      price: 35000,
      priceFormatted: "$35.000",
      unit: "persona",
      duration: "1.5 horas",
      intensity: "Tradicional / Práctico",
      image: "assets/curated/cena_maridaje.jpeg",
      highlight: "Manos en la Masa",
      description: "Aprende el arte de amasar maíz pelao, cuajada fresca boyacense y panela, asando tus propias arepas sobre tiestos de barro tradicionales con leña de bosque andino.",
      includes: ["Materia prima e ingredientes completos", "Tiesto de barro y leña", "Degustación de tus arepas con chocolate caliente"]
    },
    {
      id: "exp-amasijos-boyacenses",
      category: "cultura",
      categoryLabel: "Cultura & Talleres",
      title: "Taller de Amasijos Tradicionales (Almojábanas & Resobados)",
      price: 40000,
      priceFormatted: "$40.000",
      unit: "persona",
      duration: "2 horas",
      intensity: "Gastronómico Local",
      image: "assets/curated/carpa_fija_interior.jpeg",
      highlight: "Herencia de Horno",
      description: "Elaboración de las auténticas almojábanas y panes resobados boyacenses con queso de hoja. Descubre las proporciones secretas transmitidas por generaciones.",
      includes: ["Ingredientes de campo", "Horneado en horno de leña", "Caja para llevar tus creaciones"]
    },
    {
      id: "exp-sip-paint",
      category: "cultura",
      categoryLabel: "Cultura & Talleres",
      title: "Taller de Arte 'Sip & Paint' + 2 Copas de Vino",
      price: 70000,
      priceFormatted: "$70.000",
      unit: "persona",
      duration: "2 horas",
      intensity: "Creativo & Social",
      image: "assets/curated/salon_atardecer.jpeg",
      highlight: "Lienzo & Copas",
      description: "Pinta tu propio cuadro inspirado en las montañas y el Lago Sochagota en lienzo o cerámica mientras disfrutas de dos copas de vino y buena música en el Salón Mirador.",
      includes: ["Lienzo / soporte artístico y pinturas acrílicas", "2 copas de vino seleccionadas", "Cuadro terminado listo para llevar a casa"]
    },
    {
      id: "exp-ruta-historica",
      category: "cultura",
      categoryLabel: "Cultura & Talleres",
      title: "Ruta Cultural e Histórica de Paipa",
      price: 45000,
      priceFormatted: "$45.000",
      unit: "persona",
      duration: "3 horas",
      intensity: "Patrimonial",
      image: "assets/curated/letrero_bienvenida.jpeg",
      highlight: "Monumento & Termales",
      description: "Visita guiada al Museo Pablo Solano, Casona El Salitre, Monumento del Pantano de Vargas y opción de taller de mindfulness en las aguas termales de Paipa.",
      includes: ["Guía historiador local", "Entradas a locaciones patrimoniales", "Hidratación durante el circuito"]
    },
    {
      id: "exp-cine-estrellas",
      category: "cultura",
      categoryLabel: "Cultura & Talleres",
      title: "Cine Personalizado Bajo las Estrellas o en Salón",
      price: 30000,
      priceFormatted: "$30.000",
      unit: "persona",
      duration: "2 horas",
      intensity: "Cine al Aire Libre",
      image: "assets/curated/camino_luces_astroturismo.jpeg",
      highlight: "Pantalla Gigante & Fogata",
      description: "Proyección cinematográfica con proyector HD al aire libre o en el acogedor salón social, con mantas abrigadas, crispetas recién hechas y fogata encendida.",
      includes: ["Pantalla gigante y sonido envolvente", "Canasta de crispetas y bebida caliente", "Mantas térmicas individuales"]
    }
  ],

  packages24h: [
    {
      id: "paquete-1-desconexion",
      name: "Paquete 1: 'Desconexión & Reconexión Integral'",
      subtitle: "24 Horas de Bienestar y Silencio Andino para Parejas",
      price: 590000,
      priceFormatted: "$590.000 COP",
      unit: "pareja (Glamping con Jacuzzi incluido)",
      savingBadge: "Tarifa Promocional Todo Incluido",
      target: "Pensado para parejas o grupos pequeños que buscan pausas conscientes del estrés urbano.",
      heroImage: "assets/curated/glamping_domo.jpeg",
      itinerary: [
        { time: "15:00", title: "Check-in & Bienvenida Sensorial", desc: "Infusión fría o caliente de hierbas de la huerta en el Mirador Panorámico." },
        { time: "16:30", title: "Experiencia Sensorial & Aromaterapia", desc: "Taller de respiración consciente con aceites de menta, romero y lavanda frente al Lago Sochagota." },
        { time: "18:00", title: "Atardecer & Maridaje Gourmet", desc: "Picnic gourmet y cata de Queso Paipa D.O. con copas de vino al caer la tarde." },
        { time: "20:00", title: "Noche Estelar & Fuego", desc: "Fogata con canelazo caliente + observación astronómica guiada con telescopio." },
        { time: "07:30 (Día 2)", title: "Yoga o Reiki Matutino", desc: "Sesión de estiramiento suave y meditación al aire libre para recibir el nuevo día." },
        { time: "08:30", title: "Desayuno Campestre Consciente", desc: "Bowl de frutas andinas, amasijos frescos y café boyacense de origen." },
        { time: "10:00", title: "Caminata Ecológica & Reforestación", desc: "Baño de bosque hacia la Laguna de Marcura + siembra de árbol nativo ('Deja tu Huella')." },
        { time: "13:00", title: "Checkout con Calma", desc: "Despedida con foto de recuerdo y regalo botánico." }
      ]
    },
    {
      id: "paquete-2-fuego-sabores",
      name: "Paquete 2: 'Fuego, Estrellas & Sabores'",
      subtitle: "Pasadía Extendido (12h a 24h) en Salón de Eventos & Zona BBQ",
      price: 210000,
      priceFormatted: "$210.000 COP",
      unit: "por persona (Mínimo 4 personas, sin hospedaje)",
      savingBadge: "Ideal Grupos & Familias",
      target: "Ideal para grupos de amigos, familias o celebraciones en el Salón de Eventos y Zona BBQ.",
      heroImage: "assets/curated/salon_atardecer.jpeg",
      itinerary: [
        { time: "14:00", title: "Bienvenida & Taller de Arepa Boyacense", desc: "Taller práctico amasando y asando arepa en tiesto tradicional con bebida refrescante." },
        { time: "16:00", title: "Taller de Arte 'Sip & Paint'", desc: "Pintura al aire libre en lienzo con dos copas de vino y asesoría artística." },
        { time: "18:00", title: "Atardecer en el Mirador", desc: "Vista privilegiada de la puesta de sol sobre el Lago Sochagota." },
        { time: "19:00", title: "BBQ Experience & Cata de Vino", desc: "Asado chileno con corte madurado y maridaje bajo el firmamento." },
        { time: "21:00", title: "Noche de Historias & Astronomía", desc: "Relatos orales alrededor de la fogata y observación celeste con telescopio." },
        { time: "Opcional", title: "Opción Hospedaje Nocturno", desc: "Posibilidad de añadir carpas fijas o camping a tarifa preferencial." }
      ]
    },
    {
      id: "paquete-3-santuario-chicas",
      name: "Paquete 3: 'Santuario de Chicas & Spa Holístico'",
      subtitle: "Pijamada de Cumpleaños, Despedida Consciente o Encuentro Femenino",
      price: 235000, // Promedio entre 220k y 250k
      priceFormatted: "$220.000 - $250.000 COP",
      unit: "por persona (Grupo mín 4 personas)",
      savingBadge: "Plan Exclusivo Mujeres",
      target: "Adaptado para grupos de mujeres que buscan desconexión, mimos, autocuidado y celebración.",
      heroImage: "assets/curated/spa_holistico.jpeg",
      itinerary: [
        { time: "Sábado 15:00", title: "Check-in & Alojamiento", desc: "Instalación en Carpas fijas o Glamping decoradas con flores y detalles de bienvenida." },
        { time: "Sábado 16:30", title: "Beauty & Wine Spa", desc: "Mascarillas faciales, exfoliación con plantas del huerto y mimosas en el Salón de Eventos." },
        { time: "Sábado 19:30", title: "Cena Especial & Cine Bajo las Estrellas", desc: "Cena al aire libre en mesa decorada + noche de fogata o cine personalizado." },
        { time: "Domingo 08:00", title: "Desayuno Campestre Saludable", desc: "Mesa buffet con jugos frescos, granola, huevos de campo y panes artesanos." },
        { time: "Domingo 09:30", title: "Yoga & Biodanza", desc: "Sesión de movimiento consciente al aire libre para revitalizar el cuerpo." },
        { time: "Domingo 11:00", title: "Ruta de Naturaleza", desc: "Caminata suave hacia la Laguna de Marcura conectando con el agua." },
        { time: "Domingo 13:00", title: "Almuerzo Picnic Decorado", desc: "Picnic gourmet de clausura con vista panorámica al Lago Sochagota." }
      ]
    }
  ],

  gallery: [
    { title: "Vista Panorámica al Lago Sochagota", category: "paisajes", src: "assets/curated/hero_vista_lago.jpeg" },
    { title: "Letrero Oficial de Bienvenida", category: "resort", src: "assets/curated/letrero_bienvenida.jpeg" },
    { title: "Glamping Domo Geodésico", category: "alojamiento", src: "assets/curated/glamping_domo.jpeg" },
    { title: "Carpa Fija Iluminada de Noche", category: "alojamiento", src: "assets/curated/carpa_fija_noche.jpeg" },
    { title: "Interior Acogedor de Carpa Fija", category: "alojamiento", src: "assets/curated/carpa_fija_interior.jpeg" },
    { title: "Zona de Camping con Dotación", category: "alojamiento", src: "assets/curated/camping_dotado.jpeg" },
    { title: "Clase de Yoga al Amanecer", category: "bienestar", src: "assets/curated/yoga_mirador.jpeg" },
    { title: "Spa y Cuidado Botánico", category: "bienestar", src: "assets/curated/spa_holistico.jpeg" },
    { title: "Picnic Gourmet Frente a la Laguna", category: "gastronomia", src: "assets/curated/picnic_laguna.jpeg" },
    { title: "Cena Romántica y Maridaje", category: "gastronomia", src: "assets/curated/cena_maridaje.jpeg" },
    { title: "Camino Iluminado y Astro-Turismo", category: "astroturismo", src: "assets/curated/camino_luces_astroturismo.jpeg" },
    { title: "Brindis y Celebraciones de Clientes", category: "experiencias", src: "assets/curated/brindis_experiencias.jpeg" },
    { title: "Atardecer Dorado en el Salón Mirador", category: "paisajes", src: "assets/curated/salon_atardecer.jpeg" }
  ],

  faqs: [
    {
      q: "¿Cómo llegar a Villa Elena Mirador desde Paipa o Bogotá?",
      a: "Villa Elena está ubicada a solo 12 minutos del centro de Paipa y del Lago Sochagota, por una vía pavimentada con un último tramo en placa huella y afirmado accesible para todo tipo de vehículos (automóviles y camionetas). Desde Bogotá son aproximadamente 2 horas y 45 minutos por la Doble Calzada."
    },
    {
      q: "¿El clima es muy frío? ¿Qué ropa debo llevar?",
      a: "Durante el día el clima suele ser templado y soleado (18°C a 22°C), ideal para caminatas y picnics. Al atardecer y durante la noche la temperatura desciende a 8°C - 12°C. Recomendamos llevar ropa cómoda tipo capas, chaqueta cortavientos o térmica, calzado para senderismo, protector solar y traje de baño si reservas glamping con jacuzzi."
    },
    {
      q: "¿Los glampings y carpas cuentan con agua caliente y calefacción?",
      a: "Sí. Las suites de glamping con jacuzzi cuentan con calentadores de paso de alta capacidad y tomas eléctricas. Todas nuestras camas están equipadas con cobijas térmicas de alto gramaje y plumones. Las baterías de baños para carpas y camping disponen de duchas con agua caliente 24 horas."
    },
    {
      q: "¿Es un lugar pet-friendly?",
      a: "¡Sí, amamos a los animales! Aceptamos mascotas educadas bajo reserva previa en zonas de carpas y camping, respetando el descanso de otros huéspedes y la fauna silvestre del entorno."
    },
    {
      q: "¿Cómo funciona la reserva y qué medios de pago aceptan?",
      a: "Puedes cotizar en tiempo real en nuestra plataforma y confirmar vía WhatsApp directo. Se reserva con un anticipo del 50% mediante transferencia bancaria (Bancolombia, Nequi, Daviplata) y el saldo se cancela al momento del check-in en efectivo o transferencia."
    }
  ]
};

// Exponer en objeto global de navegador o Node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VILLA_ELENA_DATA;
}
