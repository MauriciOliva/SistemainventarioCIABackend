import Producto from "./producto.model.js";

export const saveProducto = async (req, res) => {
    try {
        let producto = new Producto(req.body);
        await producto.save();
        res.status(201).json(producto);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "El número de serie o número de placa ya existe",
                error: error.message
            });
        }
        res.status(500).json({ 
            success: false,
            message: "Error al guardar el producto", 
            error: error.message
        });
    }
};

export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProductoById = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndUpdate(id, req.body, { new: true });
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndDelete(id);
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}