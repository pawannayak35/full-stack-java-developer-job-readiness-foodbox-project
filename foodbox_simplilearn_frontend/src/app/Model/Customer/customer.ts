export class Customer {
    cusId?: number;
    name: string;
    age: number;
    gender: string;
    email: string;
    address: string;
    mobile: string;
    products: [
        {
            pid?: number;
            dishName: string;
            cuisine: string;
            price: number;
            description: string;
            quantity: number;
            rating: number;
            reviews: number;
        }
    ]
}
