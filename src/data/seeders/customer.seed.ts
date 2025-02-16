import { CustomerInterface } from "../../interfaces";


const customersSeeds: Partial<CustomerInterface>[] = [
    {
        identification:"01",
        name:"Pixi",
        email:"pixie@email.com",
        telephone:"+584265478899",
        address:"Barquisimeto"
    },
    {
        identification:"02",
        name:"Charlie",
        email:"charlie@email.com",
        telephone:"+584265478899",
        address:"Fabrica de chocolates"
    }
];

export { customersSeeds }