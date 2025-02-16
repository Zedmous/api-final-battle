import { RequestTypeInterface } from "../../interfaces";

const requestTypesSeeds: Partial<RequestTypeInterface>[] = [
  {
    name: "Constitucion de la empresa",//las que se pagan por completo
    bot: false,//este proceso es el inicial del libro implica que sea manual, por eso es false
  },
  {
    name: "Registro de Venta al contado",//las que se pagan por completo
    bot: true,//este proceso indica que es automatico para el sistema, por eso es true
  },
  {
    name: "Solicitud de Compra",//las que se hacen para comprar productos
    bot: false,//este proceso indica que es manual para el sistema, por eso es false
  },
  /*{
    id: 2,
    name: "Registro de Venta a credito",//las que se pagan por partes y en un tiempo determinado
    bot: false,
  },*/
  
];

export { requestTypesSeeds };