# Hoshiumi Web

Hoshiumi Web es una tienda de arte independiente enfocada en ilustraciones originales, prints y stickers.

---

## Sobre la tienda

Hoshiumi ofrece:

- Prints de alta calidad
- Packs de stickers originales
- Stickers coleccionables individuales
- Lanzamientos de edición limitada

---

## Tech Stack

**Frontend (principal):**
- React 18
- React Router v6
- Vite
- JavaScript ES6+
- Context API + useState (gestión de estado)

**Frontend (respaldo):**
- Vue 3 (Composition API)
- TypeScript
- Pinia

**Deployment:**
- Vercel

---

## Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/Art_Store.git
cd Art_Store

# Instalar dependencias del frontend React
cd frontend-react
npm install
npm run dev
```

El servidor de desarrollo estará en `http://localhost:5173`.

---

## Features actuales

- Catálogo de productos (Prints y Stickers)
- Página de detalle por producto
- Carrito de compras con control de cantidades
- Favoritos
- Modo oscuro / claro
- Diseño responsive (móvil, tablet, escritorio)
- Flujo de checkout simulado

---

## Deployment

La versión en producción se despliega con Vercel:

- Root Directory: `frontend-react`
- Build Command: `npm run build`
- Output Directory: `dist`

---

## Roadmap

- Integración con Stripe (pagos reales)
- Backend con API de productos y pedidos
- Autenticación de usuarios
- Gestión de inventario
- Soporte de envíos internacionales

---

## Propiedad intelectual

Todas las ilustraciones, assets visuales y elementos de marca son propiedad exclusiva de Hoshiumi. Queda prohibida su reproducción o uso comercial sin autorización.
