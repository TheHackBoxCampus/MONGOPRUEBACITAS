import express from "express"
import routes from "./routes/routes.js";

const app = express(); 


/**
 * ! middlewares
 */

app.use(express.json())
app.use(express.text())

/**
 * Rutes
 */

app.use(routes)

export default app;