import React from 'react';
import {
    BiSearch,
    BiNotification,
} from "react-icons/bi";

const ContentHeaderDashboard= () => {
    return (<div className="content--header">
        <h1 className="header--title">
            DASHBOARD
        </h1>
        <div className="header--activity">
            <div className="searchbox">
               <input type="text" placeholder="Chercher"/>
                <BiSearch className="icon" />
            </div>
            <div className="notify">
                <BiNotification className="icon" />
            </div>
        </div>
    </div>);
};

export default ContentHeaderDashboard;