import  { useState } from 'react';
// Получаем пользователей
import useGetUser from './lib/hooks/useGetUser';
// Добавляем пользователей
import useAddUser from './lib/hooks/useAddUser';
// Удаляем пользователей
import useDeleteUser from './lib/hooks/useDeleteUser';
// Обновляем данные пользователя
import EditModal from './Components/EditModal';

import GetUsers from './Components/GetUsers';


function App() {
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const {users, error, loading} = useGetUser()
const add = useAddUser()
const {deleteUser} = useDeleteUser()
const [userID, setUserID] = useState("")
const [showEdit, setShowEdit] = useState(false)



// Здесь положили данные с инпута в объекты и при клике данные отправляются в Hook useAddUser
const handleClickAdd = async (event)=>{
event.preventDefault()
// Структурируем данные пользователя в объекты данных чтобы передат в базы данных
const userData = {
  firstName,
  lastName,
  email,
}

// Передаём данные как объекты в Hook useAddUser обренуж в JSON-stringify(userData) для базы данных
await add(JSON.stringify(userData))
}

// Здесь мы одновремено берем и id пользователя и показываем EditModal
const handleUpdateUserClick = (id) =>{
setUserID(id)

setShowEdit(true)

console.log("function wich get id from map iteration is done");

}



  return (
    <>


  <GetUsers 
  users={users}
  error={error}
  loading={loading}
  deleteUser={deleteUser}
  updateUser={handleUpdateUserClick}
  />



   <section className="section__AddUser">
     
     <form>
     <input type="text" onChange={(event)=> setFirstName(event.target.value)} placeholder="Name" value={firstName}/>
    <input type="text" onChange={(event)=> setLastName(event.target.value)} placeholder="LastName" value={lastName}/>
    <input type="text" onChange={(event)=> setEmail(event.target.value)} placeholder="Email" value={email}/>
    <button className="bg-green-400 border rounded-md p-2" onClick={handleClickAdd}>Добавить</button>
     </form>
    
   </section>

  
{showEdit && (
    <EditModal
    // Передаем id пользователя в EditModal чтобы передать в Hook useUpdateUser()
    id={userID}
     />
)}
  
    </>
    );
}

export default App;