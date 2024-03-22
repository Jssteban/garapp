import { Button } from "./Button";
export const Form = () => {
  let inputStyle = "border-1 border-black border rounded-full my-1 w-full h-10 pl-3";
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white p-12">
        <h1 className="mb-16  text-3xl font-montserrat">ACCEDER A TU CUENTA</h1>
        <form className="mb-4 w-72 flex flex-col justify-start  items-start">
          <label htmlFor="correo" className="capitalize">correo</label>
          <input  type="text" id="correo" className={inputStyle}/>
          <label htmlFor="password"  className="capitalize" >contraseña</label>
          <input type="text" id="password" className={inputStyle}/>
        </form>
        <div className="flex flex-col gap-4 w-72 justify-center">
          <Button variant={"Negro"}  texto={"Ingresar"} />
          <Button variant={"Negro"} texto={"Registrar"} />
        </div>
      </div>
    </>
  );
};
