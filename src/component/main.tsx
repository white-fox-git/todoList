/*
    Main 페이지입니다. 
*/

import { useState } from 'react';
import style from '../css/main.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Main = () => {

    const [todoList, setTodoList] = useState(
        [
            {title : "Type Script Study", check : false, date : '2022-09-30'},
            {title : "Java Script Study", check : true, date : '2022-09-30'}
        ]
    )

    return(
        <>
            <header className={style.header}>
                <h2 className={style.headerText}>My Todo List</h2>
            </header>
            <main className={style.main}>
                {
                    todoList.map((item, idx) => {
                        return(
                            <div className={style.todo} key={idx}>
                                <label htmlFor={item.title+idx}></label>
                                <input id={item.title+idx} type="checkbox"/>
                                <div className={style.todoInfo}>
                                    <h4>{item.title}</h4>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className={style.addTodo}>
                    <h4>Add Todo List</h4>
                </div>
            </main>
        </>
    )
}

export default Main;