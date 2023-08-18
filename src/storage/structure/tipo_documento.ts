import {Expose} from "class-transformer";

class tipo_documento {
    @Expose({name: "nombre"})
    nm: string

    @Expose({name: "abreviatura"})
    ab: string

    constructor(data:Partial<tipo_documento>) {
        Object.assign({}, data)
        this.nm = "cedula"
        this.ab = "cc"
    }
}

export default tipo_documento