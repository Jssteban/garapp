import { CardLogin } from "../components/CardLogin";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
export const Login = () =>{
    return(
        <>
         <Container form={<Form />} img={<CardLogin />} />
        </>
    )
}