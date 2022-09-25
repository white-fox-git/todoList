/*
    Main 페이지입니다. 
*/

import { useState } from 'react';
import style from '../css/main.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
                                <label htmlFor={item.title+idx} className={item.check == true ? style.checkOn : style.checkOff}/>
                                <input id={item.title+idx} type="checkbox" className={style.hidden}/>
                                <div className={style.todoInfo}>
                                    <h4 className={item.check == true ? style.checkTodo : ''}>{item.title}</h4>
                                    <p>{item.date}</p>
                                </div>
                                <FontAwesomeIcon icon={faTrashCan} className={style.trashCan}/>
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