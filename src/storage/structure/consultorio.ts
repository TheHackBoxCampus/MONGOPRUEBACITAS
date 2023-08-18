import {Expose} from "class-transformer";

class consultorio {
    @Expose({name: "nombre_consultorio"})
    nm: string

    constructor(data:Partial<consultorio>) {
        Object.assign({}, data)
        this.nm = "default"
    }
}

export default consultorio  