import { db } from '../../db'
import {Route, Post, Get, Put, Controller, Tags, Body, Queries, Path, Query} from 'tsoa';
import Product from '../../models/Product';
import getProductQuery from '../../models/getProductQuery';


@Route("product")
@Tags("Product")
export default class ProductController extends Controller{
  @Post("/")
  async addProduct(@Body() productData: Product ) {
    try {

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
      
        return { success: true, newProduct, status: 200 };
      } catch (error) {
        console.error('Error adding product:', error);
        return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
    }
  }

  @Get("/")
  async getProduct(@Queries() rqst: getProductQuery) {
    try{
        const zaebalo = rqst.id !== undefined ? parseInt(rqst.id.toString(), 10) : undefined;
    const product = await db?.products.findMany({
        where: {
            OR: [
            {id : zaebalo},
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
    if (product.length === 0) return {message:'Такого товара у нас нету', success: false, status: 404}
    else {
        return {success: true, product, status: 200}
    }
} catch (error) {
    console.error('Error adding product:', error);
    return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
}
}

  @Get("/getAll")
  async getAllProduct(@Queries() query: {limit?: number}) {
    const { limit } = query;
    const takeLimit = limit !== undefined ? parseInt(limit.toString(), 10) : undefined;
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

    if (allProduct.length === 0 || !allProduct) return {message:'Долбаеб, у нас нету товаров', success: false}
    else {
        return {success: true, totalProducts, allProduct, status: 200}
    }
}

  @Get("super")
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
    if (sAllProduct.length === 0) return {message:'Долбаеб, у нас нету товаров', success: false, status: 404}
    else {
        return {success: true, sAllProduct, status:200}
    }
}

  @Put("/update/:id")
  async updateProduct(@Path() id: number, @Body() rqst: Product) {
    try {
    const rqstPhotos = rqst.photos
    const product = await db?.products.update({
        where: {
            id : Number(id)
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
                    id: Number(id),
                },
            },
        });

        const photoCreationPromises = rqstPhotos.map(async (photo: { url: string }) => {
            await db?.photos.create({
                data: {
                    url: photo.url,
                    product: {
                        connect: {
                            id: Number(id),
                        },
                    },
                },
            });
        });
        
        await Promise.all(photoCreationPromises);
    }

    if (!product) {
        return { message: 'Такого товара у нас нет', success: false, status: 404 }
    } else {
        return { success: true, product, status: 200 }}
    } catch (error) {
        console.error('Error adding product:', error);
        return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 }
    }
}

  @Put("/:id/updateVisibility")
  async updateProductVisibility(@Path() id: number, @Body() body:{newVisibility: string}) {
    try {
        const {newVisibility} = body
    const productId = id
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
    return {success: true, updatedProduct, status: 200}
} catch (error) {
    console.error('Error adding product:', error);
    return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 }
}
    
}
}