export default interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    stock: number;
    description?: string;
    features?: string[];
    subcategory?: string;
}