import { useEffect } from "react";
import { useState } from "react";
// import FetchComponent from "./FetchComponent";

const App = () => {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch("https://jsonplaceholder.org/users")
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.log("Error Loading"))
    .finally(() => console.log("Loading is Done!"))
  },[])

console.log(users)
  return (
    <main>
      {/* <Suspense fallback={<>Loading</>}> */}
      {/* <FetchComponent /> */}
      {/* </Suspense> */}
      
      {users ? users.map((elem) =>(
        <p className="grid text-center p-5 bg-green-400 my-3" key={elem.id}>{elem.firstname}</p>
      )): "loading..."}
    </main>
  );
};

export default App;
