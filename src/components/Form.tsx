import { Button } from "./Button";
export const Form = () => {
  let inputStyle = "border-1 border-black border rounded-full my-1 w-full h-10";
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-16 mt-3 text-4xl">ACCEDER A TU CUENTA</h1>
        <form className="mb-4 w-72 flex flex-col justify-start  items-start">
          <label htmlFor="correo">correo</label>
          <input type="text" id="correo" className={inputStyle}/>
          <label htmlFor="password">contraseña</label>
          <input type="text" id="password" className={inputStyle}/>
        </form>
        <div className="flex flex-col gap-4 w-72 justify-center">
          <Button texto={"Ingresar"} />
          <Button texto={"Registrar"} />
        </div>
      </div>
    </>
  );
};
