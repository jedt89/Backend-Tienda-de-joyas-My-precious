# 🛍️ Backend para Tienda de Joyas "My Precious"

Este proyecto es una API RESTful construida con Node.js para una tienda ficticia de joyas llamada **"My Precious"**. Permite gestionar productos y proporciona endpoints con filtrado, ordenamiento, paginación y formato HATEOAS.

---

## 🚀 Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución de JavaScript en el servidor.
- **Express.js** – Framework para crear servidores web de forma rápida y modular.
- **PostgreSQL** – Base de datos relacional utilizada para almacenar la información de las joyas.
- **pg** – Cliente oficial de PostgreSQL para Node.js.
- **Dotenv** – Manejo seguro de variables de entorno.
- **Nodemon** (solo en desarrollo) – Herramienta que reinicia automáticamente el servidor ante cambios.

---

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/jedt89/Backend-Tienda-de-joyas-My-precious.git
cd Backend-Tienda-de-joyas-My-precious
npm install

## 2. Crea un archivo .env en la raíz del proyecto con tus credenciales de base de datos PostgreSQL:

DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_precious


### 3. Importa la base de datos

Utiliza el archivo script.sql incluido en el proyecto para crear la base de datos y poblarla con datos de ejemplo. Puedes hacerlo desde PgAdmin, DBeaver o usando la CLI de PostgreSQL:

psql -U tu_usuario -d my_precious -f script.sql

npm start

###### El servidor quedará disponible en: http://localhost:3000
