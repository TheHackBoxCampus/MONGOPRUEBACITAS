import {Expose} from "class-transformer";

class especialidad {
    @Expose({name: "nombre_consultorio"})
    nm: string

    constructor(data:Partial<especialidad>) {
        Object.assign({}, data)
        this.nm = "default"
    }
}

export default especialidad