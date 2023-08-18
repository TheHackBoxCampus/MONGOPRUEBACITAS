import jwt from "jsonwebtoken";
import enviroments from "../env/env.js";
import { plainToClass, classToPlain } from "class-transformer";
import acudiente from "../storage/structure/acudiente.js";
import cita from "../storage/structure/cita.js";
import consultorio from "../storage/structure/consultorio.js";
import especialidad from "../storage/structure/especialidad.js";
import estado_cita from "../storage/structure/estado_cita.js";
import genero from "../storage/structure/genero.js";
import medico from "../storage/structure/medico.js";
import tipo_documento from "../storage/structure/tipo_documento.js";

const getClass = (op) => {
    let o = {
        "acudientes": acudiente, 
        "cita": cita, 
        "consultorio": consultorio, 
        "especialidad": especialidad, 
        "estado_cita": estado_cita,
        "genero": genero,
        "medico": medico,
        "tipo_documento": tipo_documento
    }

    let userop = o[op];

    if(!userop) throw "Categoria invalida"
    else return {attr: plainToClass(userop, {}, {ignoreDecorators: true})}
}

const generateTokenSpecific = async (req, res, next) => {
    try { 
        let structure = getClass(req.params.categoria).attr; 
        console.log(structure)
        let token = new Promise((resolve, reject) => {
            jwt.sign(Object.assign({}, classToPlain(structure)), enviroments.KEY, {algorithm: "HS256", expiresIn: "10m"}, (err, token) => {
                 err ? reject(err) : resolve(token) 
            })
        })
        let getToken = await token; 
        
        req.categoria = {status: 200, token: getToken, categoria: req.params.categoria}
        return next() 
    }catch(err) {
        res.status(500).send({status: 500, message: err})
    }
}

export {
    generateTokenSpecific
}