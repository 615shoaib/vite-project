import { useContext, useState } from "react"
import { AppProvider } from "../Context Api/Api"
import Loading from "./Loading"



const Asa=()=>{
    const {data,setData}=useContext(AppProvider)
    const [state,setState]=useState(false);
    // console.log(state)
    const handleChange=(Lop)=>{
        // const number = data.filter((BC)=>{
        //     return BC.category !== Lop
        // })
        // setData(number)
        // console.log("clicked " , number)
        if(Lop){
            const u =[...data].filter((excu)=>{
                return excu.category == Lop
            })
            setData(u)
            console.log("Empty", u)
        }else{
            return <Loading />
        }
    }
    return(
        <>
        <button onClick={(button)=>handleChange("men's clothing")}>Click</button>
        <button onClick={()=>handleChange("jewelery")}>Click</button>
        <button onClick={()=>handleChange("electronics")}>Click</button>
        <button onClick={()=>handleChange("women's clothing")}>Click</button>


        </>
    )
}

export default Asa