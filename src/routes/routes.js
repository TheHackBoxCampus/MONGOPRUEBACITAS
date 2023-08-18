import { Router } from "express";
import { generateTokenSpecific } from "../controller/generate.token.specific.js";
import { customAuthPassport } from "../middleware/tokens/verifyTokens.js";

// dto
import acudiente from "../storage/structure/acudiente.js";
import cita from "../storage/structure/cita.js";
import consultorio from "../storage/structure/consultorio.js";
import especialidad from "../storage/structure/especialidad.js";
import estado_cita from "../storage/structure/estado_cita.js";
import genero from "../storage/structure/genero.js";
import medico from "../storage/structure/medico.js";
import tipo_documento from "../storage/structure/tipo_documento.js";
import usuario from "../storage/structure/usuarios.js";


// controllers
import { getA, postA } from "../controller/acudientes.js";

let routes = Router();

// tokens
routes.get("/generar/:categoria", generateTokenSpecific, (req, res) => res.send(req.categoria))

// cruds
routes.get("/acudientes", customAuthPassport(acudiente), getA)
routes.post("/acudientes", customAuthPassport(acudiente), postA)
routes.put("/acudientes", customAuthPassport(acudiente), (req, res) => res.send("acudientes"))
routes.delete("/acudientes", customAuthPassport(acudiente), (req, res) => res.send("acudientes"))

routes.get("/citas", customAuthPassport(cita), (req, res) => res.send("citas"))
routes.post("/citas", customAuthPassport(cita), (req, res) => res.send("citas"))
routes.put("/citas", customAuthPassport(cita), (req, res) => res.send("citas"))
routes.delete("/citas", customAuthPassport(cita), (req, res) => res.send("citas"))

routes.get("/consultorios", customAuthPassport(consultorio), (req, res) => res.send("consultorios"))
routes.post("/consultorios", customAuthPassport(consultorio), (req, res) => res.send("consultorios"))
routes.put("/consultorios", customAuthPassport(consultorio), (req, res) => res.send("consultorios"))
routes.delete("/consultorios", customAuthPassport(consultorio), (req, res) => res.send("consultorios"))

routes.get("/especializacion", customAuthPassport(especialidad), (req, res) => res.send("especializacion"))
routes.post("/especializacion", customAuthPassport(especialidad), (req, res) => res.send("especializacion"))
routes.put("/especializacion", customAuthPassport(especialidad), (req, res) => res.send("especializacion"))
routes.delete("/especializacion", customAuthPassport(especialidad), (req, res) => res.send("especializacion"))

routes.get("/estado_cita", customAuthPassport(estado_cita), (req, res) => res.send("estado_cita"))
routes.post("/estado_cita", customAuthPassport(estado_cita), (req, res) => res.send("estado_cita"))
routes.put("/estado_cita", customAuthPassport(estado_cita), (req, res) => res.send("estado_cita"))
routes.delete("/estado_cita", customAuthPassport(estado_cita), (req, res) => res.send("estado_cita"))

routes.get("/genero", customAuthPassport(genero), (req, res) => res.send("genero"))
routes.post("/genero", customAuthPassport(genero), (req, res) => res.send("genero"))
routes.put("/genero", customAuthPassport(genero), (req, res) => res.send("genero"))
routes.delete("/genero", customAuthPassport(genero), (req, res) => res.send("genero"))

routes.get("/medico", customAuthPassport(medico), (req, res) => res.send("medico"))
routes.post("/medico", customAuthPassport(medico), (req, res) => res.send("medico"))
routes.put("/medico", customAuthPassport(medico), (req, res) => res.send("medico"))
routes.delete("/medico", customAuthPassport(medico), (req, res) => res.send("medico"))

routes.get("/tipo_documento", customAuthPassport(tipo_documento), (req, res) => res.send("tipo_documento"))
routes.post("/tipo_documento", customAuthPassport(tipo_documento), (req, res) => res.send("tipo_documento"))
routes.put("/tipo_documento", customAuthPassport(tipo_documento), (req, res) => res.send("tipo_documento"))
routes.delete("/tipo_documento", customAuthPassport(tipo_documento), (req, res) => res.send("tipo_documento"))


routes.get("/usuario", customAuthPassport(usuario), (req, res) => res.send("usuario"))
routes.post("/usuario", customAuthPassport(usuario), (req, res) => res.send("usuario"))
routes.put("/usuario", customAuthPassport(usuario), (req, res) => res.send("usuario"))
routes.delete("/usuario", customAuthPassport(usuario), (req, res) => res.send("usuario"))

export default routes; 