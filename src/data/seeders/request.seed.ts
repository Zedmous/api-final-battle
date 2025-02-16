import { RequestInterface } from "../../interfaces";

const requestsSeeds: Partial<RequestInterface>[] = [
  {
    description: "Constitucion de la empresa",
    request_type_id: 1,//es constitucion de la empresa 
    amount: 50000,
    status: "aprobada",
  },
  {
    description: "Venta de productos",
    request_type_id: 2, //es venta al contado
    amount: 3500,
    status: "aprobada",
  },
  {
    description: "Venta de productos",
    request_type_id: 2,//es venta al contado
    amount: 9000,
    status: "aprobada",
  },
  {
    description: "Compra de productos",
    request_type_id: 3,//es venta al contado
    amount: 10500,
    status: "aprobada",
  },
  /*{
    request_id: 2,
    description: "Pago de salarios para el personal médico",
    request_type_id: 2,
    amount: 5000,
    status: "approved",
  },
  {
    request_id: 3,
    description: "Solicitud de mantenimiento de equipos",
    request_type_id: 3,
    amount: 1200,
    status: "pending",
  },
  {
    request_id: 4,
    description: "Compra de muebles de oficina",
    request_type_id: 1,
    amount: 800,
    status: "rejected",
  },
  {
    request_id: 5,
    description: "Solicitud de cirugía de emergencia",
    request_type_id: 4,
    amount: 7000,
    status: "approved",
  },
  {
    request_id: 6,
    description: "Sesión de entrenamiento para el personal",
    request_type_id: 5,
    amount: 1500,
    status: "pending",
  },*/
];

export { requestsSeeds };