import { useState } from "react";


export default function useAddUser(){
    const [user, setUser] = useState(null)
    const [errorAddUser, setErrorAddUser] = useState()

    const userAdd = async (userData)=>{
                                                               //Параметор с названием (body) обязателнел!!!
      await fetch("http://localhost:3000/users", { method: "POST", body: userData})
        .then((response)=> response.json())
        .then((data)=> setUser(data))
        .catch((error) => setErrorAddUser(error))
        .finally(() => console.log("loading is done!"))


    }

    return userAdd;


}



