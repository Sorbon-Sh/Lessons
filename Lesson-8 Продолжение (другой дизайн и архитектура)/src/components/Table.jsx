import TableItem from "./TableItem";

const Table = ({ users, error, loading, openModal, handleEdit }) => {
  return (
    <div className="border border-indigo-400 p-8 rounded-xl">
      <div className="py-4">
        <button
          className="bg-indigo-50 p-4 w-full rounded-xl hover:bg-indigo-200"
          onClick={openModal}
        >
          Add user
        </button>
      </div>
      <div className="grid grid-cols-12 border border-indigo-400 rounded-t-xl bg-indigo-100">
        <div className="col-span-3 p-4 border-e border-indigo-400">
          First Name
        </div>
        <div className="col-span-3 p-4 border-e border-indigo-400">
          Last Name
        </div>
        <div className="col-span-2 p-4 border-e border-indigo-400">Email</div>
        <div className="col-span-2 p-4 border-e border-indigo-400">Role</div>
      </div>

      {loading && <div>Loading...</div>}

      {users &&
        users.map((user) => (
          <TableItem
            handleEdit={handleEdit}
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            role={user.role}
            id={user.id}
          />
        ))}
    </div>
  );
};

export default Table;
