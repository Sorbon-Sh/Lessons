import { useState, useEffect } from "react";
import ListsHTML from "./ListsHTML";


export default function FnTodo(){

    const [tasks, setTasks] = useState([])

    const [inputValue, setInputValue] = useState("")

//=============================================================== БЛОК-1   
    const addTodo = (event) =>{
        event.preventDefault();
        const newList = [{
            id: new Date(),
            name: inputValue,
            completed: false
        }]
//   *Мы связали tasks своими данными и новоми данноми списка
        setTasks([...tasks, ...newList])

//  *После нажатие кнопки очищяется поля ввода
        setInputValue("")
    }
//================================================================


// ==============================================================  БЛОК-2
   const deleteTask = (id) =>{
    const removeTasks = tasks.filter((elem) => elem.id != id)

    setTasks(removeTasks)
   }
//================================================================



// ====================================================================================  БЛОК-3
   const completeTask = (id) =>{

        const taskComplete = tasks.map((task)=>{
            if(task.id === id){
                // Изменяем данные ключа completed
                const completeTask = {...task, completed: !task.completed}
                // Возвращяем изменение данных
                return completeTask   
            }
            else{
                return task
            }
        })
    //  Устанавливаем зименения
        setTasks(taskComplete)
    }
// ======================================================================================
    return(
        <div>


 {/* =================================================================================================================================  Блок-4 */}
   {/* Берём данные HTML тегов и (их значение, в данный случии мы берём данные из тега input) добавляем в объекты данных*/}
      <h1>Список задач</h1>
      
      <form onSubmit={addTodo}>
        <input type="text" onChange={(event)=>{setInputValue(event.target.value)}} value={inputValue} className="bg-slate-700"/>
        <button onClick={addTodo}>Добавить задачу в список</button>
      </form>
{/* =================================================================================================================================== */}
      {  



// ===================================================================================  БЛОК-5
    // *Сдесь будем создавать HTML разметку списка 
    // !Всегда нужно возвращать результать функции если хотите вывести результать 
    // !ИЗ САМОЙ ФУНКЦИИ ИЛИ ИЗ ДРУГОЙ ФУНКЦИИ  КОТОРАЯ ТОЖЕ ВОЗВРАЩАЕТ РЕЗУЛЬТАТЫ
    // *Также берём данные которые добавили в объекты данных
      tasks.map((elem)=>{
     return   <ListsHTML 
        key={elem.id}
        {...elem}
        completedTask={completeTask}
        removeTask={deleteTask}
        />
})
// ======================================================================================
      }
</div>
    )
}