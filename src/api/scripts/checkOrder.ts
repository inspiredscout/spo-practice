import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function checkOrder(req: Request, res: Response) {
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
}