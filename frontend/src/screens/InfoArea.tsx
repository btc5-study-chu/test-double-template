import {DefaultUserRepository, UserRepository} from "../repository/UserRepository.ts";
import {useEffect} from "react";

type  Props = {
    userRepository?:UserRepository
}
export const InfoArea = (
    {
                             userRepository = new DefaultUserRepository()
}:Props) => {

    useEffect(() => {
        userRepository?.getUsers()
    }, []);

    return (
        <>
            <div>データ数 :</div>
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
            </table>
        </>

    )
}