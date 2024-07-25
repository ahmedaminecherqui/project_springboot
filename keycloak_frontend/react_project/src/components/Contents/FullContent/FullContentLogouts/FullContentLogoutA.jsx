import React from 'react';
import {BiCheck, BiExit, BiPlusCircle, BiWindowClose} from "react-icons/bi";
import {useKeycloak} from "@react-keycloak/web";


const FullContentLogoutA = () => {
    const {keycloak} = useKeycloak();

    const logout=() =>{
        keycloak.logout();

    }


    return(<div className="logout">
        <h2> Are you sure you want to logout ?</h2>
        <div className="btn--layer">
            <a onclick={logout} href="" className="addbtn">
                <BiExit className="icon"/>
                Logout
            </a>
            <a href="/admin" className="stopbtn">
                <BiWindowClose className="icon"/>
                Annuler
            </a>
        </div>
    </div>);
};
export default FullContentLogoutA;