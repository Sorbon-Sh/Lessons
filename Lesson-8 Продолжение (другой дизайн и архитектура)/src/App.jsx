import { useState } from "react";
import Modal from "./components/Modal";
import Table from "./components/Table";
import useGetUsers from "./lib/hooks/useGetUsers";
import useAddUser from "./lib/hooks/useAddUser";
import EditModal from "./components/EditModal";

// TODO: Добавить валидацию для инпутов
// TODO: Добавить для каждого пользователя две кнопки, изменить и удалить

const App = () => {
  const { users, error, loading } = useGetUsers();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { postUser } = useAddUser();

  const handleEditClick = (id) => {
    setCurrentId(id);

    setShowEdit(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      role,
    };

    console.log(body);

    await postUser(JSON.stringify(body));

    setShow(false);
  };

  return (
    <div className="h-screen grid place-items-center">
      <Table
        handleEdit={handleEditClick}
        openModal={() => setShow(true)}
        users={users}
        error={error}
        loading={loading}
      />
      {show && (
        <Modal handleClose={() => setShow(false)}>
          <h1 className="text-2xl font-bold text-center">Add user</h1>
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
            <button className="bg-indigo-300 p-2 rounded-xl">Add</button>
          </form>
        </Modal>
      )}

      {showEdit && (
        <EditModal onClose={() => setShowEdit(false)} id={currentId} />
      )}
    </div>
  );
};

export default App;
