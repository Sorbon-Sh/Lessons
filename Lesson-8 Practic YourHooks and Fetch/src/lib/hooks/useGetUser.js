
import { useState, useEffect } from "react";


export default function useGetUser(){
  const [users, setUsers] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

// Запускается после прорисовки
useEffect(()=>{
    // Включаем Загрузку
    setLoading(true)
  // Запускается запрос GET в fetch 
    fetch('http://localhost:3000/users')
    .then((response)=> response.json())
    .then((data) => setUsers(data))
    .catch((error) => setError(error))
    // Отключаем загрузку после окончание загрузки запроса
    .finally(() => setLoading(false))
},[])


return {users, error, loading}

}