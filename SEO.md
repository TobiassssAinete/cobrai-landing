# Auditoría y optimización SEO de cobria.org

Reporte del trabajo realizado y plan de acción para que **Cobria** aparezca primero (o entre los primeros resultados) en Google, Bing y motores de IA (ChatGPT, Perplexity, Gemini, Copilot) ante búsquedas de marca y términos de cobranza por WhatsApp.

---

## 1. Auditoría inicial — antes / después

| Área | Antes | Después |
|---|---|---|
| Dominio canónico | `https://cobria-landing.vercel.app` en todos los metadatos | `https://cobria.org` centralizado en `src/lib/site.ts` |
| Sitemap | Solo la home | 9 URLs: home, /que-es-cobria, /colegios, /consorcios, /precios, /faq, /contacto, /privacidad, /terminos |
| robots.txt | Allow genérico `*` | Allow `*` + 17 bots permitidos explícitamente (Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot, etc.) |
| llms.txt | No existía | Sí (`/llms.txt`) con definición de marca, casos de uso, contacto y páginas principales |
| OG image | SVG (no renderiza en FB/LinkedIn/WhatsApp) | PNG generado dinámicamente con Next.js `ImageResponse` 1200×630 |
| Schema Organization | Básico, sin alternateName | Completo: `alternateName: [Cobrai, Cobria Argentina]`, `legalName`, `areaServed`, `contactPoint[]`, `knowsAbout`, `@id` enlazable |
| Schema WebSite | No existía | `@type: WebSite` con `inLanguage`, `publisher` referenciado |
| Schema SoftwareApplication | Básico | Con `audience`, `applicationSubCategory`, `alternateName`, `publisher` referenciado |
| Schema FAQPage | Sí (en home) | Sí en home + duplicado dedicado en `/faq` |
| Schema BreadcrumbList | No existía | En cada nueva página (`/que-es-cobria`, `/colegios`, `/consorcios`, `/precios`, `/faq`, `/contacto`) |
| Schema Service | No existía | En `/colegios` y `/consorcios` |
| Schema AboutPage | No existía | En `/que-es-cobria` |
| Schema ContactPage | No existía | En `/contacto` |
| Schema OfferCatalog | No existía | En `/precios` con los 4 planes |
| Páginas reales | 3 (home, /privacidad, /terminos) | 9 (las anteriores + /que-es-cobria, /colegios, /consorcios, /precios, /faq, /contacto) |
| FAQ contenido | 6 preguntas operativas | 15 preguntas, las primeras 9 pensadas para AEO/IA ("¿Qué es Cobria?", "¿Cobria sirve para colegios?", "¿Cobria funciona en Argentina?", "¿Diferencia con Excel?", "¿Cómo se contrata?") |
| Title home | "Cobria — Cobrá expensas y cuotas por WhatsApp \| Argentina" | "Cobria \| Cobranza automática por WhatsApp para colegios y consorcios" (alineado al spec) |
| Meta description home | Más operativa | Marca + propuesta de valor + país + CTA (alineado al spec) |
| Keywords | 12 términos | 17 términos (incluye "Cobria", "Cobrai", variantes de uso) |
| Nav | Anchors `#colegios`, `#precios` | URLs reales `/colegios`, `/precios`, `/consorcios`, `/faq`, `/contacto` |
| Footer | Anchors `#como-funciona` | URLs reales + link a `/que-es-cobria` |
| Renderizado SEO | Server-rendered metadata vía App Router (ya estaba bien) | Igual — confirmado en build estático de las 16 rutas |
| Mobile-first | Tailwind responsive (ya estaba bien) | Igual — sin cambios |
| HTTPS / Core Web Vitals | Vercel automático | Igual — sin cambios |

### Build verificado

```
✓ Compiled successfully in 8.6s
Route (app)
○ /
○ /colegios
○ /consorcios
○ /contacto
○ /faq
○ /opengraph-image
○ /precios
○ /privacidad
○ /que-es-cobria
○ /robots.txt
○ /sitemap.xml
○ /terminos
○ /twitter-image
```

Todas las rutas son estáticas (`○`) — máxima velocidad y SEO.

---

## 2. Consistencia de marca

**Marca principal:** Cobria
**Variantes detectadas en JSON-LD `alternateName`:** Cobrai, Cobria Argentina
**Descripción canónica:** "Cobranza automatizada por WhatsApp para colegios y consorcios en Argentina."

Esto le señala a Google e IAs que **Cobria** y **Cobrai** se refieren a la misma entidad — útil porque hubo un rebrand reciente y aún puede haber backlinks o menciones con la grafía antigua.

---

## 3. Datos estructurados (JSON-LD) por página

Validar todo después del deploy en:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

### `/` (home)
- `Organization` (con `alternateName`, `contactPoint[]`, `address`, `knowsAbout`)
- `WebSite`
- `SoftwareApplication` (con los 4 planes como `offers[]`)
- `FAQPage` (con las 15 preguntas)

