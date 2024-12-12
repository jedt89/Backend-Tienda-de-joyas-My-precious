import pool from '../db/connection.js';

const getJewels = async (limit, offset, orderBy) => {
  const query = `
    SELECT * FROM inventario
    ORDER BY ${orderBy}
    LIMIT $1 OFFSET $2;
  `;

  try {
    const { rows } = await pool.query(query, [limit, offset]);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getTotalJewels = async () => {
  const query = 'SELECT COUNT(*) FROM inventario';

  try {
    const { rows } = await pool.query(query);
    return parseInt(rows[0].count);
  } catch (error) {
    throw error;
  }
};

const getStockTotal = async () => {
  const query = 'SELECT SUM(stock) FROM inventario';

  try {
    const { rows } = await pool.query(query);
    return parseInt(rows[0].sum);
  } catch (error) {
    throw error;
  }
};

const filterJewels = async (precioMin, precioMax, categoria, metal) => {
  const query = `
    SELECT * FROM inventario
    WHERE precio >= $1 AND precio <= $2
    AND categoria = $3 AND metal = $4;
  `;
  console.log(query)
  try {
    const { rows } = await pool.query(query, [
      precioMin,
      precioMax,
      categoria,
      metal
    ]);
    return rows;
  } catch (error) {
    throw error;
  }
};

export { getJewels, getTotalJewels, getStockTotal, filterJewels };
