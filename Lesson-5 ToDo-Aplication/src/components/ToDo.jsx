import { useEffect, useState } from "react";
import Box from "./Box";
import ListItem from "./ListItem";

// ? Получаем список задач из локального хранилища
const tasksFromLS = localStorage.getItem("tasks");

const ToDo = () => {
  const [tasks, setTasks] = useState(
    // ? Если в локальном хранилище есть задачи, то в стейт попадают они, если нет, то пустой массив
    tasksFromLS ? JSON.parse(tasksFromLS) : []
  );

  const [inputValue, setInputValue] = useState("");

  // ? Каждый раз, когда меняюися задачи, они добавляются в локальное хранилище
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (event) => { 
  // Отменить событие перезагрузки кнопки при нажатии
    event.preventDefault();
// *Если input пустой нечего не передавать, undefined
    if (inputValue.length === 0) return;
// *Создаём новый объект данных и настроек  для новых список  задач 
    const newTask = {
      id: new Date(),
      name: inputValue,
      completed: false,
    };
// *Функция добавляет новые объекты данных в объект tasks (мы сязали объект tasks и новые объекты данных newTasks)
// *Мы связали изначальные объекты данных с новомоми объекты данных для новых список задач
    setTasks([...tasks, ...[newTask]]);
// *Сделать input пустым поспе нажатие кнопки добавить
    setInputValue("");
  };
// *Функция для удаление задачи в списке
  const deleteTask = (id) => {
    const newTasks = tasks.filter((el) => el.id != id);
// *После изменения устанавливаем изменения чтобы JS понял что мы его изменили
    setTasks(newTasks);
// *После изменения всегда нужно устанавливать изменения в функцию изменения
  };
// *Функция что задача в списке поставить выполнена
  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const newTask = { ...task, completed: !task.completed };
        return newTask;
      } else {
        return task;
      }
    });
// Устанавливаем изменения
    setTasks(newTasks);
  };

  return (
    <Box>
      <div>
        <h1 className="text-5xl text-center text-white font-bold">Список ваших задач</h1>
        <form className="my-4 flex flex-col space-y-3" onSubmit={addTodo} >
          <input
            type="text"
            // Берем значение input когда что-то вводится
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            className="p-2 border border-slate-300 rounded-3xl py-4 text-2xl"
          />
          <button
            onClick={addTodo}
            className="bg-green-400 text-2xl px-4 py-2 rounded-3xl py-4 hover:bg-sky-500 active:bg-blue-600"
          >
            Добавить задачу в список
          </button>
        </form>
        <div className="space-y-2">
          {/* Делаем цыкл и берем у массива объекты данных, настроек и свойств, и передаём эти объекты данных по props
              чтобы  связать эти данные и настройки в html разметку*/}
          {tasks.map((task) => (
 /* 
 *Добавляем новые html теги списка 
*Всё что написано внутри компонентах, остаётся тем самым кодом, который был написан внутри его.
*Он (Развертовается) когда передаётся другому файлу компонента
*Этот компонент функция, которая возвращяет html разметку, плюс мы даём ему настройки свойство, которые хронятся в объекте данных
*/
            <ListItem
              onComplete={completeTask}
              onDelete={deleteTask}
              key={task.id}
              {...task}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ToDo;
