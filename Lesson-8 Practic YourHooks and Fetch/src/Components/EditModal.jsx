import { useState, useEffect } from "react";
import useUpdateUser from "../lib/hooks/useUpdateUser";
import useGetUserById from "../lib/hooks/useGetUserById";

export default function EditModal({id}){
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const {updateUser} = useUpdateUser()
// Передаем id пользователя чтобы отображать его данные по id при клике кнопки (изменить)
const {getUser} = useGetUserById(id)


useEffect(()=>{

    // Получаем state пользователя по id из useGetUserById, затем устанавливаем эти данные при клике в инпут для 
    // Отоброжение данных пользователя при клике
    if(getUser){
        setFirstName(getUser.firstName)
        setLastName(getUser.lastName)
        setEmail(getUser.email)
    }

    console.log("EditModal is get user by id from function handleIdUserClick from App");
// Запустится тогда когда получим id и когда поменяется id пользователя его данные установятся
},[getUser])

const handleEditClick = async (event)=>{
event.preventDefault()
// Структурируем данные с инпута в объекты данных для базы данных
    const updatedData = {
        firstName,
        lastName,
        email,
    }

    // Передаем данные в Hook useUpdateUser и id пользователя чтобы обновить пользователя по id
    await updateUser(JSON.stringify(updatedData), id)

}




return(
    <>
 <form className="grid grid-cols-1 gap-y-5 bg-gray-500 w-96 h-96 absolute my-10">
<input type="text" className="border rounded-sm" onChange={(event)=> setFirstName(event.target.value)} placeholder="Name" value={firstName}/>
<input type="text" className="border rounded-sm" onChange={(event)=> setLastName(event.target.value)} placeholder="LastName" value={lastName}/>
<input type="text" className="border rounded-sm" onChange={(event)=> setEmail(event.target.value)} placeholder="Email" value={email}/>
 <button className="border rounded-md bg-green-400 p-4 text-2xl" onClick={handleEditClick}>Отправить</button>
 </form>
    </>
)
}