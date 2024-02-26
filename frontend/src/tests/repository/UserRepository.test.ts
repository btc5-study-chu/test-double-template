import {DefaultUserRepository} from "../../repository/UserRepository.ts";
import {expect} from "vitest";
import {SpyHttp} from "../http/SpyHttp.ts";
import {InputObjectBuilder} from "../__test-helper__/InputObjectBuilder.ts";

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
})