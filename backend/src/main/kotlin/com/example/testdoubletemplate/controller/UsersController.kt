package com.example.testdoubletemplate.controller

import com.example.testdoubletemplate.model.Users
import com.example.testdoubletemplate.service.UsersService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1")
class UsersController(val service:UsersService) {
    @GetMapping("/users")
    fun getUsersController():List<Users>{
        return service.getUsersService()
    }

    @PostMapping("/users")
    fun postUserController(@RequestBody reqBody: Users){
        service.postUserService(reqBody)
    }
}