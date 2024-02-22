import {PostArea} from "./components/PostArea.tsx";
import {InfoArea} from "./components/InfoArea.tsx";
import {DefaultUserRepository} from "./repository/UserRepository.ts";
import {UserRepository} from "./type/TypeUserRepository.ts";


interface Props {
   userRepository : UserRepository
}
function App({
                 userRepository = new DefaultUserRepository()
             }:Props) {

  return (
    <>
      <PostArea userRepository={userRepository}/>
      <InfoArea />
    </>
  )
}

export default App
