import {GetUser, InputObject} from "../../type/TypeUserRepository.ts";
import {UserRepository} from "../../repository/UserRepository.ts";

export class SpyUserRepository implements UserRepository {
    submit_argumetValue: InputObject | null = null
    getUsers_wasCalled = false

    submit(inputsObject: InputObject) {
        this.submit_argumetValue = inputsObject
    }

    async getUsers():Promise<GetUser[]> {
        this.getUsers_wasCalled = true
        return await []
    }
}