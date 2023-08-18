import conx from "../config/db.js";

const getA = async (req, res) => {
    try {
        let db = await conx(); 
        let collection = await db.collection("acudiente");
        let consult = await collection.find().toArray(); 
        res.send(consult)
    }catch(err) {
        console.log(err)
    }
}

const postA = async (req, res) => {
    try {
        let data = req.body; 
        let db = await conx(); 
        let collection = await db.collection("acudiente");

        await collection.insertOne({...Object.values(data)})
        res.status(201).send({status: 201, message: "Se ha ingresado un nuevo acudiente!!"})
    }catch(err) {
        console.log(err)
    }
}

export {
    getA,
    postA
}