import {Http} from "../../http/Http.ts";
import {GetUser, InputObject} from "../../type/TypeUserRepository.ts";

export class StubHttp implements Http {
    getUsersHttp_returnValue:GetUser[] = []
    async submitHttp(inputObject: InputObject): Promise<void> {
        console.log(inputObject)
    }
    async getUsersHttp(): Promise<GetUser[]> {
        return Promise.resolve(this.getUsersHttp_returnValue)
    }
}