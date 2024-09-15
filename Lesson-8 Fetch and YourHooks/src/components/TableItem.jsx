// *Импорт нашего кастомного хука
import useDeleteUser from "../lib/hooks/useDeleteUser"
// *===================================================================================== БЛОК-3  Добавление данных в Верстку
const TableItem = ({ firstName, lastName, email, role, id, handleEdit }) => {

  // *Берем функцию deleteUser из кастомного хука
  const {deleteUser} = useDeleteUser()

 const handleDelete = () =>{
  // *Передаем в функцию deleteUser id пользователя
 deleteUser(id)
 }

  return (
    <div className="grid grid-cols-5 border border-indigo-400 ">
      <div className="p-4 border-e border-indigo-400">{firstName}</div>
      <div className="p-4 border-e border-indigo-400">{lastName}</div>
      <div className="p-4 border-e border-indigo-400">{email}</div>
      <div className="p-4 border-e border-indigo-400"> {role} </div> 
      <div className="p-4 grid gap-y-2">
      <button onClick={() => handleEdit(id)} 
      className="bg-green-500  rounded-xl py-2 ">
        Change</button>
        <button className="bg-red-600 text-white rounded-xl py-2 " onClick={handleDelete}>Delete</button>

      </div>
    </div>
  );
};
// *=======================================================================================

export default TableItem;
