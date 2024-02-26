import express, { Request, Response } from "express"
import { createOrder } from "./scripts/createOrder";
import { test } from "./scripts/test";
import { test2 } from "./scripts/test2";
import { checkOrder } from "./scripts/checkOrder";
import { addProduct } from "./scripts/addProduct";

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
export default router;