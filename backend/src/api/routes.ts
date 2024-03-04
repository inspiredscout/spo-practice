import express, { Request, Response } from "express"
import TestController from "./controllers/test";
import OrderController from "./controllers/order";
import ProductController from "./controllers/product";

const router = express.Router();

router.post('/api/createOrder', async (req: Request, res: Response) => {
    const controller = new OrderController()
    let request = req.body
    const response = controller.createOrder(request)
    return res.json(response)
});

router.get('/api/test', (_req: Request, res: Response) => {
    const controller = new TestController()
    const response = controller.test()
    return res.json(response)
});

router.get('/api/test2', (_req: Request, res: Response) => {
    const controller = new TestController()
    const response = controller.test2()
    return res.json(response)
});

router.get('/api/checkOrder', (req: Request, res: Response) => {
    const controller = new OrderController()
    let request = req.body
    const response = controller.checkOrder(request)
    return res.json(response)
});

router.post('/api/addProduct', (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = controller.addProduct(request)
    return res.json(response)
});

router.get('/api/getAllProduct', (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = controller.getAllProduct(request)
    return res.json(response)
})

router.get('/api/getProduct', (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = controller.getProduct(request)
    return res.json(response)
})

router.get('/api/superGetAllProduct', (_req: Request, res: Response) => {
    const controller = new ProductController()
    const response = controller.superGetAllProduct()
    return res.json(response)
})

router.put('/api/updateOrderStatus', (req: Request, res: Response) => {
    const controller = new OrderController()
    let request = req.body
    const response = controller.updateOrderStatus(request)
    return res.json(response)
})

router.put('/api/updateProductVisibility', (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = controller.updateProductVisibility(request)
    return res.json(response)
})

router.put('/api/updateProduct', (req: Request, res: Response) =>{
    const controller = new ProductController()
    let request = req.body
    const response = controller.updateProduct(request)
    return res.json(response)
})
export default router;