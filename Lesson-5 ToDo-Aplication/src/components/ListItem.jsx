const ListItem = ({ id, name, completed, onDelete, onComplete }) => {
  return (
    <div
      className={`flex justify-between pl-3 text-2xl rounded-s-3xl 
       bg-slate-700 text-white 
      ${
        completed ? "line-through text-gray-700" : ""
      }`}
    >
      {name}
      <div className="text-black" >
        <button
          className="p-2 bg-red-600"
          onClick={() => onDelete(id)}
        >
          DEL
        </button>
        <button
          className=" p-2 bg-yellow-400 "
          onClick={() => onComplete(id)}
        >
          COM
        </button>
      </div>
    </div>
  );
};

export default ListItem;
