import {Expose} from "class-transformer";

class usuario {
    @Expose({name: "nombre"})
    nm: string

    @Expose({name: "segundoNombre"})
    snm: string

    @Expose({name: "apellido"})
    anm: string

    @Expose({name: "segundoApellido"})
    sanm: string

    @Expose({name: "telefono"})
    tl: string

    @Expose({name: "direccion"})
    dr: string

    @Expose({name: "email"})
    em: string

    @Expose({name: "tipo_documento"})
    tp: number

    @Expose({name: "genero"})
    gn: number

    @Expose({name: "acudiente"})
    ac: number

    constructor(data:Partial<usuario>) {
        Object.assign({}, data)
        this.nm = "guest"
        this.snm = "default"
        this.anm = "defaul2"
        this.sanm = "defaul3"
        this.tl = "1234"
        this.dr = "# 33"
        this.em = "example@gmail.com"
        this.tp = 0
        this.gn = 0
        this.ac = 0
    }
}

export default usuario