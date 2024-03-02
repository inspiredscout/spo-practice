import { db } from '../../db'
import { Request, Response } from 'express';

export async function checkOrder(req: Request, res: Response) {
    try{
    const Order = req.body
    const findOrder = await db?.order.findMany({
        where: {
            OR: [
            {id : Order.id},
            {customerName : Order.customerName},
            {customerEmail : Order.customerEmail},
            {customerPhone : Order.customerPhone},
            {customerAdress : Order.customerAdress}
            ],
        },
        include: {
            orderItems: true
        }
})
    if (findOrder.length === 0) return res.json({message:'Такого заказа нету', success: false})
    else {
        return res.json({success: true, findOrder})
    }
} catch (error) {
    console.error('Error adding product:', error);
    return res.status(500).json({ success: false, error: 'Бекендер еблан, тестер еще тупее' });
}
}