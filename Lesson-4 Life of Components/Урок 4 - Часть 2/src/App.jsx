import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [userRole, setUserRole] = useState("guest");

  return (
    <main>
      <Header userRole={userRole} setRole={setUserRole} />
    </main>
  );
};

export default App;
