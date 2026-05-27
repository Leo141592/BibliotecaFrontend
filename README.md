# BibliotecaFrontend

Frontend de una aplicación de recomendaciones de lectura desarrollada con React, TypeScript, Vite y TailwindCSS.

El proyecto permite a los usuarios:
- iniciar sesión,
- crear cuentas,
- explorar libros,
- visualizar detalles de libros,
- recibir recomendaciones,
- administrar su biblioteca personal.

---

# Tecnologías utilizadas

- React
- TypeScript
- Vite
- TailwindCSS
- React Router DOM

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/Leo141592/BibliotecaFrontend.git


## 2. Entrar al proyecto
cd BibliotecaFrontend

## 3. Instalar dependencias
npm install

## 4. Ejecutar el proyecto
npm run dev

## Estructura del proyecto
src/
│
├── components/
│   ├── BookCard.tsx
│   └── Sidebar.tsx
│
├── layouts/
│   └── MainLayout.tsx
│
├── pages/
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── HomePage.tsx
│   ├── ExplorePage.tsx
│   ├── BookDetailsPage.tsx
│   └── AccountPage.tsx
│
├── App.tsx
└── main.tsx
