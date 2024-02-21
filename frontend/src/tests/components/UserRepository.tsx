export default interface UserRepository {
    submit(inputObject: InputObject): void
}

export interface InputObject {
    name: string
    nickName: string
    term: number
    remark: string
}

export class DefaultUserRepository implements UserRepository {
    submit() {
    }
}

export class SpyUserRepository implements UserRepository {
    submit_argumetValue: InputObject | null = null
        submit(inputsObject: InputObject) {
        this.submit_argumetValue = inputsObject
    }
}