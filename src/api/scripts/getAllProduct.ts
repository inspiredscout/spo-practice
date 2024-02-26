import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function getAllProduct(req: Request, res: Response) {
    const reqst = req.body
    const allProduct = await db?.products.findMany({
        where:{
            name: {
                not: null,
            },
            visibility: true,
        },
        include: {
            photos: true
        }
})
    if (allProduct.length === 0) return res.json({message:'Долбаеб, у нас нету товаров', success: false})
    else {
        return res.json({success: true, allProduct})
    }
}