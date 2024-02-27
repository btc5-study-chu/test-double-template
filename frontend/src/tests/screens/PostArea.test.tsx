import {expect, test} from "vitest";
import {PostArea} from "../../screens/PostArea.tsx";
import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import {InputObject} from "../../type/TypeUserRepository.ts";
import {SpyUserRepository} from "../repository/SpyUserRepository.ts";
import {act} from "react-dom/test-utils";

describe("PostArea.tsxのテスト",() =>{
    test("PostArea.tsxをレンダリングすると全てのラベルがある",() => {

        render(<PostArea />)

        expect(screen.getAllByText("名前").length).toBe(1)
        expect(screen.getByText("ニックネーム")).toBeInTheDocument()
        expect(screen.getAllByText("FND").length).toBe(1)
        expect(screen.getByText("一言")).toBeInTheDocument()
    })

    test("PostArea.tsxをレンダリングすると投稿のボタンが表示されている", () => {
        render(<PostArea />)

        expect(screen.getByRole('button', {name: "投稿"})).toBeInTheDocument()
    })

    test("全ラベルに対してのインプットがあるか",() =>{

        render(<PostArea />)

        expect(screen.getAllByRole('textbox')[0].id).toEqual('name')
        expect(screen.getAllByRole('textbox')[1].id).toEqual('nickName')
        expect(screen.getAllByRole('textbox')[2].id).toEqual('term')
        expect(screen.getAllByRole('textbox')[3].id).toEqual('remark')
    })

    test("各inputに値を入力できる", async () => {

        await act(async () => {
            render(<PostArea />)
        })
        const inputName = screen.getAllByRole('textbox')[0] as HTMLInputElement
        const inputNickName = screen.getAllByRole('textbox')[1] as HTMLInputElement
        const inputTerm = screen.getAllByRole('textbox')[2] as HTMLInputElement
        const inputRemark = screen.getAllByRole('textbox')[3] as HTMLInputElement
        await userEvent.type(inputName,"tanaka")
        await userEvent.type(inputNickName,"tanachu")
        await userEvent.type(inputTerm,'12')
        await userEvent.type(inputRemark,"nezumi")


        expect(inputName.value).toEqual("tanaka")
        expect(inputNickName.value).toEqual("tanachu")
        expect(inputTerm.value).toEqual("12")
        expect(inputRemark.value).toEqual("nezumi")
    })

    test("投稿ボタンを押したらsubmitメソッドに各inputに入力された値を引数として渡す", async () => {
        const dummyInputData: InputObject = {
            name: "tanaka",
            nickName:"tanachu",
            term: '12',
            remark: "nezumi"　　
        }

        const spyUserRepository = new SpyUserRepository()

        render(<PostArea userRepository={spyUserRepository}/>)
        const inputName = screen.getAllByRole('textbox')[0]
        const inputNickName = screen.getAllByRole('textbox')[1]
        const inputTerm = screen.getAllByRole('textbox')[2]
        const inputRemark = screen.getAllByRole('textbox')[3]

        await userEvent.type(inputName,"tanaka")
        await userEvent.type(inputNickName,"tanachu")
        await userEvent.type(inputTerm,"12")
        await userEvent.type(inputRemark,"nezumi")
        await userEvent.click(screen.getByRole('button',{name: '投稿'}))


        expect(spyUserRepository.submit_argumetValue).toEqual(dummyInputData)
    })

    test('投稿ボタンが押されたらinputの中身が空になっている', async () => {
        const spyUserRepository = new SpyUserRepository()

        render(<PostArea userRepository={spyUserRepository}/>)
        const inputName = screen.getAllByRole('textbox')[0]
        const inputNickName = screen.getAllByRole('textbox')[1]
        const inputTerm = screen.getAllByRole('textbox')[2]
        const inputRemark = screen.getAllByRole('textbox')[3]

        await userEvent.type(inputName,"tanaka")
        await userEvent.type(inputNickName,"tanachu")
        await userEvent.type(inputTerm,"12")
        await userEvent.type(inputRemark,"nezumi")
        await userEvent.click(screen.getByRole('button',{name: '投稿'}))

        const textBoxName = screen.getAllByRole('textbox')[0] as HTMLInputElement

        expect(textBoxName.value).toBe('')
        expect(screen.getAllByRole('textbox')[1]).toHaveValue('')
        expect(screen.getAllByRole('textbox')[2]).toHaveValue('')
        expect(screen.getAllByRole('textbox')[3]).toHaveValue('')
    })

})