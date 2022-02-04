import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cars:["Model S","Model 3","Model X",'Model Y']
}

let CarSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCars = state =>state.car.cars//It is mapping directly to the initial state array

export default CarSlice.reducer