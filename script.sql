-- script.sql

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

-- Índices para mejorar consultas frecuentes
CREATE INDEX idx_inventario_precio ON inventario(precio);
CREATE INDEX idx_inventario_categoria ON inventario(categoria);
CREATE INDEX idx_inventario_metal ON inventario(metal);
