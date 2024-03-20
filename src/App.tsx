import { Button } from "./components/Button"
import {Container} from "./components/Container"
import { Form } from "./components/Form"

function App() {
  return (
    <>
    <h1 className="bg-color2">Jhon Steban</h1>
    <Button texto={"Ingreso"}/>
    <Button texto={"Liquido"}/>
    <Button texto={"Llantas"}/>

    <Container form={<Form/>} />
    </>
  )
}

export default App
