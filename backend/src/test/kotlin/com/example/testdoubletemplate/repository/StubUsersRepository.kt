package com.example.testdoubletemplate.repository

import com.example.testdoubletemplate.model.UsersRecord
import org.springframework.data.domain.Example
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.data.repository.query.FluentQuery
import java.util.*
import java.util.function.Function

class StubUsersRepository:UsersRepository {
    var findAll_result= mutableListOf(UsersRecord())
    override fun <S : UsersRecord?> save(entity: S & Any): S & Any {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> saveAll(entities: MutableIterable<S>): MutableList<S> {
        TODO("Not yet implemented")
    }

    override fun findById(id: UUID): Optional<UsersRecord> {
        TODO("Not yet implemented")
    }

    override fun existsById(id: UUID): Boolean {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> findAll(example: Example<S>): MutableList<S> {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> findAll(example: Example<S>, sort: Sort): MutableList<S> {
        TODO("Not yet implemented")
    }

    override fun findAll(): MutableList<UsersRecord> {
        return findAll_result
    }

    override fun findAll(sort: Sort): MutableList<UsersRecord> {
        TODO("Not yet implemented")
    }

    override fun findAll(pageable: Pageable): Page<UsersRecord> {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> findAll(example: Example<S>, pageable: Pageable): Page<S> {
        TODO("Not yet implemented")
    }

    override fun findAllById(ids: MutableIterable<UUID>): MutableList<UsersRecord> {
        TODO("Not yet implemented")
    }

    override fun count(): Long {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> count(example: Example<S>): Long {
        TODO("Not yet implemented")
    }

    override fun deleteById(id: UUID) {
        TODO("Not yet implemented")
    }

    override fun delete(entity: UsersRecord) {
        TODO("Not yet implemented")
    }

    override fun deleteAllById(ids: MutableIterable<UUID>) {
        TODO("Not yet implemented")
    }

    override fun deleteAll(entities: MutableIterable<UsersRecord>) {
        TODO("Not yet implemented")
    }

    override fun deleteAll() {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> findOne(example: Example<S>): Optional<S> {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> exists(example: Example<S>): Boolean {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?, R : Any?> findBy(
        example: Example<S>,
        queryFunction: Function<FluentQuery.FetchableFluentQuery<S>, R>
    ): R & Any {
        TODO("Not yet implemented")
    }

    override fun flush() {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> saveAndFlush(entity: S & Any): S & Any {
        TODO("Not yet implemented")
    }

    override fun <S : UsersRecord?> saveAllAndFlush(entities: MutableIterable<S>): MutableList<S> {
        TODO("Not yet implemented")
    }

    override fun deleteAllInBatch(entities: MutableIterable<UsersRecord>) {
        TODO("Not yet implemented")
    }

    override fun deleteAllInBatch() {
        TODO("Not yet implemented")
    }

    override fun deleteAllByIdInBatch(ids: MutableIterable<UUID>) {
        TODO("Not yet implemented")
    }

    override fun getOne(id: UUID): UsersRecord {
        TODO("Not yet implemented")
    }

    override fun getById(id: UUID): UsersRecord {
        TODO("Not yet implemented")
    }

    override fun getReferenceById(id: UUID): UsersRecord {
        TODO("Not yet implemented")
    }

}