import express, { Request, Response } from "express"
import { createOrder } from "../createOrder";
import { test } from "../test";
import { test2 } from "../test2";
import { checkOrder } from "../checkOrder";

const router = express.Router();

router.post('/api/createOrder', async (req: Request, res: Response) => {
    // Обработка запроса для create_order
    return createOrder(req, res);
});

router.get('/api/test', (req: Request, res: Response) => {
    // Обработка запроса для test
    test(req, res);
});

router.get('/api/test2', (req: Request, res: Response) => {
    // Обработка запроса для test
    test2(req, res);
});

router.get('/api/checkOrder', (req: Request, res: Response) => {
    // Обработка запроса для test
    checkOrder(req, res);
});
export default router;