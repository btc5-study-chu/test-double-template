
export  interface UserRepository {
    submit(inputObject: InputObject): void
}

export interface InputObject {
    name: string
    nickName: string
    term: number
    remark: string
}
