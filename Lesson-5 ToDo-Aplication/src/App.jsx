import ToDo from "./components/ToDo";

const App = () => {
  return (
    <main
     className="h-screen  grid place-items-center bg-[url('./components/2148415056.jpg')]"
     style={{
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    >
      <ToDo />
    </main>
  );
};

export default App;
