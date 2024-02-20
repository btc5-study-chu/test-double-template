package com.example.testdoubletemplate.service

import com.example.testdoubletemplate.model.Users
import com.example.testdoubletemplate.model.UsersRecord
import com.example.testdoubletemplate.repository.UsersRepository
import org.springframework.stereotype.Service

interface UsersService {
    fun getUsersService(): List<Users>
    fun postUserService(users: Users)
}

@Service
class UsersServiceImpl(val usersRepository: UsersRepository) : UsersService {
    override fun getUsersService(): List<Users> {
        val repositoryList = usersRepository.findAll()
        return repositoryList.map {
            Users(
                it.id,
                it.name,
                it.nickName,
                it.term,
                it.remark
            )
        }
    }

    override fun postUserService(users: Users) {
        usersRepository.save(
            UsersRecord(
                name = users.name,
                nickName = users.nickName,
                term = users.term,
                remark = users.remark
            )
        )
    }
}