import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import  useAuth  from './hooks/useAuth';
import './App.css';

// Import your components
import MainPageAdmin from './components/MainPages/MainPageAdmin.jsx';
import MainPageConsultant from './components/MainPages/MainPageConsultant.jsx';
import MainPageValidateur from './components/MainPages/MainPageValidateur.jsx';
import FullContentDashboardA from './components/Contents/FullContent/FullContentDashboards/FullContentDashboardA.jsx';
import FullContentDashboardC from './components/Contents/FullContent/FullContentDashboards/FullContentDashboardC.jsx';
import FullContentDashboardV from './components/Contents/FullContent/FullContentDashboards/FullContentDashboardV.jsx';
import FullContentListeV from './components/Contents/FullContent/FullContentListeV.jsx';
import FullContentListeC from './components/Contents/FullContent/FullContentListeC.jsx';
import FullContentContact from './components/Contents/FullContent/FullContentContact.jsx';
import FullContentAideA from './components/Contents/FullContent/FullContentAide/FullContentAideA.jsx';
import FullContentTimesheet from './components/Contents/FullContent/FullContentTimesheet.jsx';
import FullContentReport from './components/Contents/FullContent/FullContentReport.jsx';
import AddV from './components/Contents/ListeVContent/AddV.jsx';
import AddC from './components/Contents/ListeCContent/AddC.jsx';
import ModifyC from './components/Contents/ListeCContent/ModifyC.jsx';
import ModifyV from './components/Contents/ListeVContent/ModifyV.jsx';
import FullContentLogoutA from './components/Contents/FullContent/FullContentLogouts/FullContentLogoutA.jsx';
import FullContentLogoutC from './components/Contents/FullContent/FullContentLogouts/FullContentLogoutC.jsx';
import FullContentLogoutV from './components/Contents/FullContent/FullContentLogouts/FullContentLogoutV.jsx';
import WelcomeA from './components/Contents/FullContent/WelcomePage/WelcomeA.jsx';
import WelcomeC from './components/Contents/FullContent/WelcomePage/WelcomeC.jsx';
import WelcomeV from './components/Contents/FullContent/WelcomePage/WelcomeV.jsx';
import FullContentAideC from './components/Contents/FullContent/FullContentAide/FullContentAideC.jsx';
import FullContentAideV from './components/Contents/FullContent/FullContentAide/FullContentAideV.jsx';

const App = () => {
    const [validators, setValidators] = useState([]);
    const [isLogin, token, client] = useAuth();

    if (!isLogin) {
        return <div>Loading...</div>;
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/admin" replace />,
        },
        {
            path: '/login',
            element: <div>Redirecting to login...</div>,
        },
        {
            path: '/admin',
            element: <MainPageAdmin />,
            children: [
                {
                    path: '/admin/dashboard',
                    element: <FullContentDashboardA />,
                },
                {
                    path: '/admin',
                    element: <WelcomeA />,
                },
                {
                    path: '/admin/liste_validateur',
                    element: <FullContentListeV validators={validators} />,
                },
                {
                    path: '/admin/liste_validateur/ajouter_validateur',
                    element: <AddV setValidators={setValidators} />,
                },
                {
                    path: '/admin/liste_validateur/modifier_validateur/:id',
                    element: <ModifyV setValidators={setValidators} />,
                },
                {
                    path: '/admin/liste_consultant',
                    element: <FullContentListeC />,
                },
                {
                    path: '/admin/liste_consultant/ajouter_consultant',
                    element: <AddC />,
                },
                {
                    path: '/admin/liste_consultant/modifier_consultant/:id',
                    element: <ModifyC />,
                },
                {
                    path: '/admin/contact',
                    element: <FullContentContact />,
                },
                {
                    path: '/admin/aide',
                    element: <FullContentAideA />,
                },
                {
                    path: '/admin/logout',
                    element: <FullContentLogoutA />,
                },
            ],
        },
        {
            path: '/consultant',
            element: <MainPageConsultant />,
            children: [
                {
                    path: '/consultant/dashboard',
                    element: <FullContentDashboardC />,
                },
                {
                    path: '/consultant',
                    element: <WelcomeC />,
                },
                {
                    path: '/consultant/timesheet',
                    element: <FullContentTimesheet />,
                },
                {
                    path: '/consultant/contact',
                    element: <FullContentContact />,
                },
                {
                    path: '/consultant/aide',
                    element: <FullContentAideC />,
                },
                {
                    path: '/consultant/logout',
                    element: <FullContentLogoutC />,
                },
            ],
        },
        {
            path: '/validateur',
            element: <MainPageValidateur />,
            children: [
                {
                    path: '/validateur/reports',
                    element: <FullContentReport />,
                },
                {
                    path: '/validateur',
                    element: <WelcomeV />,
                },
                {
                    path: '/validateur/dashboard',
                    element: <FullContentDashboardV />,
                },
                {
                    path: '/validateur/contact',
                    element: <FullContentContact />,
                },
                {
                    path: '/validateur/aide',
                    element: <FullContentAideV />,
                },
                {
                    path: '/validateur/logout',
                    element: <FullContentLogoutV />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;













