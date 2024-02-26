import {InputObject} from "../../type/TypeUserRepository.ts";
import {UserRepository} from "../../repository/UserRepository.ts";

export class SpyUserRepository implements UserRepository {
    submit_argumetValue: InputObject | null = null

    submit(inputsObject: InputObject) {
        this.submit_argumetValue = inputsObject
    }
}