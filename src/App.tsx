import { CardLogin } from "./components/CardLogin";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-color3 h-screen w-full overflow-hidden ">
        <Container form={<Form />} img={<CardLogin />} />
      </div>
    </>
  );
}

export default App;
