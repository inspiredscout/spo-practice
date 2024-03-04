import { Body, Controller, Get, Path, Post, Put, Queries, Route, Tags } from 'tsoa';
import { db } from '../../db'
import Order from "../../models/Order";
import checkOrderQuery from '../../models/checkOrderQuery';

@Route("order")
@Tags("Orders")
export default class OrderController extends Controller {

    @Put("/:id/updateStatus")
    async updateOrderStatus(@Path() id: string, @Body() body : {newStatus: string} ) {
        try {
            const {newStatus} = body;
            if (!id || !newStatus) {
                return {success: false, error: 'Необходимо предоставить orderId и newStatus', status: 400};
            }
            const updatedOrder = await db?.order.update({
                where: {
                    id: Number(id),
                },
                data: {
                    status: newStatus
                }
            })
            return {success: true, updatedOrder}
        } catch (error) {
            console.error('Error adding product:', error);
            return {success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500};
        }
    }

    @Post("/")
    async createOrder(@Body() orderData: Order) {
        try {
            const newOrder = await db?.order.create({
                data: {
                    customerName: orderData.customerName,
                    customerEmail: orderData.customerEmail,
                    customerPhone: orderData.customerPhone,
                    customerAdress: orderData.customerAdress,
                    status: orderData.status,
                    orderItems: {
                        create: orderData.orderItems.map((item: { quantity: any; productId: any; }) => ({
                            quantity: item.quantity,
                            product: {
                                connect: {id: item.productId},
                            },
                        })),
                    },
                },
                include: {
                    orderItems: true,
                }
            });

            return {success: true, newOrder};
        } catch (error) {
            console.error('Error adding product:', error);
            return {success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500};
        }
    }

    @Get("/")
    async checkOrder(@Queries() query: checkOrderQuery) {
        try {
            const findOrder = await db?.order.findMany({
                where: {
                    OR: [
                        {id: query.id},
                        {customerName: query.customerName},
                        {customerEmail: query.customerEmail},
                        {customerPhone: query.customerPhone},
                        {customerAdress: query.customerAdress}
                    ],
                },
                include: {
                    orderItems: true
                }
            })
            if (findOrder.length === 0) return ({message: 'Такого заказа нету', success: false, status: 404})
            else {
                return {success: true, findOrder}
            }
        } catch (error) {
            console.error('Error adding product:', error);
            return {success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500};
        }
    }


}