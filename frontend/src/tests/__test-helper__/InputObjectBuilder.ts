import {InputObject} from "../../type/TypeUserRepository.ts";

export class InputObjectBuilder implements InputObject {
    name = ''
    nickName = ''
    term = ''
    remark = ''

    setName(name:string){
        this.name = name
        return this
    }
    setNickname(nickName:string){
        this.nickName = nickName
        return this
    }
    setTerm (term:string){
        this.term = term
        return this
    }
    setRemark(remark:string){
        this.remark = remark
        return this
    }

    build(){
        return {
            name : this.name,
            nickName : this.nickName,
            term : this.term,
            remark : this.remark
        }
    }
}