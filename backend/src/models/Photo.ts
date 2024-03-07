import Product from "./Product";

export default interface Photo {
    map(arg0: (photo: { url: string; }) => { url: string; }): unknown;
    url: string
    product: Product
}