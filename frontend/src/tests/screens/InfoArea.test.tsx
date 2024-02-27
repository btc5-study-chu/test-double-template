import {render, screen} from "@testing-library/react";
import {InfoArea} from "../../screens/InfoArea.tsx";
import {SpyUserRepository} from "../repository/SpyUserRepository.ts";





describe('InfoArea.tsxのテスト',()=>{


    test('InfoAreaがレンダリングされた時、データ数というテキストがあること',()=>{
        render(<InfoArea />)

        expect(screen.getByText('データ数 :')).toBeInTheDocument()
    })
    test('InfoAreaがレンダリングされた時、テーブルヘッダーがいること',() => {
        render(<InfoArea />)

        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getByRole('columnheader',{name:"ID"})).toBeInTheDocument()
        expect(screen.getByRole('columnheader',{name:"名前"})).toBeInTheDocument()
        expect(screen.getByRole('columnheader',{name:"ニックネーム"})).toBeInTheDocument()
        expect(screen.getByRole('columnheader',{name:"FND"})).toBeInTheDocument()
        expect(screen.getByRole('columnheader',{name:"一言"})).toBeInTheDocument()
    })
    test('InfoAreaがレンダリングされた時、UserRepositoryのgetUsersRepositoryを呼んでいること',async () => {
        const spyUserRepository = new SpyUserRepository()
        render(<InfoArea userRepository = { spyUserRepository}/>)

        expect(spyUserRepository.getUsers_wasCalled).toBeTruthy()


    })
})