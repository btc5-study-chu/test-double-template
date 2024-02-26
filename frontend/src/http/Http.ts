import {InputObject} from "../type/TypeUserRepository.ts";
import axios from "axios";

export interface Http {
    submitHttp(inputObject:InputObject):Promise<void>
}

export class DefaultHttp implements Http {
    async submitHttp(inputObject: InputObject) {
        await axios.post("/api/v1/users",inputObject)
    }
}