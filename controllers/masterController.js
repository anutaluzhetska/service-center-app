import { OrderModel } from '../models/Order.js';

export const getDashboard = async (req, res) => {
    try {
        const masterId = req.user.id;
        const newOrders = await OrderModel.getNewOrders();
        const myOrders = await OrderModel.getOrdersByMaster(masterId);
        res.json({ newOrders, myOrders });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, comment } = req.body;
        const updated = await OrderModel.updateStatus(id, status, comment);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
