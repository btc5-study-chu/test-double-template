import {DefaultUserRepository, UserRepository} from "../repository/UserRepository.ts";
import {useEffect, useState} from "react";
import {GetUser} from "../type/TypeUserRepository.ts";

type  Props = {
    userRepository?:UserRepository
}
export const InfoArea = (
    {
                             userRepository = new DefaultUserRepository()
}:Props) => {
    const [users, setUsers] = useState<GetUser[]>([])
    useEffect(() => {
        const getAllUser = async() => {
            const usersData = await userRepository?.getUsers()
            console.log(usersData)
           setUsers(usersData)
        }
        getAllUser()
    }, []);
    return (
        <>
            <div>データ数 :</div>
            <div>{users.length}</div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>名前</th>
                        <th>ニックネーム</th>
                        <th>FND</th>
                        <th>一言</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.nickName}</td>
                                    <td>{user.term}</td>
                                    <td>{user.remark}</td>
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
        </>

    )
}