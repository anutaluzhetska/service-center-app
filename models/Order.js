import pool from '../config/db.js';

export const OrderModel = {
    // Для Майстра: бачити нові та свої
    getNewOrders: async () => {
        const res = await pool.query("SELECT * FROM ORDERS WHERE status = 'new'");
        return res.rows;
    },
    getOrdersByMaster: async (masterId) => {
        const res = await pool.query("SELECT * FROM ORDERS WHERE assigned_to = $1", [masterId]);
        return res.rows;
    },
    // Оновлення статусу майстром
    updateStatus: async (id, status, comment) => {
        const res = await pool.query(
            "UPDATE ORDERS SET status = $1, technician_comment = $2, updated_at = NOW() WHERE order_id = $3 RETURNING *",
            [status, comment, id]
        );
        return res.rows[0];
    },
    // Для Адміна: всі замовлення та всі майстри
    getAllOrders: async () => {
        const res = await pool.query("SELECT * FROM ORDERS ORDER BY created_at DESC");
        return res.rows;
    },
    getAllMasters: async () => {
        const res = await pool.query("SELECT id, email FROM USERS WHERE role = 'master'");
        return res.rows;
    },
    assignMaster: async (orderId, masterId) => {
        const res = await pool.query(
            "UPDATE ORDERS SET assigned_to = $1, status = 'in progress', updated_at = NOW() WHERE order_id = $2 RETURNING *",
            [masterId, orderId]
        );
        return res.rows[0];
    }
};