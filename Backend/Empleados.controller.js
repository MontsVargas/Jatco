import { ModeloEmpleados } from '../Models/Empleados.models.js'

export const test = () =>{
    console.log('Si funciona la conexion a Empleados')
}

ModeloEmpleados.create({
    Nombre: "Montserrat Ramos Vargas",
    Numero_de_telefono: 4495694459
})