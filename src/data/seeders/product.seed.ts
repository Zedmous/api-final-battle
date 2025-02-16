import { ProductInterface } from "../../interfaces";


const productsSeeds: Partial<ProductInterface>[] = [
    {
        name:"Smarphone Motorola",
        price:550.50,
        quantity:80,
        minimum_stock:10
    },
    {
        name:"Mouse",
        price:10.50,
        quantity:100,
        minimum_stock:10
    }
];

export { productsSeeds }