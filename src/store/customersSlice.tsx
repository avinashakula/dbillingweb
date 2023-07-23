import { createSlice } from "@reduxjs/toolkit";

const initialState: never[] = [];
const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        add(state:any, action){
            state.push(action.payload);
        },
        remove(state:any, action){
            return state.filter(item=>item.name !== action.payload)
        }   
    }
})


export const {add, remove} = customersSlice.actions;
export default customersSlice.reducer;