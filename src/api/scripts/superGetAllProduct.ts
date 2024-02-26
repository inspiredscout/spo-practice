import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function superGetAllProduct(req: Request, res: Response) {
    const reqst = req.body
    const sAllProduct = await db?.products.findMany({
        where:{
            name: {
                not: null,
            },
        },
        include: {
            photos: true
        }
})
    if (sAllProduct.length === 0) return res.json({message:'Долбаеб, у нас нету товаров', success: false})
    else {
        return res.json({success: true, sAllProduct})
    }
}