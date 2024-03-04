import Photo from "./Photo";
import Order from "./Order";

export default interface Product {
    name?: string
    price?: string
    photos: Photo
    description?: string
    type?: string
    country: string
    color: string
    brand: string
    orderItems: Order[]
    visibility: boolean
}