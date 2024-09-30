import { useState } from "react";

// TODO: Добавить состояние ошибки, загрузки

function useAddUser() {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const postUser = async (body) => {
    setLoading(true);

    await fetch("http://localhost:3000/users", { method: "POST", body })
      .then((response) => response.json())
      .then((data) => setRes(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(true));
  };

  return { postUser, error, loading };
}

export default useAddUser;
