import './style/main.scss';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isUserLogged, isTokenValid, getToken } from "./utils";
import { getUserDataStarted } from './store/action';

import Loader from './components/Loader';

function App(){

    const isRequestion = useSelector(state => state.isRequesting)
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(isUserLogged() && isTokenValid()){
            const token = getToken();
            dispatch(getUserDataStarted(token));
        }
    }, []);

    return (
        <div>
            {isRequestion &&
                <Loader/>
            }
            <RouterProvider router={router} />

        </div>
    )
}

export default App;
