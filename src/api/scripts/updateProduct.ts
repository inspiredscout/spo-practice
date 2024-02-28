import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function updateProduct(req: Request, res: Response) {
    try {
    const rqst = req.body
    const rqstPhotos = rqst.photos
    const product = await db?.products.update({
        where: {
            id : rqst.id
        },
        data: {
            name: rqst.name,
            price: rqst.price,
            description: rqst.description,
            type: rqst.type,
            country: rqst.country,
            color: rqst.color,
            visibility: rqst.visibility,
        }
    });
    if (rqstPhotos) {

        await db?.photos.deleteMany({
            where: {
                product: {
                    id: rqst.id,
                },
            },
        });

        const photoCreationPromises = rqstPhotos.map(async (photo: { url: string }) => {
            await db?.photos.create({
                data: {
                    url: photo.url,
                    product: {
                        connect: {
                            id: rqst.id,
                        },
                    },
                },
            });
        });
        
        await Promise.all(photoCreationPromises);
    }

    if (!product) {
        return res.json({ message: 'Такого товара у нас нет', success: false });
    } else {
        return res.json({ success: true, product });}
    } catch (error) {
        console.error('Error adding product:', error);
        return res.status(500).json({ success: false, error: 'Бекендер еблан, тестер еще тупее' });
    }
}
