import {Expose} from "class-transformer";

class genero {
    @Expose({name: "nombre"})
    nm: string

    @Expose({name: "abreviatura"})
    ab: string

    constructor(data:Partial<genero>) {
        Object.assign({}, data)
        this.nm = "masculino"
        this.ab = "M"
    }
}

export default genero