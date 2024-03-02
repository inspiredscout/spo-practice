import { db } from '../../db'
import { Request, Response } from 'express';

export async function getAllProduct(req: Request, res: Response) {
    const { limit } = req.query;
    const reqst = req.body
    const takeLimit = limit ? parseInt(limit as string, 10) : undefined;
    const allProduct = await db?.products.findMany({
        take: takeLimit,
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
    const totalProducts = await db?.products.count({
        where: {
            name: {
                not: null,
            },
            visibility: true,
        },
    });

    if (allProduct.length === 0) return res.json({message:'Долбаеб, у нас нету товаров', success: false})
    else {
        return res.json({success: true, totalProducts, allProduct})
    }
}