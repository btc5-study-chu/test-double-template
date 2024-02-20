package com.example.testdoubletemplate.service

import com.example.testdoubletemplate.model.Users
import com.example.testdoubletemplate.model.UsersRecord
import com.example.testdoubletemplate.repository.SpyUsersRepository
import com.example.testdoubletemplate.repository.StubUsersRepository
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test
import java.util.UUID

class UsersServiceTest{
    private  val spyUsersRepository = SpyUsersRepository()
    private  val stubUsersRepository = StubUsersRepository()


    @Nested
    inner class Getメソッドのテスト{
      @Test
          fun サービスのgetUserServiceがRepositoryのfindAllを呼んでいること(){
              //given
              val usersService = UsersServiceImpl(spyUsersRepository)
              //when
              usersService.getUsersService()

              //then
              assertEquals(true,spyUsersRepository.findAll_isCalled)
          }

          @Test
          fun サービスのgetUserServiceは正しい返り値を返す(){
              //given
              val usersService = UsersServiceImpl(stubUsersRepository)
              val dummyId = UUID.fromString("00000000-0000-0000-0000-000000000002")
              val expected = Users (
                  id = dummyId,
                  name = "tanakka",
                  nickName = "tanachu",
                  term = 12,
                  remark = "nezumi"
              )

              stubUsersRepository.findAll_result = mutableListOf(
                  UsersRecord(
                      id = expected.id,
                      name = expected.name,
                      nickName = expected.nickName,
                      term = expected.term,
                      remark = expected.remark
                  )
              )
              //when
              val res = usersService.getUsersService()

              //then
              assertEquals(expected,res[0])
          }
    }

    @Nested
    inner class Postメソッドのテスト{
        @Test
        fun RepositoryのSaveメソッドを正しい引数で呼んでいるか(){
            //given
            val usersService = UsersServiceImpl(spyUsersRepository)
            val tempArg = Users(
                name = "tanaka",
                nickName = "tanachu",
                term = 12,
                remark = "nezumi"
            )
            //when
            usersService.postUserService(tempArg)

            //then
            assertEquals(true,spyUsersRepository.save_isCalled)
            assertEquals("tanaka",spyUsersRepository.save_argument.name)
            assertEquals("tanachu",spyUsersRepository.save_argument.nickName)
            assertEquals(12,spyUsersRepository.save_argument.term)
            assertEquals("nezumi",spyUsersRepository.save_argument.remark)

        }


    }

}