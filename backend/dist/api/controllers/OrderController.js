"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const db_1 = require("../../db");
let OrderController = class OrderController extends tsoa_1.Controller {
    updateOrderStatus(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { newStatus } = body;
                if (!id || !newStatus) {
                    return { success: false, error: 'Необходимо предоставить orderId и newStatus', status: 400 };
                }
                const updatedOrder = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.order.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        status: newStatus
                    }
                }));
                return { success: true, updatedOrder };
            }
            catch (error) {
                console.error('Error adding product:', error);
                return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
            }
        });
    }
    createOrder(orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newOrder = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.order.create({
                    data: {
                        customerName: orderData.customerName,
                        customerEmail: orderData.customerEmail,
                        customerPhone: orderData.customerPhone,
                        customerAdress: orderData.customerAdress,
                        status: orderData.status,
                        orderItems: {
                            create: orderData.orderItems.map((item) => ({
                                quantity: item.quantity,
                                product: {
                                    connect: { id: item.productId },
                                },
                            })),
                        },
                    },
                    include: {
                        orderItems: true,
                    }
                }));
                return { success: true, newOrder };
            }
            catch (error) {
                console.error('Error adding product:', error);
                return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
            }
        });
    }
    checkOrder(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findOrder = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.order.findMany({
                    where: {
                        OR: [
                            { id: query.id },
                            { customerName: query.customerName },
                            { customerEmail: query.customerEmail },
                            { customerPhone: query.customerPhone },
                            { customerAdress: query.customerAdress }
                        ],
                    },
                    include: {
                        orderItems: true
                    }
                }));
                if (findOrder.length === 0)
                    return ({ message: 'Такого заказа нету', success: false, status: 404 });
                else {
                    return { success: true, findOrder };
                }
            }
            catch (error) {
                console.error('Error adding product:', error);
                return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
            }
        });
    }
};
__decorate([
    (0, tsoa_1.Put)("/:id/updateStatus"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderStatus", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, tsoa_1.Get)("/"),
    __param(0, (0, tsoa_1.Queries)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "checkOrder", null);
OrderController = __decorate([
    (0, tsoa_1.Route)("order"),
    (0, tsoa_1.Tags)("Orders")
], OrderController);
exports.default = OrderController;
