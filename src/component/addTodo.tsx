import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import style from '../css/addTodo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {addTodo} from '../util/store';
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [todo, setTodo] = useState<string | number | readonly string[] | undefined>('');
    const [date, setDate] = useState<string>();

    return(
        <>
            <header className={style.header}>
                <h2 className={style.headerText}>My Todo List</h2>
                <FontAwesomeIcon icon={faArrowLeft} className={style.headerIcon} onClick={() => {navigate('/')}}/>
            </header>
            <main className={style.main}>
                <div className={style.addBox}>
                    <p className={style.inputTitle}>Todo</p>
                    <input type="text" value={todo} className={style.todo} onChange={(e) => setTodo(e.target.value)}/>
                    <p className={style.inputTitle} >Date</p>
                    <input type="date" className={style.date} onChange={(e) => {setDate(e.target.value)}}/>
                    <button className={style.submit} onClick={() => {
                        if(todo != '' && date != null){
                            dispatch(addTodo({title : todo, date : date}));
                            navigate('/');
                        }
                        else
                        {
                            alert('입력값이 잘못 되었습니다');
                        }
                    }}>Submit</button>
                </div>
            </main>
        </>
    )
}

export default AddTodo;