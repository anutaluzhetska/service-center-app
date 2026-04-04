import { OrderModel } from '../models/Order.js';

export const getDashboard = async (req, res) => {
    try {
        // const masterId = req.user.id;
        
        const masterId = 2; //тестовий майстер
        const newOrders = await OrderModel.getNewOrders();
        const myOrders = await OrderModel.getOrdersByMaster(masterId);
        res.json({ newOrders, myOrders });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
export const getOrderDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await OrderModel.getOrderDetails(id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, comment } = req.body;
        const updated = await OrderModel.updateStatus(id, status, comment);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};