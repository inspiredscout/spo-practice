import { Router, Request, Response } from 'express';
import { create_order } from '../create_order';
import {test} from '../test'

const router = Router();

router.post('/api/create_order', (req: Request, res: Response) => {
    // Обработка запроса для create_order
    create_order(req, res);
});

router.get('/api/test', (req: Request, res: Response) => {
    // Обработка запроса для test
    test(req, res);
});

export default router;