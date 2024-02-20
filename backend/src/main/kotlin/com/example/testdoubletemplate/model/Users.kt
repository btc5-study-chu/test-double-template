package com.example.testdoubletemplate.model

import java.util.UUID

data class Users(
    val id:UUID? = null,
    val name:String = "",
    val nickName:String = "",
    val term:Int = 0,
    val remark:String = "",
)
