export type BlogSection =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string }
  | { type: "cta" };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  keywords: string[];
  lead: string;
  sections: BlogSection[];
  related: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "como-cobrar-cuotas-colegio-por-whatsapp",
    title:
      "Cómo cobrar cuotas de un colegio por WhatsApp sin perseguir a las familias",
    description:
      "Guía para administradores y dueños de colegios en Argentina: cómo organizar la cobranza de cuotas por WhatsApp, automatizar recordatorios y reducir la mora sin desgastar el vínculo con las familias.",
    date: "2026-05-11",
    readingMinutes: 7,
    keywords: [
      "cobrar cuotas colegio whatsapp",
      "cobranza escolar",
      "cobranza colegios argentina",
      "recordatorios de cuota colegio",
      "automatizar cobranza colegio",
    ],
    lead:
      "WhatsApp se volvió el canal por defecto entre colegios y familias. Y eso está bien: es directo, todos lo leen, no hay barrera. Pero usarlo como herramienta de cobranza manual termina agotando al administrativo y, peor, gastando el vínculo con las familias. Esta guía cuenta cómo armar un sistema que cobre sin perseguir.",
    sections: [
      {
        type: "h2",
        text: "Por qué WhatsApp es el canal natural para cobrar cuotas",
      },
      {
        type: "p",
        text: "En la mayoría de los colegios argentinos, el WhatsApp del colegio ya existe: para avisar el acto, mandar la lista de útiles, comunicar el paro o coordinar la salida. Es el canal donde la familia ya está y donde mira los mensajes en el día. El mail queda relegado a lo formal; el llamado interrumpe; el papel se pierde. WhatsApp es lo único que combina inmediatez con disponibilidad real.",
      },
      {
        type: "p",
        text: "El problema no es el canal: es cómo se usa. Cuando la persona que cobra usa su WhatsApp personal para mandar recordatorios uno por uno, se le mezclan los chats, pierde el rastro de quién pagó y cuándo, y termina haciendo el doble del trabajo. Y cuando hay 200 o 400 familias, no escala.",
      },
      {
        type: "h2",
        text: "Los 3 problemas que aparecen cuando lo hacés con WhatsApp personal",
      },
      {
        type: "ol",
        items: [
          "Se mezcla lo personal con lo institucional. Las familias te ven en línea a las 11 de la noche y te escriben por la cuota. Se borra el límite.",
          "No queda registro. Tres semanas después no sabés si a Pérez le mandaste el segundo recordatorio o no, y volvés a empezar el ciclo.",
          "La conversación se vuelve agresiva sin querer. Cuando escribís en frío, sin contexto, el mensaje suena seco. La familia se ofende, se pone a la defensiva, y la próxima cuota llega con más mora todavía.",
        ],
      },
      {
        type: "h2",
        text: "Cómo automatizar la cobranza sin perder el lado humano",
      },
      {
        type: "p",
        text: "La automatización no significa robotizar. Significa estandarizar los mensajes que ya mandás (los que sirven, los que no rompen vínculos) y que el sistema los envíe en el momento adecuado, desde un número dedicado, con el monto y el link de pago precargados.",
      },
      {
        type: "p",
        text: "Un calendario típico de cobranza escolar tiene cuatro hitos:",
      },
      {
        type: "ul",
        items: [
          "Aviso 5 días antes del vencimiento: tono amable, recordatorio del monto.",
          "Día del vencimiento: confirmación de los medios de pago.",
          "3–5 días después: primer recordatorio de mora, todavía suave.",
          "10–15 días después: aviso firme con consecuencias claras.",
        ],
      },
      {
        type: "p",
        text: "Si el sistema manda esos cuatro mensajes solo y con el link de pago listo, la mayoría de las familias paga sin que nadie tenga que escribirles uno por uno. La administración solo entra en escena cuando alguien no responde o pide hablar.",
      },
      {
        type: "h2",
        text: "Qué te ahorra automatizar la cobranza escolar",
      },
      {
        type: "p",
        text: "El ahorro real no es tanto tiempo (también, pero no es lo principal). Es energía emocional. Cuando un sistema manda los recordatorios, la persona del colegio deja de sentir que está peleando con las familias. Solo aparece en los casos donde realmente hace falta una conversación.",
      },
      {
        type: "p",
        text: "Lo concreto: colegios que automatizan reportan caídas de mora del 20 al 40 por ciento en los primeros tres meses. No porque presionen más, sino porque los recordatorios llegan a tiempo, con el link listo, y la familia paga antes de que se acumule.",
      },
      {
        type: "h2",
        text: "Cómo empezar",
      },
      {
        type: "ol",
        items: [
          "Conseguí un número de WhatsApp dedicado para cobranza (no tu personal). Una SIM nueva cuesta poco y queda separada para siempre.",
          "Pasala a WhatsApp Business (es gratis, oficial, y te permite identificar el número como del colegio).",
          "Importá tu cartera de familias y cuotas desde Excel.",
          "Configurá el calendario de recordatorios con los 4 hitos que mencionamos arriba.",
          "Arrancá un mes con un grado o dos, mirá los resultados, y después escalá a todo el colegio.",
        ],
      },
      {
        type: "callout",
        text: "Cobria está pensada exactamente para este flujo. Activamos la cuenta en 24 horas hábiles, importamos tu cartera, y configuramos juntos el calendario. Los primeros 30 días son gratis, sin tarjeta.",
      },
      { type: "cta" },
    ],
    related: [
      "como-cobrar-expensas-por-whatsapp",
      "excel-vs-sistema-de-cobranza",
      "errores-cobranza-cuotas-colegios",
    ],
  },

  {
    slug: "como-cobrar-expensas-por-whatsapp",
    title:
      "Cómo cobrar expensas por WhatsApp sin gastar el día llamando deudores",
    description:
      "Cómo organizar la cobranza de expensas por WhatsApp en consorcios argentinos: recordatorios automáticos, mora ordenada, links de pago y reportes para asamblea. Sin perseguir propietarios.",
    date: "2026-05-11",
    readingMinutes: 7,
    keywords: [
      "cobrar expensas whatsapp",
      "cobranza consorcios",
      "administración consorcios argentina",
      "cobranza expensas automática",
      "mora expensas",
    ],
    lead:
      "Si administrás consorcios en Argentina, sabés esto de memoria: del 1 al 10 del mes el teléfono no para, del 11 al 20 sos vos quien llama, y del 21 en adelante empezás a mandar mensajes que repetiste 30 veces. Es agotador y no escala. Esta guía explica cómo armar un flujo de cobranza ordenado por WhatsApp.",
    sections: [
      {
        type: "h2",
        text: "Por qué el WhatsApp personal no escala en un consorcio",
      },
      {
        type: "p",
        text: "Un edificio de 60 unidades funcionales en realidad son 60 conversaciones distintas por mes, multiplicadas por la cantidad de edificios que administrás. La cabeza no da abasto: te perdés a quién ya le escribiste, quién prometió pagar mañana, quién mandó el comprobante por mail en lugar de por WhatsApp.",
      },
      {
        type: "p",
        text: "Y todo eso, encima, lo estás haciendo desde tu WhatsApp personal. A las 9 de la noche te escribe la señora del 4B preguntando si recibiste su transferencia. No es culpa de ella: vos sos su único canal de contacto.",
      },
      {
        type: "h2",
        text: "El cambio de mentalidad: de perseguir a recordar",
      },
      {
        type: "p",
        text: "Cobrar bien no es perseguir más. Es recordar mejor. Si el propietario sabe la fecha de vencimiento, recibe la liquidación a tiempo, tiene un link de pago directo y se lo recuerdan automáticamente, el 80 por ciento paga sin que nadie le hable.",
      },
      {
        type: "p",
        text: "El otro 20 por ciento siempre requiere conversación. Pero esa conversación es mucho más corta y respetuosa cuando los recordatorios ya pasaron y la mora está documentada. Vos no estás 'molestando': estás cumpliendo tu rol.",
      },
      {
        type: "h2",
        text: "El flujo ideal de cobranza de expensas",
      },
      {
        type: "ol",
        items: [
          "Emisión: subís la liquidación del mes al sistema. Cobria genera los avisos personalizados por unidad funcional con el monto exacto.",
          "Aviso de expensa: 24 horas después de la emisión, cada propietario recibe por WhatsApp Business el detalle, vencimiento y link de pago.",
          "Recordatorio pre-vencimiento: 3 días antes, recordatorio amable.",
          "Aviso de vencimiento: ese día, confirmación del monto y opciones de pago.",
          "Primer escalón de mora: 5 días después, recordatorio con intereses si corresponde.",
          "Segundo escalón: 15 días después, aviso firme.",
          "Intervención humana: solo cuando el propietario no responde o pide hablar.",
        ],
      },
      {
        type: "h2",
        text: "Recordatorios automáticos: qué decir y cuándo",
      },
      {
        type: "p",
        text: "El tono importa más que la frecuencia. Un consorcio que manda 6 recordatorios respetuosos cobra más que uno que manda 2 mensajes agresivos.",
      },
      {
        type: "p",
        text: "Cosas que funcionan en los mensajes:",
      },
      {
        type: "ul",
        items: [
          "Nombre del propietario y unidad funcional (no 'estimado vecino').",
          "Monto exacto, no 'su saldo pendiente'.",
          "Link de pago directo, no 'transferí a este CBU'.",
          "Firma con el nombre de la administración, no solo 'consorcio'.",
          "Opción de hablar si tiene algún problema.",
        ],
      },
      {
        type: "h2",
        text: "Manejo de mora sin perder la relación",
      },
      {
        type: "p",
        text: "La mora se escala. El primer recordatorio no es el último mensaje. Es importante que el tono vaya endureciéndose gradualmente, sin saltar de 'amable' a 'amenaza legal' en un solo paso.",
      },
      {
        type: "p",
        text: "Recomendación práctica: en el escalón 1 y 2, el sistema manda solo. En el escalón 3 (después de 30 días), la administración decide caso por caso. Hay propietarios que están con un problema real y necesitan hablar; otros simplemente no responden y ahí sí corresponde escalar formalmente.",
      },
      {
        type: "h2",
        text: "Reportes para asamblea y rendición",
      },
      {
        type: "p",
        text: "Una ventaja muchas veces subestimada de tener cobranza automatizada: al cierre del mes podés sacar un reporte limpio de cuánto se cobró, qué porcentaje quedó en mora y por unidad funcional. Eso te sirve para la rendición y para la asamblea anual.",
      },
      {
        type: "callout",
        text: "Cobria centraliza todo este flujo en una sola plataforma. Si administrás varios consorcios, manejás todos desde una sola cuenta. Probalo 30 días gratis sin tarjeta de crédito.",
      },
      { type: "cta" },
    ],
    related: [
      "reducir-mora-consorcio",
      "excel-vs-sistema-de-cobranza",
      "que-es-cobranza-automatizada",
    ],
  },

  {
    slug: "excel-vs-sistema-de-cobranza",
    title:
      "Excel vs sistema de cobranza: cuándo conviene automatizar",
    description:
      "Comparación honesta entre llevar la cobranza en Excel y migrar a un sistema de cobranza automatizada. Cuándo todavía alcanza con planilla, cuándo no, y qué señales indican que es hora de cambiar.",
    date: "2026-05-11",
    readingMinutes: 6,
    keywords: [
      "sistema de cobranza",
      "automatizar cobranza",
      "alternativa excel cobranza",
      "software cobranza argentina",
      "gestión cobranza",
    ],
    lead:
      "Casi todo arranca en Excel. Es flexible, es gratis, lo conocés. Pero llega un momento donde la planilla deja de alcanzar. Esta nota es una comparación honesta: cuándo Excel todavía es la herramienta correcta, cuándo no, y qué señales indican que ya es hora de migrar.",
    sections: [
      {
        type: "h2",
        text: "Cuándo Excel todavía alcanza",
      },
      {
        type: "p",
        text: "Si tenés menos de 30 clientes recurrentes y los conocés a todos por nombre, Excel está bien. Si tu mora es prácticamente cero porque todos pagan por costumbre, Excel está bien. Si tu cobranza se resuelve en menos de 2 horas por mes, Excel está bien.",
      },
      {
        type: "p",
        text: "No es vergüenza usar Excel. El problema empieza cuando la planilla se vuelve compleja, los recordatorios los mandás vos a mano, y empezás a olvidarte de cosas.",
      },
      {
        type: "h2",
        text: "Las señales de que tenés que cambiar",
      },
      {
        type: "ul",
        items: [
          "Estás dedicando más de 6 horas al mes solo a cobranza.",
          "Tenés más de 50 clientes recurrentes.",
          "La mora pasó del 5 por ciento.",
          "Te olvidaste alguna vez de mandar el recordatorio a alguien.",
          "Más de una vez un cliente te dijo 'no recibí el aviso'.",
          "Tu Excel tiene fórmulas que solo entendés vos.",
          "Cada mes copiás y pegás los mismos mensajes a 100 personas.",
          "Te escriben por la cuota a tu WhatsApp personal.",
        ],
      },
      {
        type: "p",
        text: "Si tres o más de estas son ciertas, ya estás trabajando para Excel, no Excel para vos.",
      },
      {
        type: "h2",
        text: "Qué te da un sistema que Excel no",
      },
      {
        type: "ol",
        items: [
          "Recordatorios automáticos sin que tengas que estar ahí. El sistema sabe que mañana vence la cuota de Pérez y manda el mensaje a las 9 AM.",
          "Links de pago con el monto cargado. El cliente abre el link y paga: no tiene que copiar el alias, no tiene que escribirte el monto, no se confunde.",
          "Historial de cada conversación. Sabés cuándo escribiste, qué dijiste, si respondió, si pagó.",
          "Reportes en tiempo real. Cuánto cobraste este mes, quién debe, cuál es tu cohorte más morosa.",
          "Escalabilidad. Pasar de 50 a 500 clientes no cambia tu carga de trabajo.",
          "Separación canal personal/institucional. Tu WhatsApp deja de ser un caos.",
        ],
      },
      {
        type: "h2",
        text: "Mitos comunes sobre automatizar la cobranza",
      },
      {
        type: "h3",
        text: "'Mis clientes prefieren que les escriba yo'",
      },
      {
        type: "p",
        text: "En general no. Lo que tus clientes valoran es claridad y profesionalismo: saber el monto, saber dónde pagar, no tener que pedirte el CBU cada mes. Si tu mensaje automático suena humano y tiene tu firma, los clientes lo prefieren al mensaje desordenado en un grupo.",
      },
      {
        type: "h3",
        text: "'Es muy caro para mi tamaño'",
      },
      {
        type: "p",
        text: "Hoy hay planes desde 29 dólares al mes. Si dedicás 6 horas mensuales a cobranza y tu hora vale más de 5 dólares, la cuenta cierra el primer mes. Y si la mora baja aunque sea 5 puntos, el sistema se paga solo.",
      },
      {
        type: "h3",
        text: "'No tengo tiempo para implementarlo'",
      },
      {
        type: "p",
        text: "La implementación bien hecha tarda 2 a 3 horas en total, y después gana 6 horas al mes para siempre. La cuenta cierra en la primera semana.",
      },
      {
        type: "h2",
        text: "Cómo elegir el sistema correcto",
      },
      {
        type: "p",
        text: "No todos los sistemas de cobranza son iguales. Lo que tenés que mirar:",
      },
      {
        type: "ul",
        items: [
          "Que use WhatsApp Business oficial, no scripts ni envíos no autorizados.",
          "Que importe desde Excel para no perder tu data inicial.",
          "Que tenga prueba gratis y no permanencia.",
          "Que el soporte hable tu idioma (literal, en Argentina querés hablar con alguien en Argentina).",
          "Que se adapte a tu rubro (colegios, consorcios, instituciones, etc.).",
        ],
      },
      {
        type: "callout",
        text: "Cobria cumple los 5 puntos: WhatsApp Business oficial, importa Excel, 30 días gratis sin tarjeta, soporte argentino y casos de uso pensados específicamente para colegios y consorcios.",
      },
      { type: "cta" },
    ],
    related: [
      "como-cobrar-cuotas-colegio-por-whatsapp",
      "como-cobrar-expensas-por-whatsapp",
      "que-es-cobranza-automatizada",
    ],
  },

  {
    slug: "reducir-mora-consorcio",
    title:
      "Cómo reducir la mora en un consorcio sin pelearte con los propietarios",
    description:
      "Estrategias reales para bajar la mora de expensas en consorcios argentinos: causas frecuentes, comunicación escalonada, automatización y manejo respetuoso de propietarios morosos.",
    date: "2026-05-11",
    readingMinutes: 8,
    keywords: [
      "reducir mora consorcio",
      "mora expensas",
      "gestión deudores consorcio",
      "cobranza expensas argentina",
      "administración consorcios",
    ],
    lead:
      "La mora promedio en consorcios argentinos hoy está entre el 8 y el 15 por ciento, según el barrio y el tipo de edificio. Bajarla 5 puntos no requiere ser más duro con los propietarios: requiere comunicar mejor, automatizar lo repetitivo y reservar el contacto humano para los casos que lo necesitan.",
    sections: [
      {
        type: "h2",
        text: "Por qué los propietarios morosos no son 'malos vecinos'",
      },
      {
        type: "p",
        text: "Hay una tentación natural de pensar al deudor como alguien que no quiere pagar. En la práctica, la mayoría de los morosos en consorcios cae en tres categorías muy distintas: el desorganizado, el que tiene un problema puntual, y el que efectivamente no quiere pagar. Las tres requieren respuestas distintas.",
      },
      {
        type: "h2",
        text: "Las 3 causas reales de la mora en consorcios",
      },
      {
        type: "h3",
        text: "1. El propietario desorganizado",
      },
      {
        type: "p",
        text: "Se olvidó. Se le venció la tarjeta. No vio el mail. Tiene 30 cuentas a pagar por mes y la expensa se le pasó. Este caso es el más común y el más fácil de resolver: con un buen recordatorio automatizado y un link de pago directo, paga en el día.",
      },
      {
        type: "h3",
        text: "2. El que tiene un problema puntual",
      },
      {
        type: "p",
        text: "Se quedó sin trabajo, le explotó algo en la casa, está pasando un mal momento. Acá no funciona presionar: funciona contactar humanamente, ofrecer un plan de pago si corresponde, y mantener el respeto. Esta gente, cuando se recupera, paga todo y sigue siendo buen vecino.",
      },
      {
        type: "h3",
        text: "3. El moroso crónico",
      },
      {
        type: "p",
        text: "Una minoría. Acumula deuda mes a mes, no responde mensajes, no atiende llamadas. Acá sí corresponde escalar: aviso formal, intimación, eventualmente vía legal. Pero representa el 5 al 10 por ciento de los morosos, no la mayoría.",
      },
      {
        type: "p",
        text: "Tratar a los tres grupos con el mismo mensaje agresivo es el error más común. Termina perdiendo a los grupos 1 y 2 (que pagarían bien con un trato distinto) y no resolviendo al grupo 3.",
      },
      {
        type: "h2",
        text: "Estrategia de comunicación escalonada",
      },
      {
        type: "p",
        text: "La idea es que cada mensaje suba un escalón en formalidad y firmeza, sin saltos bruscos:",
      },
      {
        type: "ol",
        items: [
          "Día del vencimiento: recordatorio amable, link de pago. Asume buena fe.",
          "5 días después: segundo recordatorio, mismo tono. 'Por si se le pasó'.",
          "15 días después: aviso firme pero respetuoso. Menciona intereses si corresponde.",
          "30 días después: aviso formal por escrito. Aclara consecuencias.",
          "45+ días: intervención humana. Llamada, propuesta de plan de pago, o escalada legal.",
        ],
      },
      {
        type: "h2",
        text: "Cómo automatizar sin sonar como un banco",
      },
      {
        type: "p",
        text: "El error más común al automatizar es copiar el tono de los bancos: frío, genérico, lleno de mayúsculas. Eso aleja al propietario y empeora la relación.",
      },
      {
        type: "p",
        text: "Lo que funciona en consorcios:",
      },
      {
        type: "ul",
        items: [
          "Mensajes con el nombre del propietario (no 'estimado vecino').",
          "Mencionar la unidad funcional para que sepa que es real, no spam.",
          "Firma de la administración, con nombre y persona.",
          "Tono de 'recordatorio entre conocidos', no de 'intimación'.",
          "Opción visible de responder o hablar si tiene un problema.",
        ],
      },
      {
        type: "h2",
        text: "Resultados típicos al automatizar",
      },
      {
        type: "p",
        text: "Los datos de administraciones argentinas que adoptan cobranza automatizada muestran patrones consistentes en los primeros 3 meses:",
      },
      {
        type: "ul",
        items: [
          "Mora total: caída del 20 al 40 por ciento.",
          "Pagos en término: aumento del 15 al 25 por ciento.",
          "Tiempo administrativo: -60 por ciento.",
          "Quejas de propietarios sobre la cobranza: -50 por ciento.",
          "Conflictos en asamblea por mora: muy reducidos.",
        ],
      },
      {
        type: "p",
        text: "El último punto es el más subestimado: cuando la mora baja, las asambleas se vuelven menos tensas. La discusión deja de ser 'quién está debiendo' y vuelve a ser 'cómo cuidamos el edificio'.",
      },
      {
        type: "callout",
        text: "Cobria automatiza esta comunicación escalonada por WhatsApp Business, con plantillas pensadas para administraciones argentinas. Probalo 30 días gratis en uno de tus consorcios y mirá el resultado.",
      },
      { type: "cta" },
    ],
    related: [
      "como-cobrar-expensas-por-whatsapp",
      "que-es-cobranza-automatizada",
      "excel-vs-sistema-de-cobranza",
    ],
  },

  {
    slug: "que-es-cobranza-automatizada",
    title:
      "Qué es la cobranza automatizada y cómo funciona en Argentina",
    description:
      "Explicación clara de qué es la cobranza automatizada, cómo funciona paso a paso, qué empresas argentinas la usan y qué necesitás para arrancar en colegios, consorcios e instituciones.",
    date: "2026-05-11",
    readingMinutes: 6,
    keywords: [
      "qué es cobranza automatizada",
      "cobranza automática argentina",
      "automatización cobranza",
      "cobranza recurrente",
      "software cobranza",
    ],
    lead:
      "El término 'cobranza automatizada' suena más complejo de lo que es. En la práctica es: un sistema que se encarga solo de los recordatorios, links de pago, registro y reportes, y deja que la persona del equipo intervenga solo cuando hace falta. Esta nota desarma el concepto y explica cómo se aplica en Argentina.",
    sections: [
      {
        type: "h2",
        text: "Definición simple",
      },
      {
        type: "p",
        text: "La cobranza automatizada es el proceso de gestionar pagos recurrentes (cuotas, expensas, abonos, membresías) usando un sistema que ejecuta solo las tareas repetitivas: avisar el vencimiento, mandar el link de pago, registrar cuando se paga, recordar la mora, y generar reportes. La persona a cargo deja de hacer trabajo mecánico y solo entra en los casos que requieren juicio humano.",
      },
      {
        type: "h2",
        text: "Cómo funciona paso a paso",
      },
      {
        type: "ol",
        items: [
          "Carga inicial: subís tu cartera de clientes con sus datos, montos y vencimientos. Generalmente desde un Excel.",
          "Configuración: definís el calendario de mensajes (cuándo se manda el recordatorio, cuándo el aviso de mora) y el tono.",
          "Ejecución automática: el sistema manda los mensajes en las fechas programadas, vía WhatsApp Business, email u otro canal.",
          "Recepción del pago: el cliente paga por un link directo o transferencia. El sistema lo detecta y registra automáticamente.",
          "Reportes: en tiempo real ves cuánto cobraste, quién debe, dónde está la mora.",
          "Intervención humana: solo cuando alguien no responde o pide hablar. El sistema te avisa.",
        ],
      },
      {
        type: "h2",
        text: "Qué empresas argentinas usan cobranza automatizada",
      },
      {
        type: "p",
        text: "La mayoría de las organizaciones con cobranza mensual fija se benefician. En Argentina los rubros más comunes son:",
      },
      {
        type: "ul",
        items: [
          "Colegios e instituciones educativas (cuotas, matrículas, materiales).",
          "Administraciones y consorcios (expensas).",
          "Clubes y asociaciones civiles (cuotas societarias).",
          "Gimnasios y academias (abonos mensuales).",
          "Servicios profesionales con clientes fijos (contadores, abogados, consultores).",
          "Pymes con cartera recurrente.",
        ],
      },
      {
        type: "h2",
        text: "WhatsApp + cobranza automatizada: por qué es la combinación",
      },
      {
        type: "p",
        text: "El mail tiene apertura del 15 al 25 por ciento. El SMS, del 30 al 40 por ciento. WhatsApp, del 90 por ciento. En cobranza, donde lo que querés es que el cliente vea el aviso, abrir tasa es todo.",
      },
      {
        type: "p",
        text: "Pero no basta con que abra: tiene que poder pagar fácil. Por eso la combinación que funciona en Argentina es: recordatorio por WhatsApp + link de pago precargado + medios locales (transferencia, Mercado Pago, tarjeta). Tres clics y listo.",
      },
      {
        type: "h2",
        text: "Qué necesitás para arrancar",
      },
      {
        type: "ul",
        items: [
          "Un número de WhatsApp dedicado para cobranza (separado del personal).",
          "WhatsApp Business activado en ese número (gratis, oficial).",
          "Tu cartera de clientes en algún formato (Excel sirve).",
          "Una pasarela de pago (Mercado Pago, transferencia, lo que ya uses).",
          "Un sistema que integre las tres cosas. Cobria por ejemplo.",
        ],
      },
      {
        type: "h2",
        text: "Mitos y verdades",
      },
      {
        type: "h3",
        text: "'La cobranza automatizada es impersonal'",
      },
      {
        type: "p",
        text: "Falso si se hace bien. Los mensajes pueden estar personalizados con nombre, monto, fecha y contexto. Lo impersonal son las planillas frías y los mails genéricos del banco — no la automatización en sí.",
      },
      {
        type: "h3",
        text: "'Solo sirve para empresas grandes'",
      },
      {
        type: "p",
        text: "Falso. La automatización tiene más impacto relativo en organizaciones chicas, donde una persona sola hacía todo el trabajo manual. A 500 cuotas/mes, te cambia la vida; a 50, también, porque te libera de la fricción diaria.",
      },
      {
        type: "h3",
        text: "'Es difícil de implementar'",
      },
      {
        type: "p",
        text: "Depende del sistema. Los buenos te activan en 24 horas, importan tu Excel sin transformaciones extrañas, y te configuran los mensajes en una llamada. La parte técnica la maneja el proveedor.",
      },
      {
        type: "callout",
        text: "Cobria es una plataforma argentina de cobranza automatizada por WhatsApp pensada para colegios, consorcios e instituciones del país. Probala 30 días gratis sin tarjeta.",
      },
      { type: "cta" },
    ],
    related: [
      "como-cobrar-cuotas-colegio-por-whatsapp",
      "como-cobrar-expensas-por-whatsapp",
      "excel-vs-sistema-de-cobranza",
    ],
  },

  {
    slug: "errores-cobranza-cuotas-colegios",
    title:
      "5 errores comunes al cobrar cuotas en colegios (y cómo evitarlos)",
    description:
      "Los 5 errores más frecuentes en la cobranza de cuotas en colegios argentinos y cómo corregirlos: mezclar WhatsApp personal, falta de calendario, tono inadecuado en mora, ausencia de reportes y más.",
    date: "2026-05-11",
    readingMinutes: 7,
    keywords: [
      "errores cobranza colegios",
      "gestión cuotas colegio",
      "cobranza escolar argentina",
      "mora colegios",
      "administración colegios",
    ],
    lead:
      "Trabajamos con más de un colegio en Córdoba y otras provincias. Hay patrones claros: los problemas de cobranza no son únicos, se repiten. Esta nota condensa los 5 errores más comunes que vimos en administraciones escolares argentinas y cómo se corrigen sin reinventar la rueda.",
    sections: [
      {
        type: "h2",
        text: "Error 1 — Mezclar WhatsApp personal con cobranza",
      },
      {
        type: "p",
        text: "La administrativa del colegio usa su propio WhatsApp para escribirle a las familias. El resultado: las familias la contactan a cualquier hora, sus chats personales se mezclan con los del colegio, y el colegio queda dependiente de esa persona para siempre (si renuncia, se va su agenda).",
      },
      {
        type: "p",
        text: "Cómo evitarlo: número de WhatsApp dedicado para el colegio, en modo Business, con identidad institucional. La cobranza pasa a ser un canal del colegio, no de una persona.",
      },
      {
        type: "h2",
        text: "Error 2 — No tener calendario de recordatorios",
      },
      {
        type: "p",
        text: "Los recordatorios se mandan 'cuando alguien se acuerda'. Algunos meses se mandan a los 3 días post-vencimiento, otros a los 10, otros nunca. La familia entonces no tiene expectativas claras de cuándo va a llegar el aviso, y se relaja en pagar.",
      },
      {
        type: "p",
        text: "Cómo evitarlo: definir un calendario fijo de 4 a 5 hitos de comunicación por cada ciclo de cuota y respetarlo. Las familias se adaptan al ritmo. Lo ideal: que el sistema lo mande solo y no dependa de la memoria de nadie.",
      },
      {
        type: "h2",
        text: "Error 3 — Cobrar de a uno, sin sistema",
      },
      {
        type: "p",
        text: "Cada cobro se procesa individualmente: la familia transfiere, manda el comprobante al WhatsApp, alguien lo mira, lo anota en un Excel, y al rato lo confirma. Cuando hay 100 cuotas mensuales, ese flujo se rompe: faltan confirmaciones, se pierden comprobantes, las familias quedan sin respuesta.",
      },
      {
        type: "p",
        text: "Cómo evitarlo: link de pago con el monto cargado. La familia paga en un solo paso, el sistema registra el pago automáticamente y manda el comprobante. La administración solo interviene en excepciones (pago en efectivo, plan de pagos, etc.).",
      },
      {
        type: "h2",
        text: "Error 4 — Tono inadecuado en los mensajes de mora",
      },
      {
        type: "p",
        text: "Dos extremos comunes: el tono pasivo ('hola, te paso este mensaje por si te acordás de la cuota...') que la familia ignora, o el tono agresivo ('SU CUOTA ESTÁ VENCIDA') que la familia se ofende. Ninguno funciona.",
      },
      {
        type: "p",
        text: "Cómo evitarlo: escalonamiento de tono. El primer recordatorio asume buena fe y es amable. El segundo es claro y directo. El tercero menciona consecuencias. Cada escalón sube en firmeza sin saltar a hostilidad.",
      },
      {
        type: "p",
        text: "Plantilla recomendada para el primer recordatorio:",
      },
      {
        type: "quote",
        text: "Hola [Nombre], te recordamos que la cuota de [Mes] vence el [Fecha]. El monto es $[Monto]. Podés pagarla directo desde este link: [Link]. Cualquier consulta, escribinos.",
      },
      {
        type: "h2",
        text: "Error 5 — No reportar a dirección",
      },
      {
        type: "p",
        text: "La administración cobra (más o menos) pero la dirección general no tiene visibilidad. No sabe cuánto se recuperó este mes, qué cohorte de familias tiene más mora, si la deuda histórica creció o bajó. Sin datos, no hay decisiones.",
      },
      {
        type: "p",
        text: "Cómo evitarlo: reporte mensual con métricas claras. Recupero del mes, mora total, mora por nivel/cohorte, comparativo con el mes anterior. Si el sistema lo arma automáticamente, la dirección lo mira en 2 minutos y puede tomar decisiones (descuentos, planes de pago, becas, etc.).",
      },
      {
        type: "h2",
        text: "Bonus — Error 6: cobrar como si fuera el banco",
      },
      {
        type: "p",
        text: "Algunos colegios adoptan el tono y estética bancaria: mensajes en mayúsculas, palabras como 'intimación', plazos legales. La familia se asusta o se ofende. El colegio no es un banco. El vínculo con la familia es de largo plazo.",
      },
      {
        type: "p",
        text: "El tono debería ser el del colegio, no el del cobrador. Profesional pero humano. Firme pero respetuoso.",
      },
      {
        type: "callout",
        text: "Cobria está pensada exactamente para evitar estos 5 errores: canal dedicado, calendario configurable, links de pago, plantillas escalonadas y reportes para dirección. Probala 30 días gratis y mirá la diferencia.",
      },
      { type: "cta" },
    ],
    related: [
      "como-cobrar-cuotas-colegio-por-whatsapp",
      "que-es-cobranza-automatizada",
      "excel-vs-sistema-de-cobranza",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return post.related
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => Boolean(p));
}
