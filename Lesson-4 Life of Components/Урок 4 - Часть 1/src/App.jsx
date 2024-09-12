import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <button
        className="px-4 py-2 bg-indigo-200 rounded-lg hover:bg-indigo-300"
        onClick={handleClick}
      >
        Show
      </button>
      {/* {show ? (
        <div className="bg-red-300 p-2 rounded-md">
          <h1>Hello</h1>
        </div>
      ) : null} */}
      {show && (
        <div className="bg-red-300 p-2 rounded-md">
          <h1>Hello</h1>
        </div>
      )}
    </main>
  );
};

export default App;
