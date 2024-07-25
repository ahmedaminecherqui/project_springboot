import React from 'react';
import "../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../styles/content.css"
import ContentHeaderListeV from "../ContentHeaders/ContentHeaderListeV.jsx";
import ContentHeaderListeC from "../ContentHeaders/ContentHeaderListeC.jsx";
import MainPageListeC from "../ListeCContent/MainPageListeC.jsx";
import MainPageListeV from "../ListeVContent/MainPageListeV.jsx";
import AddC from "../ListeCContent/AddC.jsx";
import ModifyC from "../ListeCContent/ModifyC.jsx";


const FullContentListeC = () => {
    return(
        <div>
            <div>
                <ContentHeaderListeC/>
            </div>

            <MainPageListeC/>


        </div>
    );
};
export default FullContentListeC;