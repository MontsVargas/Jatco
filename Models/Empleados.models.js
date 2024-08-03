import {Schema, model} from 'mongoose'

export const esquemaEmpleados = new Schema({ 
    Nombre:{
        type: String
    },
    Numero_de_telefono:{
        type: Number
    }
 })
 

 export const  ModeloEmpleados = new model ('Empleados', esquemaEmpleados) 