import {Expose} from "class-transformer";

class cita {
    @Expose({name: "fecha"})
    fc: Date

    @Expose({name: "estado"})
    e: number

    @Expose({name: "medico"})
    m: number

    @Expose({name: "datos_usuario"})
    u: number

    constructor(data:Partial<cita>) {
        Object.assign({}, data)
        this.fc = new Date(2023, 8, 18)
        this.e = 0
        this.m = 0
        this.u = 0
    }
}

export default cita