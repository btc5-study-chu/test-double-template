import {render, screen, waitFor} from "@testing-library/react";
import {InfoArea} from "../../screens/InfoArea.tsx";
import {SpyUserRepository} from "../repository/SpyUserRepository.ts";
import {StubUserRepository} from "../repository/StubUserRepository.ts";


describe('InfoArea.tsxのテスト',()=>{


    test('InfoAreaがレンダリングされた時、データ数というテキストがあること',()=>{
        render(<InfoArea userRepository = {new SpyUserRepository}/>)

        expect(screen.getByText('データ数 :')).toBeInTheDocument()
    })
    test('InfoAreaがレンダリングされた時、テーブルヘッダーがいること',() => {
        render(<InfoArea userRepository = {new SpyUserRepository}/>)

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
    test('InfoAreaがレンダリングされた時、UserRepositoryのgetUsersRepositoryから受け取った返り値をテーブルに表示する',async () => {
        const stubUserRepository = new StubUserRepository()
        stubUserRepository.getUsers_returnValue = [{
            id: '123456789',
            name: 'tanaka',
            nickName: 'tanachu',
            term: '12',
            remark: 'nezumi'
        }, {
            id: 'ABCDEF',
            name: 'matsui',
            nickName: 'nao',
            term: '12',
            remark: 'akarui'
        }]

        const {unmount} = render(<InfoArea userRepository = {stubUserRepository}/>)

        await waitFor(() => {
            expect((screen.getAllByRole('rowgroup')[1]).children[0].children[0].innerHTML).toBe('123456789')
        })
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[1].innerHTML).toBe('tanaka')
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[2].innerHTML).toBe('tanachu')
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[3].innerHTML).toBe('12')
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[4].innerHTML).toBe('nezumi')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[0].innerHTML).toBe('ABCDEF')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[1].innerHTML).toBe('matsui')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[2].innerHTML).toBe('nao')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[3].innerHTML).toBe('12')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[4].innerHTML).toBe('akarui')

        unmount()

        stubUserRepository.getUsers_returnValue = [
            {
                id: 'abcdef',
                name: 'ogata',
                nickName: 'baison',
                term: '14',
                remark: 'cowcow'
        },
            {
                id: 'ABCDEF',
                name: 'matsui',
                nickName: 'nao',
                term: '12',
                remark: 'akarui'
            }]

        render(<InfoArea userRepository = {stubUserRepository}/>)

        await waitFor(()=>{
            expect((screen.getAllByRole('rowgroup')[1]).children[0].children[0].innerHTML).toBe('abcdef')
        })
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[1].innerHTML).toBe('ogata')
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[2].innerHTML).toBe('baison')
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[3].innerHTML).toBe('14')
        expect((screen.getAllByRole('rowgroup')[1]).children[0].children[4].innerHTML).toBe('cowcow')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[0].innerHTML).toBe('ABCDEF')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[1].innerHTML).toBe('matsui')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[2].innerHTML).toBe('nao')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[3].innerHTML).toBe('12')
        expect((screen.getAllByRole('rowgroup')[1]).children[1].children[4].innerHTML).toBe('akarui')
    })

    test('InfoAreaがレンダリングされた時、UserRepositoryのgetUsersRepositoryから受け取った要素の数が表示できる',async () => {
        const stubUserRepository = new StubUserRepository()
        stubUserRepository.getUsers_returnValue = [{
            id: 'xxxxxxxxx',
            name: '',
            nickName: '',
            term: '',
            remark: ''
        }, {
            id: 'yyyyyyyyyy',
            name: '',
            nickName: '',
            term: '',
            remark: ''
        }]

        const {unmount} = render(<InfoArea userRepository = {stubUserRepository}/>)

        await waitFor(()=>{
            expect(screen.getByText('2')).toBeInTheDocument()
        })
        unmount()

        stubUserRepository.getUsers_returnValue = [
            {
                id: 'zzzzzzzzz',
                name: '',
                nickName: '',
                term: '',
                remark: ''
            },
            ]

        render(<InfoArea userRepository = {stubUserRepository}/>)

        await waitFor(()=>{
            expect(screen.getByText('1')).toBeInTheDocument()
        })
    })
})