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


# Cómo ejecutar el proyecto My Precious

## Requisitos

- Node.js v16 o superior instalado
- PostgreSQL instalado y corriendo

---

## Pasos para la ejecución

### 1. Clona el proyecto y entra a la carpeta raíz
---

### 2. Crea la base de datos y la tabla manualmente (solo una vez)

1. Abre la consola de comandos (CMD o PowerShell).

2. Conéctate a PostgreSQL reemplazando `TU_USUARIO` por tu usuario real (por ejemplo, `postgres`):

```bash
psql -U TU_USUARIO -d postgres
```

3. Ingresa tu contraseña cuando se te solicite.

4. Dentro del prompt de PostgreSQL (deberías ver `postgres=#`), ejecuta estas 2 líneas una por una:

```sql
CREATE DATABASE joyas;

\connect joyas
```

5. Luego, crea la tabla `inventario` pegando este bloque:

```sql
CREATE TABLE inventario (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  metal VARCHAR(50) NOT NULL,
  precio NUMERIC(10, 2) NOT NULL CHECK (precio >= 0),
  stock INTEGER NOT NULL CHECK (stock >= 0),
  descripcion TEXT
);

-- Insertar datos de ejemplo para pruebas
INSERT INTO inventario (nombre, categoria, metal, precio, stock, descripcion) VALUES
('Anillo de Oro 18k', 'Anillos', 'Oro', 250.00, 10, 'Anillo de oro 18k con diamante brillante'),
('Collar de Plata', 'Collares', 'Plata', 180.00, 15, 'Collar de plata con diseño elegante'),
('Pulsera de Cuero', 'Pulseras', 'Cuero', 75.50, 20, 'Pulsera hecha de cuero genuino'),
('Aretes de Plata', 'Aretes', 'Plata', 120.00, 8, 'Aretes de plata con diseño clásico'),
('Anillo de Plata', 'Anillos', 'Plata', 150.00, 5, 'Anillo de plata con piedra semipreciosa'),
('Collar de Oro', 'Collares', 'Oro', 300.00, 12, 'Collar de oro 14k con colgante');
```

✅ ¡Listo! La base de datos `joyas` y la tabla `inventario` ya están creadas.

---

### 3. Configura el archivo `.env`

Edita el archivo `.env` ubicado en la raiz y reemplaza `DB_PASS` con tus credenciales de PostgreSQL:

### 4. Instala las dependencias y ejecuta el proyecto

Ejecuta este comando en la raíz del proyecto para instalar todas las dependencias y levantar el servidor y el cliente:

```bash
npm install && npm run start
```

✅ ¡Listo! El proyecto ya está disponible.
