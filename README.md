# BibliotecaFrontend

Frontend de una aplicación de recomendaciones de lectura desarrollada con React, TypeScript, Vite y TailwindCSS.

El proyecto permite a los usuarios:
- iniciar sesión
- crear cuentas
- explorar libros
- visualizar detalles de libros
- recibir recomendaciones
- administrar su biblioteca personal

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
```

## 2. Entrar al proyecto

```bash
cd BibliotecaFrontend
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar el proyecto

```bash
npm run dev
```

---

# Estructura del proyecto

```txt
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
```

---

# Funcionalidades actuales

## Autenticación

- Inicio de sesión
- Registro de usuarios
- Navegación entre páginas

## Biblioteca

- Lecturas en proceso
- Lecturas guardadas
- Lecturas terminadas

## Explorar

- Visualización de libros recomendados
- Barra de búsqueda
- Agregar libros

## Detalles de libros

- Información detallada
- Recomendaciones similares

## Cuenta

- Estadísticas del usuario
- Género favorito
- Autor favorito
- Cierre de sesión

---

# Navegación

| Ruta | Descripción |
|---|---|
| `/` | Login |
| `/register` | Registro |
| `/home` | Biblioteca principal |
| `/explore` | Explorar libros |
| `/books/:id` | Detalles del libro |
| `/account` | Cuenta del usuario |

---

# Arquitectura

El proyecto utiliza:
- componentes reutilizables
- layouts globales
- rutas dinámicas
- props y composición de componentes

La aplicación está preparada para integrarse posteriormente con:
- backend en Python
- base de datos
- algoritmos de recomendación:
  - RandomWalk
  - Jaccard
  - PageRank

---

# Futuras mejoras

- Integración completa con backend
- Base de datos real
- Búsqueda funcional
- Sistema de favoritos
- Imágenes reales de libros
- Recomendaciones dinámicas
- Responsive móvil
- Modo oscuro
- Perfil editable

---

# Autor

José Leonel Hernández Suchini 25041