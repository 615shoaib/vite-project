import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useState, useContext, useEffect } from "react";
import { AppProvider } from "../Context Api/Api";

const Option = () => {
    const { data, setData, sorting, setSorting,show } = useContext(AppProvider)

    const handleChange = (event) => {
        setSorting(event.target.value);
    };
    // option functions


    const handleClick = () => {
        const numDescending = [...data].sort((a, b) => b.price - a.price);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }
    const handleLow = () => {
        const numDescending = [...data].sort((a, b) => a.price - b.price);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }
    const handleTitleatoz = () => {
        const numDescending = [...data].sort((a, b) => a.title > b.title ? 1 : -1);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }
    const handletitleztoa = () => {
        const numDescending = [...data].sort((a, b) => a.title < b.title ? 1 : -1);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }


    // filter funcations

    const handleFilter = (items) => {
        const result = show.filter((value) => value.category == items)
        setData(result)
    }

  return (
        <>
            <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">---Select---</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sorting}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value='Sort by high' onClick={() => handleClick("price")}>Sort by  High (price)</MenuItem>
                    <MenuItem value="sort by low" onClick={handleLow}>Sort by  low (price)</MenuItem>
                    <MenuItem value="sort by title A-z" onClick={handleTitleatoz}>Sort  by title A to z</MenuItem>
                    <MenuItem value="sort by title z-A" onClick={handletitleztoa} >Sort by  title Z to A</MenuItem>
                    <MenuItem value="sort by mens" onClick={() =>  handleFilter("men's clothing")}>Sort by Mens  category</MenuItem>
                    <MenuItem value="sort by women" onClick={() => handleFilter("women's clothing")}>Sort by Women category</MenuItem>
                    <MenuItem value="sort by electronics" onClick={() => handleFilter("electronics")}>Sort by electronics category</MenuItem>
                    <MenuItem value="sort by jewelery" onClick={() => handleFilter("jewelery")}>Sort by jewelery category</MenuItem>

                </Select>
            </FormControl>

        </>
    )
}


export default Option;