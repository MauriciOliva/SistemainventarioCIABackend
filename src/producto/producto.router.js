import { Router } from "express";
import {
    saveProducto,
    getProductos,
    getProductoById,
    updateProducto,
    deleteProducto
} from "./producto.controller.js";
import { validateProducto } from "../../middlwares/validator.js";


const router = Router();

router.post("/", validateProducto, saveProducto);
router.get("/", getProductos);
router.get("/:id", getProductoById);
router.put("/:id", validateProducto, updateProducto);
router.delete("/:id", deleteProducto);

export default router;