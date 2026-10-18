# 🍕 Pizzería Miracle since 1994 — Hito 5

## 📌 Descripción del proyecto

Proyecto desarrollado para el **Hito 5 del desafío Pizzería Mamma Mía**, correspondiente al módulo de React de Desafío Latam.

En esta etapa se implementó **React Router** para permitir la navegación entre diferentes páginas de la aplicación, manteniendo una estructura organizada mediante componentes reutilizables.

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- JavaScript (JSX)
- HTML5 y CSS3
- Bootstrap 5

## 📂 Estructura del proyecto

```text
src/
├── assets/
├── componentes/
│   ├── CardPizza.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Cart.jsx
│   ├── Pizza.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── pizzas.js
```

## 🛠️ Funcionalidades implementadas

### 1. Configuración de React Router
Se instaló y configuró React Router DOM mediante BrowserRouter, Routes y Route.

### 2. Navegación entre páginas
Se implementaron enlaces utilizando Link para navegar sin recargar completamente la aplicación.

### 3. Rutas disponibles

| Ruta | Componente |
|---|---|
| `/` | Home |
| `/login` | Login |
| `/register` | Register |
| `/cart` | Cart |
| `/pizza/p001` | Pizza |
| `/profile` | Profile |
| `/404` | NotFound |
| Rutas inexistentes | NotFound |

### 4. Página Home
Visualización de seis pizzas con sus imágenes, nombres, ingredientes y precios, utilizando datos locales del archivo `pizzas.js`.

### 5. Página Pizza
Visualización del detalle de la pizza Napolitana, incluyendo descripción, ingredientes, imagen y precio.

### 6. Login y Register
Formularios de inicio de sesión y registro de usuarios.

### 7. Profile
Página de perfil que muestra un correo electrónico y un botón para cerrar sesión. Estos elementos son estáticos en este hito.

### 8. Carrito de compras
Visualización de productos, cantidades y total del pedido.

### 9. Página NotFound
Página personalizada de error 404, con un enlace para regresar al inicio.

### 10. Navbar
Menú de navegación que permite acceder a Home, Login, Register, Profile y Cart mediante enlaces Link.

## 💻 Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Miliesca1994/pizzeria-Miracle-Hito-5.git
```

Ingresar a la carpeta:

```bash
cd pizzeria-Miracle-Hito-5
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Verificar la compilación:

```bash
npm run build
```

## ✅ Resultado

Se implementó el sistema de enrutamiento solicitado en el Hito 5, permitiendo navegar entre las diferentes vistas de la pizzería.

El proyecto fue compilado exitosamente mediante Vite.

## 👩‍💻 Autor

**Milagros Escalante**

Proyecto académico desarrollado para Desafío Latam.

**Pizzería Miracle since 1994 🍕**

---

*Hito 5 — React Router I*
