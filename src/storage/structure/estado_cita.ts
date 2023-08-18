import {Expose} from "class-transformer";

class estado_cita {
    @Expose({name: "nombre"})
    nm: string

    constructor(data:Partial<estado_cita>) {
        Object.assign({}, data)
        this.nm = "default"
    }
}

export default estado_cita