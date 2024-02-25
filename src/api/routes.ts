const express = require('express');
const createOrder = require('../create_order');
const test = require('../test');

const router = express.Router();

router.post('/api/create_order', (req: Request, res: Response) => {
    // Обработка запроса для create_order
    createOrder(req, res);
});

router.get('/api/test', (req: Request, res: Response) => {
    // Обработка запроса для test
    test(req, res);
});

export default router;