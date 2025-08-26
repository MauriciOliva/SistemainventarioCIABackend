'use strict';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import productoRouter from "../src/producto/producto.router.js";

const configs = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
}

const routes = (app) => {
    app.use("/v1/api/productos", productoRouter);

}

export const initServer = () =>{
    const app = express();
    try {
        configs(app);
        routes(app);
        app.listen(process.env.PORT)
        console.log(`Server | Running on port ${process.env.PORT}`);
    } catch (error) {
        console.error("Server | Error starting server:", error);
    }
}