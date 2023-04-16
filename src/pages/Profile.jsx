import { isUserLogged, isTokenValid } from "../utils";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { balances } from "../mockedDatas/balances";

import UserGreeting from "../components/UserGreeting";
import ProfileUpdateForm from "../components/ProfileUpdateForm";
import BalanceCard from "../components/BalanceCard";

function Profile(){

    const user = useSelector(state => state.user)

    const navigate = useNavigate();

    useEffect(() => {
        if(!isUserLogged() || !isTokenValid()){
            navigate('/');
        }
    });

    return (
        <main className="main bg-dark">

            {user &&
                <div>
                    <UserGreeting
                    firstName={user.firstName}
                    lastName={user.lastName}
                    />
                    <ProfileUpdateForm
                    firstName={user.firstName}
                    lastName={user.lastName}
                    />
                    <div className="balances__container">
                        {balances.map((item, index) => {
                            return (
                                <BalanceCard
                                key={index}
                                account={item.account}
                                balance={item.balance}
                                />
                            )
                        })}
                    </div>
                </div>
            }
        </main>
    );
};

export default Profile;