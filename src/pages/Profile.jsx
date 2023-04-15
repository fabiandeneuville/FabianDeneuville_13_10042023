import { isUserLogged, isTokenValid } from "../utils";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Profile(){

    const navigate = useNavigate();

    useEffect(() => {
        if(!isUserLogged() || !isTokenValid()){
            navigate('/sign-in')
        }
    });
    
    return (
        <main>

        </main>
    );
};

export default Profile;