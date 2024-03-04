import { db } from '../../db'
import { Request } from 'express';
import {Route, Post, Get, Put, Controller} from 'tsoa';


export default class ProductController extends Controller{
  @Route("addProduct")
  @Post()
  async addProduct(req: Request) {
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
      
        return { success: true, newProduct };
      } catch (error) {
        console.error('Error adding product:', error);
        return { success: false, error: 'Бекендер еблан, тестер еще тупее' };
    }
  }

  @Route("getProduct")
  @Get()
  async getProduct(req: Request) {
    try{
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
    if (product.length === 0) return {message:'Такого товара у нас нету', success: false}
    else {
        return {success: true, product}
    }
} catch (error) {
    console.error('Error adding product:', error);
    return { success: false, error: 'Бекендер еблан, тестер еще тупее' };
}
}

  @Route("getAllProduct")
  @Get()
  async getAllProduct(req: Request) {
    const { limit } = req.query;
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

    if (allProduct.length === 0) return {message:'Долбаеб, у нас нету товаров', success: false}
    else {
        return {success: true, totalProducts, allProduct}
    }
}

  @Route("superGetAllProduct")
  @Get()
  async superGetAllProduct() {
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
    if (sAllProduct.length === 0) return {message:'Долбаеб, у нас нету товаров', success: false}
    else {
        return {success: true, sAllProduct}
    }
}

  @Route("updateProduct")
  @Put()
  async updateProduct(req: Request) {
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
        return { message: 'Такого товара у нас нет', success: false }
    } else {
        return { success: true, product }}
    } catch (error) {
        console.error('Error adding product:', error);
        return { success: false, error: 'Бекендер еблан, тестер еще тупее' }
    }
}

  @Route("updateProductVisibility")
  @Put()
  async updateProductVisibility(req: Request) {
    try {
    const { productId, newVisibility } = req.body;
    if (typeof newVisibility !== 'boolean') {
        return { success: false, error: 'newVisibility должно быть булевым значением' };
    }

    if (!productId) {
        return { success: false, error: 'Необходимо предоставить productId' };
    }
    const updatedProduct = await db?.products.update({
        where: {
            id : productId,
        },
        data: {
            visibility: newVisibility,
        }
})
    return {success: true, updatedProduct}
} catch (error) {
    console.error('Error adding product:', error);
    return { success: false, error: 'Бекендер еблан, тестер еще тупее' }
}
    
}
}