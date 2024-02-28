import {DefaultUserRepository, UserRepository} from "../repository/UserRepository.ts";
import {useState} from "react";

type Props  = {
        userRepository?:UserRepository
}


export const PostArea = (
    {
        userRepository = new DefaultUserRepository()
    }:Props
    ) => {
    const [inputName, setInputName] = useState('')
    const [inputNickName, setInputNickName] = useState('')
    const [inputTerm, setInputTerm] = useState('')
    const [inputRemark, setInputRemark] = useState('')

    function sendInfo () {
           if (userRepository === undefined) return
           userRepository.submit(
               {
                   name: inputName,
                   nickName: inputNickName,
                   term: inputTerm,
                   remark: inputRemark
               }
           )
        setInputName('')
        setInputNickName('')
        setInputTerm('')
        setInputRemark('')
    }

    return (
        <>
            <div>名前</div>
            <input onChange={event => setInputName(event.target.value)} type="text" id='name' value={inputName}/>
            <div>ニックネーム</div>
            <input onChange={event => setInputNickName(event.target.value)} type="text" id='nickName' value={inputNickName}/>
            <div>FND</div>
            <input onChange={event => setInputTerm(event.target.value)} type="text" id='term' value={inputTerm}/>
            <div>一言</div>
            <input onChange={event => setInputRemark(event.target.value)} type="text" id='remark' value={inputRemark}/>
            <button onClick={sendInfo}>投稿</button>
    </>)
}



// 名前        input: string
// ニックネーム input: string
// FND        input: string …かな?
// 一言        input: string
// 投稿ボタン