import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const gptSlice = createSlice(
    {
        name:"gpt",
        initialState:{
            toggleButton:false,
            language:"en",
        },
        reducers:{
            gptSearchToggle:(state)=>{
                state.toggleButton = !state.toggleButton;
            },
            selectlanguage:(state,action) =>{
                state.language=action.payload;
            }
        }
    }
);

export const{gptSearchToggle,selectlanguage} =gptSlice.actions;

export default gptSlice.reducer;