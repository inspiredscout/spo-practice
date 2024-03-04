import { Route, Put, Get, Controller } from 'tsoa';
import { db } from '../../db'
import { Request } from 'express';

export default class OrderController extends Controller{

  @Route("updateOrderStatus")
  @Put()
  async updateOrderStatus(req: Request) {
      try {
      const { orderId, newStatus } = req.body;
      if (!orderId || !newStatus) {
          return { success: false, error: 'Необходимо предоставить orderId и newStatus' };
      }
      const updatedOrder = await db?.order.update({
          where: {
              id : orderId,
          },
          data: {
              status: newStatus
          }
  })
      return {success: true, updatedOrder}
  } catch (error) {
      console.error('Error adding product:', error);
      return { success: false, error: 'Бекендер еблан, тестер еще тупее' };
  }
  }

  @Route("createOrder")
  @Get()
  async createOrder(req: Request) {
      try {
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
        
          return { success: true, newOrder };
        } catch (error) {
          console.error('Error adding product:', error);
          return { success: false, error: 'Бекендер еблан, тестер еще тупее' };
      }
        }

  @Route("checkOrder")
  @Get()
  async checkOrder(req: Request) {
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
    if (findOrder.length === 0) return {message:'Такого заказа нету', success: false}
    else {
        return {success: true, findOrder}
    }
} catch (error) {
    console.error('Error adding product:', error);
    return { success: false, error: 'Бекендер еблан, тестер еще тупее' };
}
}

  
}