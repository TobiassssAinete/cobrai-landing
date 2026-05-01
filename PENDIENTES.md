# Cobrai Landing — Pendientes

> Estado: v1 implementada y buildeada localmente. Falta deploy + assets reales + páginas legales.

---

## 🔴 Bloqueantes para mandar tráfico

### 1. Crear páginas `/terminos` y `/privacidad`
El footer linkea a `/terminos` y `/privacidad` pero las rutas no existen → click = 404.

**Cómo:**
- Crear `src/app/terminos/page.tsx` y `src/app/privacidad/page.tsx`.
- Pegar texto base (te lo puede generar un abogado o un LLM con tus datos: razón social, CUIT, domicilio, email de contacto).
- Mínimo: identidad del responsable, qué datos se recolectan, finalidad, base legal (Ley 25.326), derechos ARCO, cómo cancelar/exportar data, jurisdicción.

**Alternativa si todavía no las tenés:** sacar los links del Footer hasta que estén.

### 2. Email `hola@cobrai.com.ar`
Es el único canal de contacto en toda la landing (todos los CTAs son `mailto:hola@cobrai.com.ar`). Si no existe o no reenvía → leads perdidos.

**Cómo:**
- Crear el alias en tu proveedor de DNS/mail (Cloudflare Email Routing es gratis, o Google Workspace si querés profesional).
- Que reenvíe a un inbox que mires todos los días.
- Probar mandándote un mail desde otro inbox.

### 3. Deploy a Vercel + dominio
La landing solo corre local. Para que sea pública:

```bash
cd cobrai-landing
git init
git add .
git commit -m "feat: initial landing"
git branch -M main
gh repo create alejocarranza/cobrai-landing --public --source=. --push
```

Después en `vercel.com` → Add New Project → importar `cobrai-landing` → Deploy.

**Domain:**
- Cuando NIC.ar confirme `cobrai.com.ar`, en Vercel → Settings → Domains → Add → seguir las instrucciones DNS.
- Más simple: poner Cloudflare en el medio (DNS gratis + SSL + analytics).

---

## 🟡 Importante antes de promocionar (no rompe nada pero suma mucho)

### 4. Imagen de OpenGraph
Hoy compartir el link en WhatsApp/Twitter/LinkedIn muestra solo título + descripción, sin imagen. Esto es el 80% del CTR en redes.

**Cómo:**
- Diseñar `og.png` 1200×630 con logo Cobrai + headline "Cobrá por WhatsApp" + fondo brand.
- Guardarlo en `public/og.png`.
- En `src/app/layout.tsx`, dentro de `metadata.openGraph` agregar:
  ```ts
  images: [{ url: "https://cobrai.com.ar/og.png", width: 1200, height: 630 }],
  ```
- Mismo agregar en `metadata.twitter` con `card: "summary_large_image"`.
- Validar con `https://opengraph.xyz/url/...` después del deploy.

### 5. Screenshot real del dashboard
El Hero tiene un placeholder gris con un emoji 📊. Reemplazar por screenshot real cuando la app productiva esté visible.

**Cómo:**
- Tomar screenshot de `app.cobrai.com.ar` (1600×1200 aprox).
- Guardar en `public/dashboard.png`.
- En `src/components/Hero.tsx`, reemplazar el `<div>` placeholder por:
  ```tsx
  <Image src="/dashboard.png" alt="Dashboard de Cobrai" width={1600} height={1200} priority />
  ```
- Importar `Image` de `next/image`.

### 6. Favicon Cobrai
Hoy es el favicon default de Next (la N negra). Reemplazar `src/app/favicon.ico` por uno con la C de Cobrai en brand-800.

**Cómo:** generar en `https://realfavicongenerator.net` desde un SVG/PNG simple.

### 7. Páginas mobile testing real
La landing es responsive (probada con DevTools al construirla) pero **no probada en celular real**. El menú mobile, tap targets y line-height pueden tener glitches.

**Cómo:**
- Después del deploy, abrir en un Android y un iPhone reales.
- Chequear: nav abre/cierra OK, CTAs son tappeables (mín 44px), no hay overflow horizontal, el banner verde final no rompe en pantallas chicas.

