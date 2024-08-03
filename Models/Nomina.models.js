import {Schema, model} from 'mongoose'

export const esquemaNomina= new Schema({ 
    Nombre:{
        type: String
    },
    Cantidad:{
        type: Number
    }
 })
 

 export const  ModeloNomina = new model ('Area', esquemaNomina) 