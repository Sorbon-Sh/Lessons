import { useEffect, useState } from "react";
import { BarLoader, CircleLoader, DotLoader } from "react-spinners";

const url = "https://jsonplaceholder.org/users";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  // ? 1 подход
  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => setUsers(data));
  //   }, []);

  // ? 2 подход
  useEffect(() => {
// Оператор try пробует функцию на запуск 
    try {
      // Передаём ссылку к базы данных (сыллка указывает на базу данных пользователей)
      fetch(url)
      // Потом (then) получаем эти данные в аргументы функции (response) и конвертируем их в js коде (json())
        .then((response) => response.json())
      // Потом (then) получаем обработанные данные в json() формате (в данном случии му получаем объекты данных)
        .then((data) => setUsers(data));
      // Здесь мы ловим ощибки при загрузке данных
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Взять данные по id
  useEffect(() => {
    try {
      fetch(`${url}/1`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

// Результат в консоль
  useEffect(() => {
    console.log(users);
  }, [users]);


  return (
    <div>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div
            className="bg-gray-100 text-xl my-4 mx-12 p-4 space-y-3"
            key={user.id}
          >
            <p>
              {user.firstname} {user.lastname}
            </p>
            <p>{user.email}</p>
            <p>{user.birthDate.split("-").join(".")}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchComponent;
