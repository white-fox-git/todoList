import { configureStore, createSlice } from '@reduxjs/toolkit'


let item:any = localStorage.getItem('todo');

item == null ? item = [] : item = JSON.parse(item);
console.log(item);

let todo = createSlice({
    name : 'todo',
    initialState : item,
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
        },
        check(state, idx){
          state.forEach((item:any, index:any) => {
              if(index == idx.payload)
                item.check == false ? item.check = true : item.check = false;
          });
          localStorage.setItem('todo', JSON.stringify(state));
        }
    }
})

export let {remove, addTodo, check} = todo.actions;

export default configureStore({
  reducer: { 
    todo : todo.reducer
  }
});