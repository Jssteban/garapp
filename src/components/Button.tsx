 interface Prop {
    texto: String
 }
 export const Button = (props:Prop) =>{
    return(
        <>
        <button className="bg-white py-[2px] px-[8px] font-black border-2 border-black rounded-full h-10">
            {props.texto}
        </button>
        </>
    )
}