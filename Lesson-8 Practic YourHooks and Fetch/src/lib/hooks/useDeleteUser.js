import { useState } from "react";

export default function useDeleteUser(){
const [userDelete, setUserDelete] = useState(null)


const deleteUser = async (id) =>{
    // Получаем Id пользователя через функцию deleteUser который получает (id из итерации) пользователя данных 
    // И по удаляем пользователя вызывая функцию при клике
 await fetch(`http://localhost:3000/users/${id}`, {method: "DELETE"})
 .then((response) => response.json())
 .then((data) => setUserDelete(data))
 .catch((error) => console.log(error))
 .finally(()=> console.log('user deleted!'))

}


return {deleteUser}

}