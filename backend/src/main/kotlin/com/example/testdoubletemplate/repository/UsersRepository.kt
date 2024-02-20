package com.example.testdoubletemplate.repository

import com.example.testdoubletemplate.model.UsersRecord
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import java.util.*

interface UsersRepository :JpaRepository<UsersRecord,UUID>