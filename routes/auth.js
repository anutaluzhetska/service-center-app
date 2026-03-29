import express from 'express';
const router = express.Router();

// Маршрути для входу та реєстрації
router.get('/login', (req, res) => res.send('Login Page'));
router.get('/register', (req, res) => res.send('Registration Page'));

export default router;