# 🍕 Pizzería Miracle since 1994 – Hito 7

## 📌 Descripción del proyecto

Pizzería Miracle since 1994 es una aplicación web desarrollada con React y Vite como parte del Hito 7 – Pizzería Mamma Mía de Desafío Latam.

En esta etapa se implementan rutas protegidas mediante React Router DOM, autenticación simulada utilizando Context API y navegación dinámica hacia los detalles de cada pizza mediante el hook `useParams`.

El proyecto continúa las funcionalidades desarrolladas en los hitos anteriores, incluyendo el carrito de compras y la administración global de productos.

## 🚀 Funcionalidades

- Visualización del catálogo de seis pizzas.
- Navegación dinámica hacia los detalles de cada pizza.
- Obtención del identificador mediante `useParams`.
- Consulta de información mediante `fetch` a una API local simulada.
- Visualización de imágenes, ingredientes, descripciones y precios.
- Incorporación de pizzas al carrito de compras.
- Administración del carrito mediante `CartContext`.
- Aumento y disminución de cantidades.
- Cálculo automático del total de compras.
- Implementación de `UserContext` para manejar un token simulado.
- Funcionalidad Logout para cerrar sesión.
- Visualización condicional de botones en Navbar.
- Protección de la ruta `/profile`.
- Redirección de usuarios autenticados desde Login y Register hacia Home.
- Deshabilitación del botón Pagar cuando el usuario no está autenticado o el carrito está vacío.
- Diseño responsivo mediante Bootstrap.

## 🛠️ Tecnologías utilizadas

- React 19
- Vite 8
- JavaScript y JSX
- React Router DOM
- React Context API
- React Hooks: `useState`, `useEffect`, `useContext` y `useParams`
- Fetch API
- Bootstrap 5
- HTML5 y CSS3
- Git y GitHub

## 📂 Estructura principal

```text
src/
├── componentes/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── CardPizza.jsx
├── context/
│   ├── CartContext.jsx
│   └── UserContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Pizza.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── pizzas.js
├── App.jsx
└── main.jsx
```

## 🔐 Autenticación simulada

Se implementó `UserContext.jsx` para administrar el estado de autenticación del usuario.

El token comienza en `true`, simulando una sesión activa.

Al ejecutar `logout()`, el token cambia a `false`.

Cuando el usuario está autenticado, Navbar muestra Profile y Logout. Cuando no está autenticado, muestra Login y Register.

Los botones Home y Total permanecen visibles en ambos estados.

La autenticación es simulada y no utiliza un servicio real de inicio de sesión.

## 🛡️ Rutas protegidas

Se implementaron las siguientes restricciones:

- `/profile`: accesible solamente cuando el token es `true`.
- `/login`: redirige a Home cuando el token es `true`.
- `/register`: redirige a Home cuando el token es `true`.
- `/pizza/:id`: permite visualizar los detalles de una pizza mediante su identificador.

Las redirecciones se implementaron utilizando `Navigate` de React Router DOM.

## 🍕 Consulta de pizzas con useParams

La página `Pizza.jsx` utiliza `useParams` para obtener el identificador de la pizza desde la URL.

Mediante `useEffect` y `fetch`, consulta el endpoint:

`GET /api/pizzas/:id`

Por ejemplo:

`/api/pizzas/P001`

La API utilizada en esta versión es una simulación local implementada mediante middleware de Vite y alimentada por los datos de `src/pizzas.js`.

**Nota:** Este endpoint funciona al ejecutar el servidor de desarrollo de Vite. No está disponible automáticamente en un alojamiento estático de producción.

## 🛒 Administración del carrito

El carrito utiliza `CartContext` para compartir información entre componentes.

Permite agregar productos, modificar cantidades y actualizar el total automáticamente.

El botón Pagar permanece deshabilitado cuando el usuario no está autenticado o cuando el carrito está vacío.

## 💻 Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Miliesca1994/pizzeria-Miracle-Hito-7.git
```

Ingresar a la carpeta:

```bash
cd pizzeria-Miracle-Hito-7
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Abrir la dirección local indicada por Vite, generalmente:

`http://localhost:5173/`

Para generar los archivos de producción:

```bash
npm run build
```

## ✅ Requerimientos del Hito 7

1. Implementación de `useParams` y consulta de pizzas mediante API.
2. Creación de `UserContext` con token simulado y método `logout`.
3. Integración de Logout en Navbar.
4. Deshabilitación del botón Pagar cuando el token es `false`.
5. Implementación de rutas protegidas y redirecciones según el estado de autenticación.


**Autora:** Milagros Escalante

**Proyecto:** Pizzería Miracle since 1994

**Desafío:** Hito 7 – Pizzería Mamma Mía

**Repositorio:** https://github.com/Miliesca1994/pizzeria-Miracle-Hito-7

