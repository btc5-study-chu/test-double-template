import {InputObject, UserRepository} from "../../type/TypeUserRepository.ts";

export class SpyUserRepository implements UserRepository {
    submit_argumetValue: InputObject | null = null

    submit(inputsObject: InputObject) {
        this.submit_argumetValue = inputsObject
    }
}