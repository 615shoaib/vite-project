import { useContext } from "react"
import { useEffect } from "react"
import { AppProvider } from "../Context Api/Api"
import axios from "axios"
import TableData from "./TableData"
import Loading from "./loading"




const Table = () => {
    const { data, setData, search, setSearch, loading, setLoading } = useContext(AppProvider)
    const API = "https://fakestoreapi.com/products"
    const getUser = () => {
        const res = axios.get(API).then((res) => {
            setLoading(false)
            try {
                // console.log(res.data)
                setData(res.data)
            } catch (error) {
                console.log("error msg", error)
            }

        })
    }
    if(loading){
        return <Loading />
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
        <TableData /> 
        
       
           
        </>
    )

}

export default Table