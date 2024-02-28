import {UserRepository} from "../../repository/UserRepository.ts";
import {GetUser, InputObject} from "../../type/TypeUserRepository.ts";

export class StubUserRepository implements UserRepository {
    getUsers_returnValue:GetUser[] = []
    submit(inputObject: InputObject) {
        console.log(inputObject)
    }
    async getUsers():Promise<GetUser[]> {
        return await Promise.resolve(this.getUsers_returnValue)
    }
}