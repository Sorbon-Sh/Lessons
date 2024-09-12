import { useState } from "react";
import FnTodo from "./Components/FnTodo"
const App = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <main className="">
   
     <FnTodo />
    </main>
  );
};

export default App;
