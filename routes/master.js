import express from 'express';
import * as master from '../controllers/masterController.js';
import { isMaster } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Master Dashboard');
});
router.get('/dashboard', isMaster, master.getDashboard);
router.put('/order/:id', isMaster, master.updateOrder);
export default router;



