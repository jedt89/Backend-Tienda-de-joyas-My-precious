import express from 'express';
import * as JewelController from '../controllers/jewelController.js';

const router = express.Router();

router.get('/', JewelController.getJewels);
router.get('/filtros', JewelController.filterJewels);

export default router;
