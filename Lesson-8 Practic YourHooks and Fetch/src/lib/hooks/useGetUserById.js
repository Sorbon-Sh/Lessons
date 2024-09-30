
import { useState, useEffect } from "react";

// Зачем мы получаем пользователя по айди? Чтобы отображат пользователя
// Это тот самы айди которы мы получаем из итерации в GetUsers
export default function useGetUserById(id){
    const [getUser, setGetUser] = useState()

    // Хук запускается  после прорисовки сайта
useEffect(()=>{
// fetch запушена сама по себе и получаем пользователя по Id
    fetch(`http://localhost:3000/users/${id}`)
    .then((response)=> response.json())
    // Сохраняем пользователя в state
    .then((data) => setGetUser(data))
    .catch((error) => console.log(`Error: ${error}`))
    .finally(()=> console.log("get user by id is done"))
   
},[])

// Отправляем пользователя 
return {getUser}
}