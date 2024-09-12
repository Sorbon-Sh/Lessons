import Card from "./components/Card";
import Card2 from "./components/Card2";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <main>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {/* <Card
          title="Feature 1"
          text="Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Агентство выйти которой рыбного коварных журчит маленькая большого все силуэт, домах они снова составитель. Напоивший маленький ручеек эта lorem коварных."
        />
        <Card title="Card 2" text="Description 2" />
        <Card title="Card 3" text="Description 3" />
        <Card /> */}
        <Card2 title="Card 1" text="ajiwdioawdoiadw" />
        <Card2 title="Card 2" text="ajiwdioawdoiadw" />
        <Card2 title="Card 3" text="ajiwdioawdoiadw" />
        <Card2 />
        <ParentComponent>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
        </ParentComponent>
      </div>
    </main>
  );
}

export default App;
