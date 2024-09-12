export default function ListsHTML({completedTask, removeTask, id, name, compelted, }){
    return(
     <div>
        <div style={{background: compelted ? "black": null}}>
            {name}
        </div>
        <div><button onClick={()=>{completedTask(id)}}>Done</button></div>
        <div><button onClick={()=>{ removeTask(id)}}>Remove</button></div>
     </div>
    )
}