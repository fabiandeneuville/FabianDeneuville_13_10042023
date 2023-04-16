import {Outlet} from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isUserLogged, isTokenValid, getToken } from "../utils";
import { getUserDataStarted } from '../store/action';

import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function Layout(){

    const isRequestion = useSelector(state => state.isRequesting)
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(isUserLogged() && isTokenValid()){
            const token = getToken();
            dispatch(getUserDataStarted(token));
        }
    }, []);

    return (
        <div className="layout">
            {isRequestion &&
                <Loader/>
            }
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;