export const Container = ({img,form}:any) =>{
    return(
        <>
         <div className="flex w-full">
            <div className="bg-[#FA3D3B] w-6/12 h-auto border-1 border-black">
                {img}
            </div>
            <div className="bg-white  w-6/12 h-auto border-1  border-black">
                {form}
            </div>
         </div>
        </>
    )
}