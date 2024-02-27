import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function updateOrderStatus(req: Request, res: Response) {
    const { orderId, newStatus } = req.body;
    if (!orderId || !newStatus) {
        return res.status(400).json({ success: false, error: 'Необходимо предоставить orderId и newStatus' });
    }
    const updatedOrder = await db?.order.update({
        where: {
            id : orderId,
        },
        data: {
            status: newStatus
        }
})
    return res.json({success: true, updatedOrder})
    
}