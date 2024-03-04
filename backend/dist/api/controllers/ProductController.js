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
const db_1 = require("../../db");
const tsoa_1 = require("tsoa");
let ProductController = class ProductController extends tsoa_1.Controller {
    addProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const photosData = productData.photos
                    ? productData.photos.map((photo) => ({ url: photo.url }))
                    : [];
                const newProduct = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.products.create({
                    data: {
                        name: productData.name,
                        price: productData.price,
                        photos: {
                            create: photosData,
                        },
                        description: productData.description,
                        type: productData.type,
                        country: productData.country,
                        color: productData.color,
                        brand: productData.brand,
                        visibility: productData.visibility,
                    },
                    include: {
                        photos: true
                    }
                }));
                return { success: true, newProduct, status: 200 };
            }
            catch (error) {
                console.error('Error adding product:', error);
                return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
            }
        });
    }
    getProduct(rqst) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.products.findMany({
                    where: {
                        OR: [
                            { id: rqst.id },
                            { name: rqst.name },
                            { price: rqst.price },
                            { description: rqst.description },
                            { type: rqst.type },
                            { country: rqst.country },
                            { color: rqst.color },
                            { brand: rqst.brand },
                            { visibility: rqst.visibility },
                        ],
                    },
                    include: {
                        photos: true
                    }
                }));
                if (product.length === 0)
                    return { message: 'Такого товара у нас нету', success: false, status: 404 };
                else {
                    return { success: true, product, status: 200 };
                }
            }
            catch (error) {
                console.error('Error adding product:', error);
                return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
            }
        });
    }
    getAllProduct(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { limit } = query;
            const takeLimit = limit;
            const allProduct = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.products.findMany({
                take: takeLimit,
                where: {
                    name: {
                        not: null,
                    },
                    visibility: true,
                },
                include: {
                    photos: true
                }
            }));
            const totalProducts = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.products.count({
                where: {
                    name: {
                        not: null,
                    },
                    visibility: true,
                },
            }));
            if (allProduct.length === 0)
                return { message: 'Долбаеб, у нас нету товаров', success: false };
            else {
                return { success: true, totalProducts, allProduct, status: 200 };
            }
        });
    }
    superGetAllProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            const sAllProduct = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.products.findMany({
                where: {
                    name: {
                        not: null,
                    },
                },
                include: {
                    photos: true
                }
            }));
            if (sAllProduct.length === 0)
                return { message: 'Долбаеб, у нас нету товаров', success: false, status: 404 };
            else {
                return { success: true, sAllProduct, status: 200 };
            }
        });
    }
    updateProduct(id, rqst) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rqstPhotos = rqst.photos;
                const product = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.products.update({
                    where: {
                        id: Number(id)
                    },
                    data: {
                        name: rqst.name,
                        price: rqst.price,
                        description: rqst.description,
                        type: rqst.type,
                        country: rqst.country,
                        color: rqst.color,
                        visibility: rqst.visibility,
                    }
                }));
                if (rqstPhotos) {
                    yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.photos.deleteMany({
                        where: {
                            product: {
                                id: Number(id),
                            },
                        },
                    }));
                    const photoCreationPromises = rqstPhotos.map((photo) => __awaiter(this, void 0, void 0, function* () {
                        yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.photos.create({
                            data: {
                                url: photo.url,
                                product: {
                                    connect: {
                                        id: Number(id),
                                    },
                                },
                            },
                        }));
                    }));
                    yield Promise.all(photoCreationPromises);
                }
                if (!product) {
                    return { message: 'Такого товара у нас нет', success: false, status: 404 };
                }
                else {
                    return { success: true, product, status: 200 };
                }
            }
            catch (error) {
                console.error('Error adding product:', error);
                return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
            }
        });
    }
    updateProductVisibility(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { newVisibility } = body;
                const productId = id;
                if (typeof newVisibility !== 'boolean') {
                    return { success: false, error: 'newVisibility должно быть булевым значением' };
                }
                if (!productId) {
                    return { success: false, error: 'Необходимо предоставить productId' };
                }
                const updatedProduct = yield (db_1.db === null || db_1.db === void 0 ? void 0 : db_1.db.products.update({
                    where: {
                        id: productId,
                    },
                    data: {
                        visibility: newVisibility,
                    }
                }));
                return { success: true, updatedProduct, status: 200 };
            }
            catch (error) {
                console.error('Error adding product:', error);
                return { success: false, error: 'Бекендер еблан, тестер еще тупее', status: 500 };
            }
        });
    }
};
__decorate([
    (0, tsoa_1.Post)("/add"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addProduct", null);
__decorate([
    (0, tsoa_1.Get)("/"),
    __param(0, (0, tsoa_1.Queries)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, tsoa_1.Get)("/getAll"),
    __param(0, (0, tsoa_1.Queries)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, tsoa_1.Get)("super"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "superGetAllProduct", null);
__decorate([
    (0, tsoa_1.Put)("/update/:id"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, tsoa_1.Put)("/:id/updateVisibility"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductVisibility", null);
ProductController = __decorate([
    (0, tsoa_1.Route)("product"),
    (0, tsoa_1.Tags)("Product")
], ProductController);
exports.default = ProductController;
