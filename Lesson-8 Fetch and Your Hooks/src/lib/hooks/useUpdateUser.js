import { useState } from "react";

// TODO: Добавить состояние ошибки, загрузки

function useUpdateUser() {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const updateUser = async (body, id) => {
    setLoading(true);

    await fetch(`http://localhost:3000/users/${id}`, { method: "PATCH", body })
      .then((response) => response.json())
      .then((data) => setRes(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(true));
  };

  return { updateUser, error, loading };
}

export default useUpdateUser;
