import React from 'react';
import {BiCheck, BiExit, BiPlusCircle, BiWindowClose} from "react-icons/bi";

const FullContentLogoutV = () => {
    return(<div className="logout">
        <h2> Are you sure you want to logout ?</h2>
        <div className="btn--layer">
            <a href="" className="addbtn">
                <BiExit className="icon"/>
                Logout
            </a>
            <a href="/validateur" className="stopbtn">
                <BiWindowClose className="icon"/>
                Annuler
            </a>
        </div>
    </div>);
};
export default FullContentLogoutV;