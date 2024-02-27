import {InputObject} from "../type/TypeUserRepository.ts";
import {DefaultHttp, Http} from "../http/Http.ts";

export  interface UserRepository {
    submit(inputObject: InputObject): void
    getUsers():void
}
export class DefaultUserRepository implements UserRepository {
    http: Http
    constructor(http = new DefaultHttp()) {
        this.http = http
    }
    submit(inputObject: InputObject) {
        this.http.submitHttp(inputObject)
    }

    getUsers(){}

}

