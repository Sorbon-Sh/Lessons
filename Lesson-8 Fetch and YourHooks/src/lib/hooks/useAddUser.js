import { useState } from "react";

// TODO: Добавить состояние ошибки, загрузки 
// *Наш собственный Hook (function declaration)
// *========================= Функционал ===================================== БЛОК-4  Добавление новых объектов данных методом "POST"
function useAddUser() {
  const [res, setRes] = useState(null);

// *Пример создание Асинхронной функции (function expression)
  const postUser = async (body) => {
    await fetch("http://localhost:3000/users", { method: "POST", body })
      .then((response) => response.json())
      .then((data) => setRes(data))
      .catch(() => console.log("Error add user"))
      .finally(() => console.log("Loading is done"))
  };

  return postUser;
}
// *==========================================================================

export default useAddUser;
