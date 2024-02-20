package com.example.testdoubletemplate.service

import com.example.testdoubletemplate.model.Users

class SpyUsersService:UsersService {
    var getUsersService_isCalled = false
    var postUsersService_isCalled = false
    var postUsersServiceArgument = Users()
    override fun getUsersService():List<Users> {
        getUsersService_isCalled = true
        return listOf(Users())
    }

    override fun postUserService(users: Users) {
        postUsersService_isCalled = true
        postUsersServiceArgument = users
    }
}