
import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
      render:[
        {
            id: nanoid(),
            data:'_default_'
        }
      ],
}
export const slice=createSlice({
    name:'rendered',
    initialState,
    reducers:{
        addRender:(state,action)=>{
           const rendered={
            id:nanoid(),
            data:action.payload,
           
           }
           state.render=rendered;
        }
       ,
        removeRender : (state , action) =>{
            return state.render.filter((item)=> item.id !== action.payload )
        }
   
    }
})
export const{addRender,removeRender}=slice.actions
export default slice.reducer