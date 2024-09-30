import { useState } from "react";

export default function useUpdateUser(){
const [updatedUser, setUpdatedUser] = useState(null)
    //  Получаем новые данные из интупа и id пользователя 
    // Затем устанавливаем id в адрес базу данных пользователя чтобы обращались к контректному пользователю
    // Затем методом "PATCH" (или "PUT" можно) отправляем новые данные, для измения данных пользователя
    const updateUser = async (updateData, id) =>{
        await fetch(`http://localhost:3000/users/${id}`, {method: "PATCH", body: updateData})
        .then((response) =>  response.json())
        .then((data) => setUpdatedUser(data))
        .catch((error) => console.log(error))
        .finally(() => console.log("user is updated"))
    }

    return {updateUser}
}