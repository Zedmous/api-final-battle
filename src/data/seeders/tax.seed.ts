import { TaxInterface } from "../../interfaces";

const taxesSeeds: Partial<TaxInterface>[] = [
    {
        id: 1,
        name: "Estudiante",
        percentage:0.12
    },
    {
        id: 2,
        name: "Civil",
        percentage:0.20
    },
    {
        id: 2,
        name: "Empresas",
        percentage:0.30
    },
    

];

export { taxesSeeds }