import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('todo') || "");

let todo = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        remove(state, idx){
            let copy =  state.filter((item:any, index:any) => {
                return index != idx.payload;
            })
            localStorage.setItem('todo', JSON.stringify(copy));
            return copy;
        },
        addTodo(state, info){
          let todoInfo = info.payload;
          let item = {title : todoInfo.title, check : false, date : todoInfo.date};
          let copy = [...state];
          copy.push(item);
          localStorage.setItem('todo', JSON.stringify(copy));
          return copy;
        }
    }
})

export let {remove, addTodo} = todo.actions;

export default configureStore({
  reducer: { 
    todo : todo.reducer
  }
});