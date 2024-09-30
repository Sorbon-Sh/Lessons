import useDeleteUser from "../lib/hooks/useDeleteUser";

const TableItem = ({ firstName, lastName, email, role, id, handleEdit }) => {
  const { deleteUser } = useDeleteUser();

  const handleDelete = () => {
    deleteUser(id);
  };

  return (
    <div className="grid grid-cols-12 border border-indigo-400">
      <div className="col-span-3 p-4 border-e border-indigo-400">
        {firstName}
      </div>
      <div className="col-span-3 p-4 border-e border-indigo-400">
        {lastName}
      </div>
      <div className="col-span-2 p-4 border-e border-indigo-400">{email}</div>
      <div className="border-e border-indigo-400 col-span-2 p-4">{role}</div>
      <div className="border-e border-indigo-400 p-4 text-center">
        <button
          className="border border-green-500 px-4 py-1 rounded-full"
          onClick={() => handleEdit(id)}
        >
          EDIT
        </button>
      </div>
      <div className="p-4 text-center">
        <button
          onClick={handleDelete}
          className="border border-red-500 px-4 py-1 rounded-full"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TableItem;
