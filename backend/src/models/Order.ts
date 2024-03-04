import Item from "./Item";

export default interface Order {
    customerName: string
    customerEmail: string
    customerPhone: string
    customerAdress: string
    status: string
    orderItems: Item[]
}