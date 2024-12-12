import * as JewelModel from '../model/jewelModel.js';

const getJewels = async (req, res) => {
  const { limits, page, order_by } = req.query;

  const limit = parseInt(limits) || 10;
  const pageNumber = parseInt(page) || 1;
  const offset = (pageNumber - 1) * limit;

  const orderBy = order_by.split('_').join(' '); 
  try {
    const totalJewels = await JewelModel.getTotalJewels();
    const totalPages = Math.ceil(totalJewels / limit);

    if (pageNumber > totalPages) {
      return res.json({ totalJoyas: 0, stockTotal: 0, results: [] });
    }

    const jewels = await JewelModel.getJewels(limit, offset, orderBy);
    let result = [];
    let stockTotal = 0;

    jewels.forEach((jewel) => {
      stockTotal += jewel.stock;
    });

    // HATEOAS
    if (jewels.length > 0) {
      result = {
        totalJoyas: jewels.length,
        stockTotal: stockTotal,
        results: jewels.map((jewel) => ({
          nombre: jewel.nombre,
          href: `/joyas/${jewel.id}`
        }))
      };
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las joyas' });
  }
};


const filterJewels = async (req, res) => {
  const { precio_min, precio_max, categoria, metal } = req.query;

  try {
    const jewels = await JewelModel.filterJewels(
      precio_min,
      precio_max,
      categoria,
      metal
    );
    let result = [];

    // HATEOAS
    if (jewels.length > 0) {
      result = jewels.map((jewel) => ({
        id: jewel.id,
        nombre: jewel.nombre,
        categoria: jewel.categoria,
        metal: jewel.metal,
        precio: jewel.precio,
        stock: jewel.stock
      }));
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al filtrar las joyas' });
  }
};

export { getJewels, filterJewels };
