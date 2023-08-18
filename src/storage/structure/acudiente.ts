import { Expose } from "class-transformer"

class acudiente {
    @Expose({name: "nombreCompleto"})
    nm: string

    @Expose({name: "telefono"})
    tl: string

    @Expose({name: "direccion"})
    dr: string

    constructor(data:Partial<acudiente>) {
        Object.assign({}, data)
        this.nm = "guest"
        this.tl = "1234"
        this.dr = "# 33"
    }
}

export default acudiente