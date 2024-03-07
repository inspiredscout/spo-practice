import { db } from '../../db'
import { Request, Response } from 'express';

export async function updateProductVisibility(req: Request, res: Response) {
    try {
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
} catch (error) {
    console.error('Error adding product:', error);
    return res.status(500).json({ success: false, error: 'Бекендер еблан, тестер еще тупее' });
}
    
}