### `/que-es-cobria`
- `AboutPage` referenciando la Organization
- `BreadcrumbList`

### `/colegios`
- `Service` (subtype "Cobranza automatizada para colegios", audience `EducationalAudience`)
- `BreadcrumbList`

### `/consorcios`
- `Service` (audience administraciones)
- `BreadcrumbList`

### `/precios`
- `OfferCatalog` con los 4 planes
- `BreadcrumbList`

### `/faq`
- `FAQPage` dedicada con las 15 preguntas
- `BreadcrumbList`

### `/contacto`
- `ContactPage` referenciando la Organization
- `BreadcrumbList`

---

## 4. robots.txt — bots permitidos

Generado dinámicamente desde `src/app/robots.ts`. Permite:

**Buscadores tradicionales:** Googlebot, Googlebot-Image, Bingbot, DuckDuckBot, Applebot
**IA — search:** OAI-SearchBot, PerplexityBot, Perplexity-User, ChatGPT-User
**IA — entrenamiento (opcional, hoy permitido):** GPTBot, Google-Extended, ClaudeBot, Claude-Web, anthropic-ai, CCBot, Bytespider, MistralAI-User, cohere-ai

> Si en algún momento querés **bloquear el entrenamiento de IA** sin perder la visibilidad en ChatGPT Search, hay que cambiar `GPTBot`, `Google-Extended`, `ClaudeBot`, `CCBot` a `disallow`. **OAI-SearchBot** debe quedar `allow` siempre para aparecer en resultados de búsqueda de ChatGPT.

---

## 5. Archivos clave

| Archivo | Función |
|---|---|
| `src/lib/site.ts` | Configuración centralizada de marca (URL, nombre, descripciones, contacto). Cambiá una vez, aplica a todo el sitio. |
| `src/lib/faqs.ts` | 15 preguntas frecuentes. Las primeras 9 están escritas para que ChatGPT/Perplexity/Gemini puedan citar la respuesta literalmente cuando alguien pregunte "qué es Cobria". |
| `src/app/layout.tsx` | Metadata global, JSON-LD de Organization + WebSite + SoftwareApplication + FAQPage. |
| `src/app/robots.ts` | robots.txt con bots de IA explícitos. |
| `src/app/sitemap.ts` | Sitemap con las 9 URLs. |
| `src/app/opengraph-image.tsx` | OG image PNG 1200×630 generada dinámicamente. |
| `src/app/twitter-image.tsx` | Twitter card (reusa OG). |
| `public/llms.txt` | Resumen estructurado para motores de IA. |
| `src/components/JsonLd.tsx` | Helper para inyectar JSON-LD + builder de breadcrumbs. |

---

## 6. Pendiente — acciones externas tuyas

Estas son las cosas que **no puedo hacer yo** y que necesito que ejecutes vos. Las dejo en orden de prioridad.

### Bloque 1 — verificar dominio + indexar (PRIMERO Y URGENTE)

- [ ] **Deploy a producción** en Vercel (push a master + verificar que `cobria.org` sirve la nueva versión).
- [ ] **Search Console**: agregar la propiedad `https://cobria.org`, verificar (token DNS o archivo HTML), enviar el sitemap `https://cobria.org/sitemap.xml`, inspeccionar la URL principal, solicitar indexación.
- [ ] **Bing Webmaster Tools**: importar la propiedad desde Search Console (botón de importación), enviar sitemap, solicitar indexación.
- [ ] **Validar JSON-LD**: pasar cada URL nueva por https://search.google.com/test/rich-results y confirmar que detecta los schemas. Si tira warning, mandame el error y lo corrijo.
- [ ] **Verificar robots y sitemap** en navegador: `https://cobria.org/robots.txt` y `https://cobria.org/sitemap.xml`.
- [ ] **Verificar OG**: pegar `https://cobria.org` en https://www.opengraph.xyz/ y https://www.linkedin.com/post-inspector/ para confirmar que el preview se ve bien.
- [ ] **Verificar llms.txt**: `https://cobria.org/llms.txt`.

### Bloque 2 — señales de confianza (E-E-A-T)

- [ ] **Email con dominio propio**: hoy figura `cobriasas@gmail.com`. Para SEO/E-E-A-T conviene `contacto@cobria.org` o `hola@cobria.org`. Cuando lo crees avisame y lo actualizo en `src/lib/site.ts` (cambio único). Vercel ofrece email reenvío con `Vercel Email Forwarding` si querés algo simple.
- [ ] **Google Business Profile (opcional pero recomendado)**: crear un perfil de empresa en Google con dirección/área Córdoba, teléfono, descripción y categoría "Servicio empresarial / Software". Refuerza SEO local.
- [ ] **Redes sociales**: crear perfiles en LinkedIn, Instagram, Twitter/X y agregármelos a `siteConfig.sameAs` (rellena el JSON-LD Organization con backlinks de marca).

