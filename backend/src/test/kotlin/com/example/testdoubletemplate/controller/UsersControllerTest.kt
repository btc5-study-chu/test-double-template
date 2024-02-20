package com.example.testdoubletemplate.controller

import com.example.testdoubletemplate.model.Users
import com.example.testdoubletemplate.service.SpyUsersService
import com.example.testdoubletemplate.service.StubUsersService
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Nested
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import java.util.UUID

class UsersControllerTest{

    private lateinit var spyUsersService : SpyUsersService
    private lateinit var stubUsersService : StubUsersService
    private lateinit var mockMvc: MockMvc

    @BeforeEach
    fun setUp () {
        spyUsersService = SpyUsersService()
        stubUsersService = StubUsersService()
    }


    @Nested
    inner class `getメソッドのテスト` {
        @Test
        fun `api_v1_usersにGetメソッドでアクセスするとstatus200OKが返ってくる` (){
            //given

            //when
    //        mockMvc.get("/api/v1/users")
    //            .andExpect{status{isOk()}}
            mockMvc = MockMvcBuilders.standaloneSetup(UsersController(spyUsersService)).build()
            mockMvc.perform(
                get("/api/v1/users")
            )
            //then
                .andExpect(status().isOk)
        }
        @Test
        fun サービス層のgetUsersメソッドを呼んでいること(){
            mockMvc = MockMvcBuilders.standaloneSetup(UsersController(spyUsersService)).build()
            mockMvc.perform(
                get("/api/v1/users")
            )
            assertEquals(true,spyUsersService.getUsersService_isCalled)
        }

        @Test
        fun Getメソッドの返り値が正しい型のListであること(){
            //given
            mockMvc = MockMvcBuilders.standaloneSetup(UsersController(stubUsersService)).build()
            var dummyId = UUID.fromString("00000000-0000-0000-0000-000000000001")
            stubUsersService.getUsersService_result = listOf(Users(
                id = dummyId,
                name = "tanaka",
                nickName = "tanachu",
                term = 12,
                remark = "nezumi"
            )
            )

            //when
            mockMvc.perform(
                get("/api/v1/users")
            )
                //then
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(dummyId.toString()))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("tanaka"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].nickName").value("tanachu"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].term").value(12))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].remark").value("nezumi"))
        }
    }

    @Nested
    inner class `Postメソッド` {
        @Test
        fun `should return statusOK(statusCode 200) when POST to api_v1_users `() {
            mockMvc = MockMvcBuilders.standaloneSetup(UsersController(spyUsersService)).build()


            mockMvc.perform(
                post("/api/v1/users")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(
                        """
                            {
                        "name": "tanaka",
                        "nickName": "tanachu",
                        "term" : 12,
                        "remark" : "nezumi"
                            }
                            """
                    )
            )

                .andExpect(status().isOk)
        }

        @Test
        fun `should call postUserService with correct argument when POST to api_v1_users `() {
            //given
            mockMvc = MockMvcBuilders.standaloneSetup(UsersController(spyUsersService)).build()

            //when
            mockMvc.perform(
                post("/api/v1/users")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(
                        """
                            {
                        "name": "tanaka",
                        "nickName": "tanachu",
                        "term" : 12,
                        "remark" : "nezumi"
                            }
                            """
                    )
            )

            //then
            assertEquals(true,spyUsersService.postUsersService_isCalled)
            assertEquals("tanaka", spyUsersService.postUsersServiceArgument.name)
            assertEquals("tanachu", spyUsersService.postUsersServiceArgument.nickName)
            assertEquals(12, spyUsersService.postUsersServiceArgument.term)
            assertEquals("nezumi", spyUsersService.postUsersServiceArgument.remark)

        }
    }
}
