
export default function GetUsers({users, error, loading, deleteUser, updateUser}){
    return(
        <>
        
        <section className="section__GetUser__and__DeleteUser__and__UpdateUser">
        {/* Загрузка */}
        {loading && "Loading..."}

{/* Если в users что-то есть (пришли данные с запроса) тогда итерировать  выводим пользователей*/}
  {users && users.map((user)=>(
    <li key={user.id} className="bg-orange-400 p-5 text-center my-4 text-2xl">
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
      {/* При клике функция deleteUser запускается  передает id в наш Кастоный Хук */}
      <button className="p-3 bg-red-500 text-2xl" onClick={()=>{deleteUser(user.id)}}>Delete</button>
      <button className="p-3 bg-orange-400 text-2xl" onClick={() =>{updateUser(user.id)}}>Изменить</button>
    </li>
   ))}
 
 {/* В случии ошибки выводим текст */}
<h1>{error && "Опаньки!"}</h1>
   </section>
   
        </>
    )
}