
import { useState } from "react"

function Counter(){
    // * Создаёт значение и функцию которая меняет это значение, useState изменяет все типы данных
    const [value, setValue] = useState(0)
// * Функция для увиличение счётчика
    const inc = () =>{
        setValue(value + 1)
    }
    // * Функция для уменьшения счётчика
    const dec = ()=>{
        setValue(value -1)
    }

    const incTen = () =>{
        setValue(value + 10)
    }

    const decTen = ()=>{
        setValue(value -10)
    }
    return(
        <div className="counter">
            {/* {Чтобы отображать код в разметке используем фигурные скобки} */}
      <h1>{value}</h1>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>

        <button onClick={incTen}>+10</button>
        <button onClick={decTen}>-10</button>
      </div>
        </div>
    )

}

export default Counter;