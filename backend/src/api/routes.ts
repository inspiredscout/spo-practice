import express, { Request, Response } from "express"
import TestController from "./controllers/TestController";
import OrderController from "./controllers/OrderController";
import ProductController from "./controllers/ProductController";

const router = express.Router();
router.get('/api/test/1', (_req: Request, res: Response) => {
    const controller = new TestController()
    const response = controller.test()
    return res.json(response)
});

router.get('/api/test/2', (_req: Request, res: Response) => {
    const controller = new TestController()
    const response = controller.test2()
    return res.json(response)
});

router.post('/api/order/create', async (req: Request, res: Response) => {
    const controller = new OrderController()
    let request = req.body
    const response = await controller.createOrder(request)
    if (!response.success && response?.status) res.status(response?.status).json(response)
    return res.json(response)
});

router.get('/api/order/', async (req: Request, res: Response) => {
    const controller = new OrderController()
    let request = req.body
    const response = await controller.checkOrder(request)
    if (!response.success && response?.status) res.status(response?.status).json(response)
    return res.json(response)
});

router.put('/api/order/:id/updateStatus', async (req: Request, res: Response) => {
    const controller = new OrderController()
    const response = await controller.updateOrderStatus(req.params.id, req.body)
    if (!response.success && response?.status) res.status(response?.status).json(response)
    return res.json(response)
})

router.post('/api/product/add', (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = controller.addProduct(request)
    return res.json(response)
});

router.get('/api/product/getAll', (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = controller.getAllProduct(request)
    return res.json(response)
})

router.get('/api/product/', (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = controller.getProduct(request)
    return res.json(response)
})

router.get('/api/product/super', (_req: Request, res: Response) => {
    const controller = new ProductController()
    const response = controller.superGetAllProduct()
    return res.json(response)
})

router.put('/api/product/:id/updateVisibility', (req: Request, res: Response) => {
    const controller = new ProductController()
    const response = controller.updateProductVisibility(Number(req.params.id), req.body)
    return res.json(response)
})

router.put('/api/product/update/:id', (req: Request, res: Response) =>{
    const controller = new ProductController()
    const response = controller.updateProduct(Number(req.params.id), req.body)
    return res.json(response)
})
export default router;