### Bloque 3 — dominio www vs sin www

- [ ] Asegurar que `www.cobria.org` redirige 301 a `https://cobria.org` (o al revés). Lo configura Vercel automáticamente si agregás el dominio en el dashboard.

---

## 7. Plan 30 / 60 / 90 días

### Días 0–30 — Indexación y validación
- Ejecutar Bloque 1 + Bloque 2 (acciones externas).
- Configurar Google Analytics 4 + Search Console (ya está Vercel Analytics, sumar GA4 si querés más detalle).
- Validar que **cobria.org está indexado** para la búsqueda exacta "Cobria" (debería aparecer entre los primeros resultados en 7–14 días).
- Empezar a generar **backlinks naturales**: foros de administradores, grupos de Facebook de directores de colegios, LinkedIn personal, listados en directorios de software argentino (Sortlist, GetApp, Capterra Argentina).

### Días 30–60 — Contenido
- Sumar **blog** (`/blog`) con 4–6 artículos pensados para búsquedas reales:
  - "Cómo automatizar la cobranza de cuotas escolares por WhatsApp"
  - "Cómo cobrar expensas por WhatsApp sin perder tiempo"
  - "Excel vs sistema de cobranza: cuándo conviene automatizar"
  - "Cómo reducir la mora en consorcios sin pelearte con propietarios"
- Cada artículo: H1 con keyword principal, 800–1500 palabras, 3–4 H2, link interno a `/que-es-cobria` + `/colegios` o `/consorcios` + CTA a WhatsApp.
- Si querés, te genero los borradores cuando me digas.

### Días 60–90 — Reforzar autoridad
- Conseguir 2–3 menciones en **medios argentinos** (Iproup, La Nación Pymes, Infobae Negocios, Diario de Cuyo, La Voz Córdoba) hablando del producto. Mail outreach a periodistas de pymes/tech.
- Casos de éxito reales: una página por caso (`/casos/colegio-x`, `/casos/consorcio-y`) con testimonio, foto, métricas.
- Reseñas en Google Business Profile (pedirle a clientes actuales).
- Monitor de marca: alerta de Google + búsqueda manual en ChatGPT y Perplexity de "qué es Cobria" para ver cómo responde la IA. Si la respuesta es pobre, ajustamos `/llms.txt` y el FAQ.

### Métricas para seguir (Search Console + GA4)
- Posición media para "Cobria", "Cobrai", "cobria.org" (objetivo: top 3 en 30 días).
- Posición media para "cobranza por WhatsApp", "cobrar expensas WhatsApp", "cobranza colegios Argentina" (objetivo: top 10 en 90 días).
- Impresiones orgánicas mensuales.
- CTR (objetivo: > 5% para keywords de marca).
- Páginas indexadas (objetivo: las 9 en 14 días).
- Tráfico desde ChatGPT / Perplexity (referer en GA4 — aparece como `chat.openai.com`, `perplexity.ai`).
- Conversiones a WhatsApp (eventos en GA4 sobre clicks a `wa.me/...`).

---

## 8. Lo que NO se hizo (deliberadamente)

- ❌ No se inflaron keywords ("keyword stuffing"). Las menciones de "Cobria" son naturales y contextuales.
- ❌ No se compraron backlinks ni se crearon páginas vacías.
- ❌ No se bloqueó a Googlebot ni a OAI-SearchBot.
- ❌ No se ocultó texto ni se usó schema que no coincida con contenido visible.
- ❌ No se duplicó contenido entre páginas: cada landing tiene H1, copy y contexto propios.
- ❌ No se creó blog todavía — primero indexar lo core, después escalar.

---

## 9. Commit / deploy

Los cambios están listos para commit. Cuando me digas, armo el commit con todos estos cambios y lo push-eo. Te recomiendo:

1. Mirar el diff completo (yo no lo committeé sin permiso).
2. Hacer `pnpm dev` y revisar las 6 páginas nuevas localmente (`/que-es-cobria`, `/colegios`, `/consorcios`, `/precios`, `/faq`, `/contacto`).
3. Aprobar y push a master → Vercel hace el deploy.
4. Ejecutar Bloque 1 de acciones externas.

---

## Resumen ejecutivo

**Lo que cambió en una línea:** el sitio pasó de ser una landing de 1 URL para `cobria-landing.vercel.app` a un sitio de 9 URLs en `cobria.org` con schema.org completo, llms.txt, OG dinámico y robots optimizado para Google + IA.

**Lo que necesitás hacer vos:** deploy, verificar dominio en Search Console y Bing, validar JSON-LD, idealmente crear email con dominio propio.

**Lo que esperaría ver en métricas:** indexación de las 9 URLs en 14 días, top 3 para "Cobria" en 30 días, top 10 para "cobranza WhatsApp" en 90 días.
