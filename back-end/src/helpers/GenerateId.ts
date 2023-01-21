import {v4} from "uuid"

export class GenerateId {
    public generateId():string{
        const id:string = v4()
        return id
    }
}