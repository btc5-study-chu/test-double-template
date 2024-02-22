import {render} from "@testing-library/react"
import App from "../App.tsx";
import {describe, expect, test, vi} from "vitest";
import {PostArea} from "../components/PostArea.tsx"
import {InfoArea} from "../components/InfoArea.tsx";
import {DefaultUserRepository} from "../repository/UserRepository.ts";

vi.mock("../components/PostArea.tsx")
vi.mock("../components/InfoArea.tsx")
describe("App.tsxのテスト",()=> {
    test("App.tsxをレンダリングするとPostAreaコンポーネントをレンダリングする",()=>{
        //given

        //when
        render(<App userRepository={new DefaultUserRepository()}/>)

        //then
        expect(PostArea).toHaveBeenCalled()
    })

    test('App.tsxをレンダリングするとInfoAreaコンポーネントをレンダリングする', () => {
        render(<App userRepository={new DefaultUserRepository()}/>)


        expect(InfoArea).toHaveBeenCalled()
    })
})