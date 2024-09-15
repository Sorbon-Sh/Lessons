import { useEffect, useState } from "react";
import Modal from "./Modal";
import useGetUserById from "../lib/hooks/useGetUSerById";
import useUpdateUser from "../lib/hooks/useUpdateUser";

const EditModal = ({ onClose, id }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { user } = useGetUserById(id);
  const { updateUser } = useUpdateUser();

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      firstName,
      lastName,
      email,
      role,
    };

    console.log(body);

    await updateUser(JSON.stringify(body), id);

    onClose();
  };

  return (
    <Modal handleClose={onClose}>
      <h1 className="text-2xl font-bold text-center">Edit user</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="flex flex-col gap-2" htmlFor="">
          First Name
          <input
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            type="text"
            className="p-2 border border-black"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          Last Name
          <input
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            type="text"
            className="p-2 border border-black"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          Email
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            className="p-2 border border-black"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          Role
          <input
            onChange={(event) => setRole(event.target.value)}
            value={role}
            type="text"
            className="p-2 border border-black"
          />
        </label>
        <button className="bg-indigo-300 p-2 rounded-xl">Edit</button>
      </form>
    </Modal>
  );
};

export default EditModal;
