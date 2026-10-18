# 🍕 Pizzería Miracle since 1994 – Hito 6

## 📌 Descripción del proyecto

Pizzería Miracle since 1994 es una aplicación web desarrollada con React y Vite, como parte del desafío **Hito 6 – Pizzería Mamma Mía** de Desafío Latam.

En esta etapa se implementa **Context API de React** para administrar globalmente el carrito de compras, permitiendo compartir información entre los componentes Home, Navbar y Cart sin necesidad de pasar propiedades entre múltiples niveles.

## 🚀 Funcionalidades

- Visualización del catálogo de pizzas con imágenes, nombres, ingredientes y precios.
- Incorporación de pizzas al carrito desde Home.
- Administración global del carrito mediante `CartContext`.
- Actualización automática del total de compras en Navbar.
- Visualización de los productos seleccionados en Cart.
- Incremento y disminución de cantidades mediante los botones `+` y `-`.
- Eliminación automática de productos cuando su cantidad llega a cero.
- Cálculo dinámico del total según el precio y la cantidad de cada pizza.
- Mensaje informativo cuando el carrito está vacío.
- Navegación entre páginas mediante React Router DOM.
- Diseño responsivo utilizando Bootstrap.

## 🛠️ Tecnologías utilizadas

- React
- Vite
- JavaScript (JSX)
- React Context API
- React Hooks (`useState`, `useContext`)
- React Router DOM
- Bootstrap 5
- HTML5 y CSS3

## 📂 Estructura del proyecto

```text
src/
├── componentes/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   └── CardPizza.jsx
├── context/
│   └── CartContext.jsx
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
├── main.jsx
└── index.css
```

## 🛒 Implementación de Context API

Se creó el archivo `CartContext.jsx` para centralizar la administración del carrito.

Este contexto proporciona las siguientes funcionalidades:

- `cart`: almacena los productos agregados al carrito.
- `addToCart()`: agrega pizzas o incrementa su cantidad.
- `removeFromCart()`: disminuye la cantidad y elimina productos cuando corresponde.
- `total`: calcula el monto total de la compra.
- `useCart()`: permite acceder al contexto desde distintos componentes.

La aplicación está envuelta en `CartProvider` desde `main.jsx`, de modo que todos los componentes comparten el mismo estado del carrito.

## 💻 Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Miliesca1994/pizzeria-Miracle-Hito-6.git
```

Ingresar al proyecto:

```bash
cd pizzeria-Miracle-Hito-6
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite, generalmente:

`http://localhost:5173/`

## ✅ Requerimientos del Hito 6

1. Implementación de Context para administrar el carrito de compras.
2. Consumo del contexto desde Navbar para mostrar el total.
3. Incorporación de pizzas desde Home utilizando Context.
4. Administración de cantidades desde Cart mediante botones de incremento y disminución.
5. Sincronización del total entre Navbar y Cart.

## 📚 Proyecto académico

Desarrollado como parte del programa de formación de **Desafío Latam**, aplicando conocimientos de React, componentes, Hooks, Context API y administración de estados globales.

**Autora:** Milagros Escalante  
**Proyecto:** Pizzería Miracle since 1994  
**Desafío:** Hito 6 – Pizzería Mamma Mía
