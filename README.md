# 🚗 Venta de Autos - Next.js + Supabase

Aplicación web desarrollada con **Next.js 16+ (App Router)** y **Supabase** para mostrar una lista de autos en venta.  
Incluye conexión a base de datos, rutas dinámicas y políticas de seguridad (RLS).

---

## 🚀 Instalación

1. Clonar el repositorio:
   git clone https://github.com/tuusuario/landing-autos.git

2. Entrar al directorio:
   cd landing-autos

3. Instalar dependencias:
   npm install

4. Configurar variables de entorno en `.env.local`:
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key

5. Levantar el servidor:
   npm run dev

6. Abrir en navegador:
   http://localhost:3000

---

## 🧩 Funcionalidades

- Página principal (`/`): lista todos los autos con marca, modelo y precio.
- Ruta dinámica (`/autos/[slug]`): muestra detalle de cada auto.
- Integración con Supabase: lectura de datos desde tabla `autos`.
- RLS configurado: política de lectura pública para `anon` y `authenticated`.
- Diseño básico responsive con tarjetas y navegación.

---

## 📂 Estructura del proyecto

app/
 ├─ page.tsx              # Página principal
 ├─ autos/
 │   └─ [slug]/
 │       └─ page.tsx      # Página de detalle por auto
 ├─ loading.tsx           # Estado de carga
 └─ error.tsx             # Manejo de errores
lib/
 └─ supabaseClient.ts     # Configuración de Supabase

---

## 🛡️ Seguridad

- Variables de entorno protegidas en `.env.local`.
- `.gitignore` incluye:
  node_modules/
  .next/
  .env.local

---

## 📸 Capturas de pantalla

Agrega imágenes de tu app en una carpeta `/screenshots` y referencia así:

![Home](screenshots/home.png)
![Detalle](screenshots/detalle.png)

---

## 🌐 Despliegue

- Proyecto desplegado en **Vercel**: https://venta-autos.vercel.app  
- Repositorio público en GitHub: https://github.com/tuusuario/landing-autos

---

## ✨ Autor

- Jorge –
