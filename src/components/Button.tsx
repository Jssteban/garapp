 interface Prop {
    texto: String
    variant: String
 }
 export const Button = (props:Prop) =>{

    let buttonClass = "py-[2px] px-[8px]  border-2 rounded-full h-10";
    switch(props.variant){
        case 'Negro':
        buttonClass += " bg-black text-white border-white";
        break;

        case 'Blanco':
        buttonClass += " bg-white text-black border-black";
        break;

        default:
        buttonClass += " bg-white text-black"
    }

    return(

        <>
        <button className={buttonClass}>
            {props.texto}

        </button>
        </>
    )
}