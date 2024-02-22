import {InputObject, UserRepository} from "../type/TypeUserRepository.ts";


export class DefaultUserRepository implements UserRepository {
    submit(inputObject: InputObject) {
        console.log(inputObject)
    }
}

