import { Login } from "./pages/Login";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-color3 h-screen w-full overflow-hidden ">
       <Login/>
      </div>
    </>
  );
}

export default App;
