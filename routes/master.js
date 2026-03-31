import express from 'express';
import * as master from '../controllers/masterController.js';
import { isMaster } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Master Dashboard');
});
// router.get('/dashboard-data', isMaster, master.getDashboard); 
router.get('/dashboard-data', master.getDashboard); //тестовий маршрут для отримання даних майстра без авторизації
router.put('/order/:id', isMaster, master.updateOrder);


export default router;



