import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        trim: true,
    },
    numeroSerie:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    numeroPlaca:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    observaciones:{
        type: String,
        trim: true,
        default: "Sin observaciones",
    },
    tipoMovimiento:{
        type: String,
        required: true,
        trim: true,
        enum: ["Entrada", "Salida"],
    },
    cantidad:{
        type: Number,
        required: true,
        min: 1,
    },
    fechaMovimiento:{
        type: Date,
        default: Date.now,
    },
    nombreInstalador:{
        type: String,
        required: true,
        trim: true, 
    },
})

export default model("Producto", productoSchema);