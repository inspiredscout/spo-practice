import express, { Request, Response } from "express"
import { createOrder } from "./scripts/createOrder";
import { test } from "./scripts/test";
import { test2 } from "./scripts/test2";
import { checkOrder } from "./scripts/checkOrder";
import { addProduct } from "./scripts/addProduct";
import { getAllProduct } from "./scripts/getAllProduct";
import { getProduct } from "./scripts/getProduct";
import { superGetAllProduct } from "./scripts/superGetAllProduct";
import { updateOrderStatus } from "./scripts/updateOrdedStatus";
import { updateProductVisibility } from "./scripts/updateProductVisibility";
import { updateProduct } from "./scripts/updateProduct";

const router = express.Router();

router.post('/api/createOrder', async (req: Request, res: Response) => {
    return createOrder(req, res);
});

router.get('/api/test', (req: Request, res: Response) => {
    test(req, res);
});

router.get('/api/test2', (req: Request, res: Response) => {
    test2(req, res);
});

router.get('/api/checkOrder', (req: Request, res: Response) => {
    checkOrder(req, res);
});

router.post('/api/addProduct', (req: Request, res: Response) => {
    addProduct(req,res);
});

router.get('/api/getAllProduct', (req: Request, res: Response) => {
    getAllProduct(req,res);
})

router.get('/api/getProduct', (req: Request, res: Response) => {
    getProduct(req,res);
})

router.get('/api/superGetAllProduct', (req: Request, res: Response) => {
    superGetAllProduct(req,res);
})

router.put('/api/updateOrderStatus', (req: Request, res: Response) => {
    updateOrderStatus(req,res);
})

router.put('/api/updateProductVisibility', (req: Request, res: Response) => {
    updateProductVisibility(req,res);
})

router.put('/api/updateProduct', (req: Request, res: Response) =>{
    updateProduct(req,res)
})
export default router;