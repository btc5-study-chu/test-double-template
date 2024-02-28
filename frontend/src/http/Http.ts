import {GetUser, InputObject} from "../type/TypeUserRepository.ts";
import axios from "axios";

export interface Http {
    submitHttp(inputObject:InputObject):Promise<void>
    getUsersHttp():Promise<GetUser[]>
}

export class DefaultHttp implements Http {
    async submitHttp(inputObject: InputObject) {
        await axios.post("/api/v1/users",inputObject)
    }
    async getUsersHttp(): Promise<GetUser[]> {
        return axios.get("/api/v1/users").then(elm => elm.data)
    }
}