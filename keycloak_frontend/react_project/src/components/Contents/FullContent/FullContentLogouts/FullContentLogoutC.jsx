import React from 'react';
import {BiCheck, BiExit, BiPlusCircle, BiWindowClose} from "react-icons/bi";

const FullContentLogoutC = () => {
    return(<div className="logout">
        <h2> Are you sure you want to logout ?</h2>
        <div className="btn--layer">
            <a href="" className="addbtn">
                <BiExit className="icon"/>
                Logout
            </a>
            <a href="/consultant" className="stopbtn">
                <BiWindowClose className="icon"/>
                Annuler
            </a>
        </div>
    </div>);
};
export default FullContentLogoutC;