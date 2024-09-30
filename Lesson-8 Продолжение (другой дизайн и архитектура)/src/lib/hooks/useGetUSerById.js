import { useEffect } from "react";
import { useState } from "react";

export default function useGetUserById(id) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json()) // ? Обработка промиса в JS объект
      .then((data) => setUser(data)) // ? Добавление данных в стейт
      .catch((error) => setError(error)) // ? Проверка на ошибки
      .finally(() => setLoading(false)); // ? Когда загрузка закончена, меняется стейт
  }, []);

  return { user, error, loading };
}

// try {

// } catch (error) {

// } finally {

// }
