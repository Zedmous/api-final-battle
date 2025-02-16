import {
    db,
  } from "../config";

  
  export const getAllJournal = async () => {
    try {
        const query:string=`
        select
            j.request_id as id,
            j.createdAt as fecha,
            r.description as description,
            a.id as ref,
            a.name as account,
            ac.name as nickname,
            ac.amount as amount,
            ac.type as type
        from
            requests r,
            request_types rt,
            accounts a,
            account_records ac,
            journals j
        where 
            r.request_type_id =rt.id
            and r.status='aprobada'
            and r.id=j.request_id
            and j.account_record_id=ac.id
            and a.id=ac.account_id 
        order by j.createdAt`;
      const [journals] = await db.query(query);
      journals.map((journal:any) => {
        
        return {
          id:journal.id,
          

        }
        console.log(`Fecha: ${journal.fecha}, Descripción: ${journal.description}, Monto: ${journal.amount}`);
      });
      console.log(journals)
      return {
        message: `¡Journals founds!`,
        status: 200,
        data: {
          journals,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacta con el administrador`,
        status: 500,
      };
    }
  };
  
  /*
  export const getOneJournal = async (id: number) => {
    try {
      //consultas a la base de datos van aca
      const purchase = await JournalDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
      if (!purchase) {
        console.log("No encontrado");
        return {
          message: `Compra no encontrado`,
          status: 404,
          data: {},
        };
      } else {
        return {
          message: `Compra encontrada`,
          status: 200,
          data: {
            purchase,
          },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: `Contacta con el administrador`,
        status: 500,
      };
    }
  };
  export const createJournal = async (dat: JournalInterface) => {
    const transaction = await db.transaction();
    try {
      //consultas a la base de datos van aca
      const purchase = await JournalDB.create(
        {
          supplier_id: dat.supplier_id,
          reference: dat.reference,
          purchase_details: dat.purchase_details, // Aquí pasamos el array de detalles
        },
        {
          include: [{ model: JournalDetailDB }], // Incluir el modelo de detalles de venta
          transaction, // Usar la transacción
        }
      );
      let details: any = dat.purchase_details;
      //calcular el monto total para la solicitud
      let amount: number = 0.0;
      for (const detail of details) {
        amount += detail.quantity * detail.price;
      }
  
      //lógica de finanzas
      const request = await RequestDB.create(
        {
          request_type_id: 3, //asi lo definimos en el seed para la compra
          description: "Solicitud de Compra",
          amount,
          status: "pendiente",
        },
        {
          transaction,
        }
      );
      await transaction.commit(); // Confirmar la transacción
      return {
        message: `¡Compra registrada exitosamente!`,
        status: 200,
        data: {
          purchase,
          request
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacta con el administrador`,
        status: 500,
      };
    }
  };
  
  export const updateJournal = async (id: number, dat: JournalInterface) => {
    try {
      //consultas a la base de datos van aca
      const purchase = await JournalDB.update(
        {
          status: dat.status,
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
      const { data } = await getOneJournal(id);
      return {
        message: `¡Compra actualizada exitosamente!`,
        status: 200,
        data: {
          purchase: data?.purchase,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacta con el administrador`,
        status: 500,
      };
    }
  };
  export const deleteJournal = async (id: number, data: JournalInterface) => {
    try {
      //consultas a la base de datos van aca
      const purchase = await JournalDB.update(
        {
          status: 'rechazada',
          deletedAt: new Date(),
        },
        {
          where: {
            id,
          },
          returning: true,
        }
      );
  
      return {
        message: `¡Compra eliminada exitosamente!`,
        status: 200,
        data: {
          purchase,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        message: `Contacta con el administrador`,
        status: 500,
      };
    }
  };
  */