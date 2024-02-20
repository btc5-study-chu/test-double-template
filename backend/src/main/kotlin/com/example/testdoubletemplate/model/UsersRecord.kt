package com.example.testdoubletemplate.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.*

@Entity
@Table(name="UsersTable")
data class UsersRecord(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: UUID? = null,
    val name:String = "",
    val nickName:String = "",
    val term:Int = 0,
    val remark:String = "",
)
