import { db } from '../../db'
import { Request, Response } from 'express';

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