import { db } from '../../db'
import { Router, Request, Response } from 'express';
import routes from '../routes';
export async function addProduct(req: Request, res: Response) {
    const productData = req.body

    const photosData = productData.photos
    ? [{ url: productData.photos.url }]
    : [];

    const newProduct = await db?.products.create({
        data: {
          name: productData.name,
          price: productData.price,
          photos:{
            create: photosData,
          },
          description: productData.description,
          type: productData.type,
          country: productData.country,
          color: productData.color,
          brand: productData.brand

      }
    });
    
      return res.json({ success: true, newProduct });
}