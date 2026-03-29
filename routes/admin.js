import express from 'express';
import * as admin from '../controllers/adminController.js';
import { isAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

// Маршрути для адміна
router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

router.get('/all-info', isAdmin, admin.getAllData);
router.post('/assign', isAdmin, admin.assignToMaster);

export default router;