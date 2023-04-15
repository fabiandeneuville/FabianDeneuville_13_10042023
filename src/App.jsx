import './style/main.scss';
import router from './router';
import { RouterProvider, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isUserLogged, isTokenValid, getToken } from "./utils";
import { getUserDataStarted } from './store/action';

// const App = () => <RouterProvider router={router} />

function App(){

    const dispatch = useDispatch();

    useEffect(() => {
        if(isUserLogged && isTokenValid){
            const token = getToken();
            dispatch(getUserDataStarted(token));
        }
    }, []);

    return (
        <RouterProvider router={router} />
    )
}

export default App;
