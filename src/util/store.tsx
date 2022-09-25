import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('todo'));

let todo = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        remove(state, idx){
            let copy =  state.filter((item, index) => {
                return index != idx.payload;
            })
            localStorage.setItem('todo', JSON.stringify(copy));
            return copy;
        }
    }
})

export let {remove} = todo.actions;

export default configureStore({
  reducer: { 
    todo : todo.reducer
  }
});