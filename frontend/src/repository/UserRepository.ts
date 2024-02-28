import {GetUser, InputObject} from "../type/TypeUserRepository.ts";
import {DefaultHttp, Http} from "../http/Http.ts";

export  interface UserRepository {
    submit(inputObject: InputObject): void
    getUsers(): Promise<GetUser[]>
}
export class DefaultUserRepository implements UserRepository {
    http: Http
    constructor(http = new DefaultHttp()) {
        this.http = http
    }
    submit(inputObject: InputObject) {
        this.http.submitHttp(inputObject)
    }

    async getUsers():Promise<GetUser[]>{
        return Promise.resolve(this.http.getUsersHttp())
    }

}

