import {Routes, Route} from 'react-router-dom';
import Main from './component/main';
import AddTodo from './component/addTodo';

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add" element={<AddTodo />} />
        </Routes>
    )
}

export default Router;