---

## 🟢 Antes de tracción seria (mes 1-2)

### 8. Lighthouse > 90 en Performance + Accessibility
Después del deploy:
```bash
npx lighthouse https://cobrai.com.ar --view
```
Si baja de 90, los culpables más probables: imágenes sin optimizar, JS de Vercel Analytics si tarda, faltan `alt` o `aria-label`.

### 9. Test de comprensión con 3 personas que NO conocen Cobrai
Mandales el link y preguntales (en WhatsApp): *"¿qué hace esto?"* — sin contexto. Si tardan más de 10 segundos en entender, hay que reescribir el headline o la subhead.

### 10. PostHog para session replays + funnel
Vercel Analytics te da pageviews. Para entender qué hacen los visitantes (dónde clickean, dónde se van, en qué sección abandonan):

```bash
pnpm add posthog-js
```
- Crear cuenta gratis en `posthog.com`.
- Instrumentar el provider en un `app/providers.tsx` client component.
- Trackear evento `cta_click` en cada botón mailto.

### 11. Cambiar "WhatsApp soporte" del footer
Hoy el link es `mailto:` con subject "Soporte". Cuando tengan número de WhatsApp Business activo, cambiarlo a:
```ts
{ label: "WhatsApp soporte", href: "https://wa.me/549XXXXXXXXXX?text=Hola%20Cobrai" }
```
en `src/components/Footer.tsx`.

### 12. Logo SVG real
Hoy es texto "Cobrai" en Plus Jakarta Sans bold con color brand-800 — funciona, pero un logo SVG simple suma profesionalidad. Encargar a un diseñador o sacar uno con Figma/Logoist (~30 min).

Reemplazar el `<Link href="/" className="...">Cobrai</Link>` en `Nav.tsx` y `Footer.tsx` por un `<Image>` o `<svg>` inline.

---

## ⚪ Nice-to-have (cuando tenga sentido)

- **Página de "Casos" / clientes** — cuando tengas 2-3 colegios o consorcios reales con permiso para nombrarlos.
- **Calculadora de ahorro** — input "cantidad de deudores" → output "horas/mes que te ahorrás". Buen lead magnet.
- **Blog** — solo si vas a escribir consistente (1 post/mes mínimo). SEO de cola larga ("cómo cobrar expensas atrasadas") puede traer tráfico orgánico.
- **A/B test del headline** — solo cuando tengas 500+ visitas/semana. Antes es ruido.
- **Comparativa con competencia** — investigar primero quiénes son (Expensas Online, Octapus, Octa, etc.) y armar una tabla honesta.
- **Form embebido en vez de mailto** — Resend o Formspree. Reduce fricción ~20%, pero `mailto` alcanza al inicio.

---

## ❌ NO hacer en v1 (del spec original — aguantar la tentación)

- No agregar testimonios falsos.
- No agregar chat widget.
- No diseñar logo elaborado.
- No A/B testing.
- No formulario "demo" complejo.

---

## Resumen de prioridades

| # | Item | Bloquea ir live? | Tiempo |
|---|---|---|---|
| 1 | Términos + Privacidad | ✅ | 1-2 hs |
| 2 | Email hola@cobrai.com.ar | ✅ | 15 min |
| 3 | Deploy + dominio | ✅ | 30 min + DNS prop |
| 4 | OG image | 🟡 fuerte | 1 hs |
| 5 | Screenshot dashboard | 🟡 | 15 min |
| 6 | Favicon | 🟢 | 15 min |
| 7 | Test mobile real | 🟡 | 30 min |
| 8 | Lighthouse | 🟢 | 30 min |
| 9 | Test comprensión x3 | 🟢 | 1-2 días |
| 10 | PostHog | 🟢 | 1 hs |
| 11 | Footer WhatsApp link | 🟢 | 5 min |
| 12 | Logo SVG | 🟢 | variable |

**Camino crítico para ir live:** 1 + 2 + 3 ≈ medio día de trabajo + esperar DNS.
