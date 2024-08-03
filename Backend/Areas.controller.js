import { ModeloAreas} from '../Models/Areas.models.js'

export const test3 = () =>{
    console.log('Si funciona la conexion Areas')
}

ModeloAreas.create({
    Nombre: "Montserrat Ramos Vargas",
    Areatrabajo: "Bodega sur"
})