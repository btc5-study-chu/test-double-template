import {DefaultUserRepository} from "../../repository/UserRepository.ts";
import {expect} from "vitest";
import {SpyHttp} from "../http/SpyHttp.ts";
import {InputObjectBuilder} from "../__test-helper__/InputObjectBuilder.ts";
import {StubHttp} from "../http/StubHttp.ts";

describe('UserRepositoryのテスト',()=>{
    test('UserRepositoryのsubmitメソッドは、正しい引数でHttpのsubmitHttpsを呼ぶ',()=>{
        const testArg =  new InputObjectBuilder()
            .setName('tanaka')
            .setNickname('tanachu')
            .setTerm('12')
            .setRemark('nezumi')
            .build()

        const spyHttp = new SpyHttp()
        const userRepository = new DefaultUserRepository(spyHttp)


        userRepository.submit(testArg)

        expect(spyHttp.submitHttp_argument).toEqual(testArg)
    })

    test('UserRepositoryのgetUsersメソッドは、HttpのgetUsersHttpを呼ぶ',()=>{

        const spyHttp = new SpyHttp()
        const userRepository = new DefaultUserRepository(spyHttp)


        userRepository.getUsers()

        expect(spyHttp.getUsersHttp_wasCalled).toBe(true)
    })
    test('UserRepositoryのgetUsersメソッドは、HttpのgetUsersHttpから受け取った値を返す',async ()=>{

        const stubHttp = new StubHttp()
        const userRepository = new DefaultUserRepository(stubHttp)
        stubHttp.getUsersHttp_returnValue = [{
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


        const res = await userRepository.getUsers()

        expect(res[0]).toEqual({
            id: '123456789',
            name: 'tanaka',
            nickName: 'tanachu',
            term: '12',
            remark: 'nezumi'
        })
        expect(res[1]).toEqual({
            id: 'ABCDEF',
            name: 'matsui',
            nickName: 'nao',
            term: '12',
            remark: 'akarui'
        })
    })
})