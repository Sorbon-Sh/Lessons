import { useState } from "react";


// *Наш собственный Hook (function declaration)
// *=========================================================================== БЛОК-6 Удаление пользователя по ${id}
//*                                                                             Методом "DELETE"
function useDeleteUser() {
  const [res, setRes] = useState(null);

// *Пример создание Асинхронной функции (function expression)
  const deleteUser = async (id) => {

    await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE"})
      .then((response) => response.json())
      .then((data) => setRes(data))
      .catch(() => console.log("Error add user"))
      .finally(() => console.log("Loading is done"))
  };

  //? Возвращяем функцию deleteUser
  return {deleteUser};
}
// *==========================================================================

export default useDeleteUser;
