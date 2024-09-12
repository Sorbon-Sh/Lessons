import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="h-screen grid place-items-center">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1 className="text-3xl">Добро пожаловать</h1>
          <button
            onClick={() => setShowModal(false)}
            className="bg-indigo-700 text-white rounded-xl w-full py-2 hover:bg-indigo-500 active:bg-indigo-900 mt-4"
          >
            Close
          </button>
        </Modal>
      )}
      <LoginForm setOpen={() => setShowModal(true)} />
    </main>
  );
};

export default App;
