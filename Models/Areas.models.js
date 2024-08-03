import {Schema, model} from 'mongoose'

export const esquemaAreas = new Schema({ 
    Nombre:{
        type: String
    },
    AreaTrabajo:{
        type: String
    }
 })
 

 export const  ModeloAreas = new model ('Areas', esquemaAreas) 