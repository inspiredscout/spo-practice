"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TestController_1 = __importDefault(require("./controllers/TestController"));
const OrderController_1 = __importDefault(require("./controllers/OrderController"));
const ProductController_1 = __importDefault(require("./controllers/ProductController"));
const router = express_1.default.Router();
router.get('/api/test/1', (_req, res) => {
    const controller = new TestController_1.default();
    const response = controller.test();
    return res.json(response);
});
router.get('/api/test/2', (_req, res) => {
    const controller = new TestController_1.default();
    const response = controller.test2();
    return res.json(response);
});
router.post('/api/order/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new OrderController_1.default();
    let request = req.body;
    const response = yield controller.createOrder(request);
    if (!response.success && (response === null || response === void 0 ? void 0 : response.status))
        res.status(response === null || response === void 0 ? void 0 : response.status).json(response);
    return res.json(response);
}));
router.get('/api/order/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new OrderController_1.default();
    let request = req.body;
    const response = yield controller.checkOrder(request);
    if (!response.success && (response === null || response === void 0 ? void 0 : response.status))
        res.status(response === null || response === void 0 ? void 0 : response.status).json(response);
    return res.json(response);
}));
router.put('/api/order/:id/updateStatus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new OrderController_1.default();
    const response = yield controller.updateOrderStatus(req.params.id, req.body);
    if (!response.success && (response === null || response === void 0 ? void 0 : response.status))
        res.status(response === null || response === void 0 ? void 0 : response.status).json(response);
    return res.json(response);
}));
router.post('/api/product/add', (req, res) => {
    const controller = new ProductController_1.default();
    let request = req.body;
    const response = controller.addProduct(request);
    return res.json(response);
});
router.get('/api/product/getAll', (req, res) => {
    const controller = new ProductController_1.default();
    let request = req.body;
    const response = controller.getAllProduct(request);
    return res.json(response);
});
router.get('/api/product/', (req, res) => {
    const controller = new ProductController_1.default();
    let request = req.body;
    const response = controller.getProduct(request);
    return res.json(response);
});
router.get('/api/product/super', (_req, res) => {
    const controller = new ProductController_1.default();
    const response = controller.superGetAllProduct();
    return res.json(response);
});
router.put('/api/product/:id/updateVisibility', (req, res) => {
    const controller = new ProductController_1.default();
    const response = controller.updateProductVisibility(Number(req.params.id), req.body);
    return res.json(response);
});
router.put('/api/product/update/:id', (req, res) => {
    const controller = new ProductController_1.default();
    const response = controller.updateProduct(Number(req.params.id), req.body);
    return res.json(response);
});
exports.default = router;
