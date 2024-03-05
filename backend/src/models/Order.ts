import Item from "./Item";

export default interface Order {
    customerName: string
    customerEmail: string
    customerPhone: string
    customerAddress: string
    status: string
    orderItems: Item[]
}