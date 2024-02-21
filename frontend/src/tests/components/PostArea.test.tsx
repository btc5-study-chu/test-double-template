import {expect, test} from "vitest";
import {PostArea} from "../../components/PostArea.tsx";
import {render, screen} from "@testing-library/react";
import {InputObject, SpyUserRepository} from "./UserRepository.tsx";
import {userEvent} from "@testing-library/user-event";

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

    test("投稿ボタンを押したらsubmitメソッドに各inputに入力された値を引数として渡す", async () => {
        const dummyInputData: InputObject = {
            name: "",
            nickName: "",
            term: 0,
            remark: ""　　
        }
        const spyUserRepository = new SpyUserRepository()


        await userEvent.click(screen.getByRole('button'))


        expect(spyUserRepository.submit_argumetValue).toEqual(dummyInputData)
    })
})