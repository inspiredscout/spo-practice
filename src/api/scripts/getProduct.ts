import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function getProduct(req: Request, res: Response) {
    const rqst = req.body
    const product = await db?.products.findMany({
        where: {
            OR: [
            {id : rqst.id},
            {name : rqst.name},
            {price : rqst.price},
            {description : rqst.description},
            {type : rqst.type},
            {country : rqst.country},
            {color : rqst.color},
            {brand : rqst.brand},
            {visibility : rqst.visibility},
            ],
        },
        include: {
            photos: true
        }
})
    if (product.length === 0) return res.json({message:'Такого товара у нас нету', success: false})
    else {
        return res.json({success: true, product})
    }
}