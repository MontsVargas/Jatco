import {Schema, model} from 'mongoose'

export const esquemaLideres= new Schema({ 
    name:{
        type: String
    },
    Numerotel:{
        type: Number
    }
 })
 

 export const ModeloLideres = new model ('Lideres', esquemaLideres)