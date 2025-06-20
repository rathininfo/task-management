
import { Outlet } from 'react-router-dom';
import TodoForm from '../Component/TodoForm';

const MainLayout = () => {
    return (
        <div className=''>
            <TodoForm></TodoForm>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;