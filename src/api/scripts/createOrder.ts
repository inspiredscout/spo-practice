import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';
export async function createOrder(req: Request, res: Response) {
    const orderData = req.body
    const newOrder = await db?.order.create({
        data: {
          customerName: orderData.customerName,
          customerEmail: orderData.customerEmail,
          customerPhone: orderData.customerPhone,
          customerAdress: orderData.customerAddress,
          status: orderData.status,
          orderItems: {
            create: orderData.orderItems.map((item: { quantity: any; productId: any; }) => ({
              quantity: item.quantity,
              product: {
                connect: { id: item.productId },
              },
            })),
          },
        },
        include: {
          orderItems: true,
        
      }});
    
      return res.json({ success: true, newOrder });
    }