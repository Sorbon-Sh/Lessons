import { useState } from "react";
import Modal from "./components/Modal";
import Table from "./components/Table";
import EditModal from "./components/EditModal";

//? Импортируем Кастомные Хуки
import useGetUsers from "./lib/hooks/useGetUsers";
import useAddUser from "./lib/hooks/useAddUser";


// TODO: Добавить валидацию для инпутов
// TODO: Добавить для каждого пользователя две кнопки, изменить и удалить

const App = () => {

//* Берём данные из Кастомных Хуков как возврашали их (в данном случии виде объектов данных)
  const { users, error, loading } = useGetUsers();

//* ============================================== Данные из input, show для Modal, inputError для валидации формы
const [show, setShow] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [currentId, setCurrentId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [inputError, setInputError] = useState({
    name: "",
    lastName:"",
    email: "",
    role:""
  })
//* ===============================================

//? Берём Хук в переменную
  const addUser = useAddUser();

//* Делаем сразу два действия 1) Получаем Id пользователя  2) Показываем модальное окно поле ввода изменения
  const handleEditeClick = (id) =>{
   setCurrentId(id)

   setShowEdit(true)
  }


//* ФУНКЦИЯ провеки и добавление данных в Хук useAddUser(), где через (fectch) добавляются данные пользователя в локальный база данных
  const handleSubmit = async (event) => {
    
//? Отменяем перезагрузку при клике на кнопку
    event.preventDefault();


//? Добавляем данные в объекты (Если название ключа и значение одниковые, то можно так сократит код)
    const body = {
      firstName,
      lastName,
      email,
      role,
    };



// *===============================  Условия валидации формы
    if(!firstName){
      setInputError({...inputError, name: "Введите это поле"})
      console.log(inputError.name)
      return
    }
    if(firstName.length <= 2){
      setInputError({...inputError, name: "Минимум 3 сивола!"})
      return
    }

    if(!lastName){
      setInputError({...inputError, lastName: "Введите это поле"})
      return
    }
     if(lastName.length <= 2){
      setInputError({...inputError, lastName: "Минимум 3 сивола!"})
      return
    } 

    if(!email){
      setInputError({...inputError, email: "Введите это поле"})
      return
    }

    if(!role){
      setInputError({...inputError, role: "Введите это поле"})
      return
    }
// *================================



 
//* Очищаем ошибки после проверки
   setInputError("")

//? Проверяем получаем ли мы данные из формы input
    console.log(body);

//? Запускаем наш Хук Асинхронно (Потому что мы написали его асинхронно) и передаём данные пользователя 
//? Функция возвращает нам функцию postUser где написать (fetch запрос)
await addUser(JSON.stringify(body));

//* Прячем Форму ввода
    setShow(false);
  };





  return (
//* =======================================================  Передача данных из наших Кастомных Хуков в Компонент Table 
    <div className="h-screen grid place-items-center">
      <Table
        handleEdit={handleEditeClick}
        openModal={() => setShow(true)}
        users={users}
        error={error}
        loading={loading}
      />
{/*//*====================================================== 
*/}



{/*//*======================================================================================  Обертоваем форму в Компонент Modal.
//*                                                                                           При нажатии кнопки show станет "true"
 */}
      {show && (
        <Modal handleClose={() => setShow(false)}>
          <h1 className="text-2xl font-bold text-center">Add user</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            
            <label className="flex flex-col gap-2" htmlFor="">
              First Name
              {inputError.name && <span className="text-red-500">{inputError.name}</span>}
              <input
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
                type="text"
                className="p-2 border border-black"
              />
            </label>
            <label className="flex flex-col gap-2" htmlFor="">
              Last Name
              {inputError.lastName && <span className="text-red-500">{inputError.lastName}</span>}
              <input
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
                type="text"
                className="p-2 border border-black"
              />
            </label>
            <label className="flex flex-col gap-2" htmlFor="">
              Email
              {inputError.email && <span className="text-red-500">{inputError.email}</span>}
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="text"
                className="p-2 border border-black"
              />
            </label>
            <label className="flex flex-col gap-2" htmlFor="">
              Role
              {inputError.role && <span className="text-red-500">{inputError.role}</span>}
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
{/*//*=======================================================================================
 */}

 {showEdit && (
  <EditModal onClose={() =>setShowEdit(false)} id={currentId} />
 )}

    </div>
  );
};

export default App;
