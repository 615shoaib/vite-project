import { useContext, useState } from "react"
import { useEffect } from "react"
import { AppProvider } from "../Context Api/Api"
import axios from "axios"
import TableData from "./TableData"
import Loading from "./Loadings"






const Table = () => {
    const { data, setData, search, setSearch, loading, setLoading,setShow } = useContext(AppProvider)
    const API = "https://fakestoreapi.com/products"
    const getUser = () => {
          setLoading(false)
        const res = axios.get(API).then((res) => {
            try {
                console.log(res.data)
                setData(res.data)
                setShow(res.data)
            } catch (error) {
                console.log("error msg", error)
            }

        })
    }
    if (loading) {
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