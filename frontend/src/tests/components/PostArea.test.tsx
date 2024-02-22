import {expect, test} from "vitest";
import {PostArea} from "../../components/PostArea.tsx";
import {render, screen} from "@testing-library/react";
import {DefaultUserRepository} from "../../repository/UserRepository.ts";
import {userEvent} from "@testing-library/user-event";
// import {InputObject} from "../../type/TypeUserRepository.ts";
// import {SpyUserRepository} from "../repository/SpyUserRepository.ts";
import {act} from "react-dom/test-utils";

describe("PostArea.tsxのテスト",() =>{
    test("PostArea.tsxをレンダリングすると全てのラベルがある",() => {

        render(<PostArea userRepository={new DefaultUserRepository()}/>)

        expect(screen.getAllByText("名前").length).toBe(1)
        expect(screen.getByText("ニックネーム")).toBeInTheDocument()
        expect(screen.getAllByText("FND").length).toBe(1)
        expect(screen.getByText("一言")).toBeInTheDocument()
    })

    test("PostArea.tsxをレンダリングすると投稿のボタンが表示されている", () => {
        render(<PostArea userRepository={new DefaultUserRepository()}/>)

        expect(screen.getByRole('button', {name: "投稿"})).toBeInTheDocument()
    })

    test("全ラベルに対してのインプットがあるか",() =>{

        render(<PostArea userRepository={new DefaultUserRepository()}/>)

        expect(screen.getAllByRole('textbox')[0].id).toEqual('name')
        expect(screen.getAllByRole('textbox')[1].id).toEqual('nickName')
        expect(screen.getAllByRole('textbox')[2].id).toEqual('term')
        expect(screen.getAllByRole('textbox')[3].id).toEqual('remark')
    })

    test("各inputに値を入力できる", async () => {

        await act(async () => {
            render(<PostArea userRepository={new DefaultUserRepository()}/>)
        })
        const inputName = screen.getAllByRole('textbox')[0] as HTMLInputElement
        await userEvent.type(inputName,"tanaka")

        expect(inputName.value).toEqual("tanaka")
    })

    // ↓絶対消さないで！！上のテスト終わったら復活して良いやつ。テストとしては完成してます！！！！
    // test("投稿ボタンを押したらsubmitメソッドに各inputに入力された値を引数として渡す", async () => {
    //     const dummyInputData: InputObject = {
    //         name: "tanaka",
    //         nickName:"tanachu",
    //         term: 12,
    //         remark: "nezumi"　　
    //     }
    //
    //     const spyUserRepository = new SpyUserRepository()
    //
    //     render(<PostArea userRepository={spyUserRepository}/>)
    //     const inputName = screen.getAllByRole('textbox')[0]
    //     const inputNickName = screen.getAllByRole('textbox')[1]
    //     const inputTerm = screen.getAllByRole('textbox')[2]
    //     const inputRemark = screen.getAllByRole('textbox')[3]
    //
    //     await userEvent.type(inputName,"tanaka")
    //     await userEvent.type(inputNickName,"tanachu")
    //     await userEvent.type(inputTerm,"12")
    //     await userEvent.type(inputRemark,"nezumi")
    //     await userEvent.click(screen.getByRole('button'))
    //
    //
    //     expect(spyUserRepository.submit_argumetValue).toEqual(dummyInputData)
    // })
})