import express, { Request, Response } from "express"
import { create_order } from "../create_order";
import { test } from "../test";
import { test2 } from "../test2";
import { checkOrder } from "../checkOrder";

const router = express.Router();

router.post('/api/create_order', async (req: Request, res: Response) => {
    // Обработка запроса для create_order
    return create_order(req, res);
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