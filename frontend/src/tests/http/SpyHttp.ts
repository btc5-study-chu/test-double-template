import {Http} from "../../http/Http.ts";
import {GetUser, InputObject} from "../../type/TypeUserRepository.ts";
import {InputObjectBuilder} from "../__test-helper__/InputObjectBuilder.ts";

export class SpyHttp implements Http {
    submitHttp_argument = new InputObjectBuilder().build()
    getUsersHttp_wasCalled = false
    async submitHttp(inputObject: InputObject) {
        this.submitHttp_argument = inputObject
    }
    async getUsersHttp(): Promise<GetUser[]> {
        this.getUsersHttp_wasCalled = true
        return  await []
    }
}