import { useState } from "react";

function useDeleteUser() {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const deleteUser = async (id) => {
    setLoading(true);

    await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => setRes(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(true));
  };

  return { deleteUser, error, loading };
}

export default useDeleteUser;
