import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function updateProductVisibility(req: Request, res: Response) {
    const { productId, newVisibility } = req.body;
    if (typeof newVisibility !== 'boolean') {
        return res.status(400).json({ success: false, error: 'newVisibility должно быть булевым значением' });
    }

    if (!productId) {
        return res.status(400).json({ success: false, error: 'Необходимо предоставить productId' });
    }
    const updatedProduct = await db?.products.update({
        where: {
            id : productId,
        },
        data: {
            visibility: newVisibility,
        }
})
    return res.json({success: true, updatedProduct})
    
}