import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        trim: true,
    },
    numeroPlaca:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    numeroSerie:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    tipoMovimiento:{
        type: String,
        required: true,
        trim: true,
        enum: ["Entrada", "Salida","Bodega"],
    },
    fechaIngreso:{
        type: Date,
    },
    fechgaInstalacion:{
        type: Date,
    },
    nombreInstalador:{
        type: String,
        trim: true, 
    },
    observaciones:{
        type: String,
        trim: true,
        default: "Sin observaciones",
    },
    estado:{
        type: String,
        trim: true,
        enum: ["Nuevo", "Usado", "Dañado"],
    }
})

export default model("Producto", productoSchema);