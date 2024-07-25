import React from 'react';
import "../../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../../styles/content.css"
import ContentHeaderListeV from "../../ContentHeaders/ContentHeaderListeV.jsx";
import ContentHeaderAide from "../../ContentHeaders/ContentHeaderAide.jsx";

const FullContentAideA = () => {
    return(
        <div>
            <div>
                <ContentHeaderAide/>
            </div>
            <div className="aide">


                <h2>Menu de Navigation</h2>
                <ul>
                    <li>
                        <strong>Dashboard :</strong>
                        <p>En cliquant sur Dashboard dans le menu latéral, vous accédez à une page affichant des
                            statistiques et des représentations visuelles de données importantes. Cette section vous
                            permet d avoir un aperçu rapide de l état actuel des projets et des performances de
                            l équipe.</p>
                    </li>
                    <li>
                        <strong>Liste validateur :</strong>
                        <p>La section Liste validateur vous dirige vers une page où vous pouvez gérer les validateurs.
                            Vous pouvez ajouter de nouveaux validateurs ou modifier les informations existantes. De
                            plus, cette page permet d assigner différents consultants à chaque validateur, facilitant
                            ainsi la gestion des responsabilités.</p>
                    </li>
                    <li>
                        <strong>Liste consultant :</strong>
                        <p>En cliquant sur Liste consultant, vous accédez à une page similaire à celle des
                            validateurs, mais dédiée aux consultants. Vous pouvez ajouter de nouveaux consultants,
                            modifier les informations existantes, et voir quel validateur est associé à chaque
                            consultant. Cela permet de suivre facilement les attributions de chaque consultant.</p>
                    </li>
                    <li>
                        <strong>Contact :</strong>
                        <p>La section Contact vous redirige vers une page contenant toutes les informations
                            nécessaires pour contacter les développeurs du site ou le support technique. Vous y
                            trouverez des adresses email, des numéros de téléphone, et d autres informations utiles pour
                            obtenir de l aide ou des réponses à vos questions.</p>
                    </li>
                </ul>

                <h2>Utilisation Générale</h2>
                <ul>
                    <li>
                        <strong>Ajouter un nouvel utilisateur :</strong>
                        <p>Pour ajouter un nouvel utilisateur (consultant ou validateur), cliquez sur le bouton
                            Ajouter dans la section correspondante. Remplissez le formulaire avec les informations
                            nécessaires et cliquez sur Ajouter.</p>
                    </li>
                    <li>
                        <strong>Modifier un utilisateur :</strong>
                        <p>Pour modifier un utilisateur existant, cliquez sur son id dans la liste affichée à côté de son nom.
                            Mettez à jour les informations dans le formulaire qui apparaît, puis cliquez sur
                            modifier pour sauvegarder les changements.</p>
                    </li>
                    <li>
                        <strong>Visualiser les données :</strong>
                        <p>Dans la section Dashboard, utilisez les filtres et les options de tri pour personnaliser les
                            données affichées. Vous pouvez également cliquer sur les différents graphiques pour obtenir
                            plus de détails sur une statistique particulière.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default FullContentAideA;