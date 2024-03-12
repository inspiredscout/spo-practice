import express, { Request, Response } from "express"
import TestController from "./controllers/TestController";
import OrderController from "./controllers/OrderController";
import ProductController from "./controllers/ProductController";

const router = express.Router();
router.get(`${process.env.apiPrefix}/test/1`, async (_req: Request, res: Response) => {
    const controller = new TestController()
    const response = await controller.test()
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
});

router.get(`${process.env.apiPrefix}/test/2`, async (_req: Request, res: Response) => {
    const controller = new TestController()
    const response = await controller.test2()
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
});

router.post(`${process.env.apiPrefix}/order`, async (req: Request, res: Response) => {
    const controller = new OrderController()
    let request = req.body
    const response = await controller.createOrder(request)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
});

router.get(`${process.env.apiPrefix}/order`, async (req: Request, res: Response) => {
    const controller = new OrderController()
    let request = req.body
    const response = await controller.checkOrder(request)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
});

router.get(`${process.env.apiPrefix}/order/getAll`, async (req: Request, res: Response) => {
    const controller = new OrderController()
    const response = await controller.getAllOrder(req.query)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
})

router.put(`${process.env.apiPrefix}/order/:id/updateStatus`, async (req: Request, res: Response) => {
    const controller = new OrderController()
    const response = await controller.updateOrderStatus(req.params.id, req.body)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
})

router.post(`${process.env.apiPrefix}/product`, async (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.body
    const response = await controller.addProduct(request)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
});

router.get(`${process.env.apiPrefix}/product/getAll`, async (req: Request, res: Response) => {
    const controller = new ProductController()
    const response = await controller.getAllProduct(req.query)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
})

router.get(`${process.env.apiPrefix}/product`, async (req: Request, res: Response) => {
    const controller = new ProductController()
    let request = req.query
    const response = await controller.getProduct(request)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
})

router.get(`${process.env.apiPrefix}/product/super`, async (_req: Request, res: Response) => {
    const controller = new ProductController()
    const response = await controller.superGetAllProduct()
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
})

router.put(`${process.env.apiPrefix}/product/:id/updateVisibility`, async (req: Request, res: Response) => {
    const controller = new ProductController()
    const response = await controller.updateProductVisibility(Number(req.params.id), req.body)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
})

router.put(`${process.env.apiPrefix}/product/update/:id`, async (req: Request, res: Response) =>{
    const controller = new ProductController()
    const response = await controller.updateProduct(Number(req.params.id), req.body)
    if (!response.success && response?.status) return res.status(response?.status).json(response)
    return res.json(response)
})
export default router;
