import { db } from '../../db'
import { Request, Response } from 'express';

export async function addProduct(req: Request, res: Response) {
  try {
    const productData = req.body

    const photosData = productData.photos
        ? productData.photos.map((photo: { url: string }) => ({ url: photo.url }))
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
          brand: productData.brand,
          visibility: productData.visibility,

      },
      include: {
        photos: true
      }
    });
    
      return res.json({ success: true, newProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      return res.status(500).json({ success: false, error: 'Бекендер еблан, тестер еще тупее' });
  }
}