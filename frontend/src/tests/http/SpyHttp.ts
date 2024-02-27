import {Http} from "../../http/Http.ts";
import {InputObject} from "../../type/TypeUserRepository.ts";
import {InputObjectBuilder} from "../__test-helper__/InputObjectBuilder.ts";

export class SpyHttp implements Http {
    submitHttp_argument = new InputObjectBuilder().build()
    async submitHttp(inputObject: InputObject) {
        this.submitHttp_argument = inputObject
    }
}