/*
    Main 페이지입니다. 
*/

import { useState } from 'react';
import style from '../css/main.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import {remove} from '../util/store';
import {useNavigate} from 'react-router-dom';

const Main = () => {

    let todoList:[] = useSelector((state:any) => state.todo);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    return(
        <>
            <header className={style.header}>
                <h2 className={style.headerText}>My Todo List</h2>
            </header>
            <main className={style.main}>
                {
                    todoList != null ? todoList.map((item:any, idx:any) => {
                        return(
                            <div className={style.todo} key={idx}>
                                <label htmlFor={item.title+idx} className={item.check == true ? style.checkOn : style.checkOff}/>
                                <input id={item.title+idx} type="checkbox" className={style.hidden}/>
                                <div className={style.todoInfo}>
                                    <h4 className={item.check == true ? style.checkTodo : ''}>{item.title}</h4>
                                    <p>{item.date}</p>
                                </div>
                                <FontAwesomeIcon icon={faTrashCan} className={style.trashCan} onClick={() => {dispatch(remove(idx))}}/>
                            </div>
                        )
                    })
                    :
                    null
                }
                <div className={style.addTodo} onClick={() => {navigate('/add')}}>
                    <h4>Add Todo List</h4>
                </div>
            </main>
        </>
    )
}

export default Main;