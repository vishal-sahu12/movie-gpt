import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const gptSlice = createSlice(
    {
        name:"gpt",
        initialState:{
            toggleButton:false,
        },
        reducers:{
            gptSearchToggle:(state)=>{
                state.toggleButton = !state.toggleButton;
            }
        }
    }
);

export const{gptSearchToggle} =gptSlice.actions;

export default gptSlice.reducer;