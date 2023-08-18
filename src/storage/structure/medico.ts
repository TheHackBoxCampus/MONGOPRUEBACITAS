import {Expose} from "class-transformer";

class medico {
    @Expose({name: "nombreCompleto"})
    nm: string

    @Expose({name: "consultorio"})
    c: number

    @Expose({name: "especialidad"})
    es: number

    constructor(data:Partial<medico>) {
        Object.assign({}, data)
        this.nm = "default"
        this.c = 0
        this.es = 0
    
    }
}

export default medico