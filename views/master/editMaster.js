import express from 'express';
const router = express.Router();

export const getEditMasterView = (req, res) => {
    const { id } = req.params; 

    res.render('master/editMaster', { 
        title: 'Edit Order',
        orderId: id,
    });
};

export default router;