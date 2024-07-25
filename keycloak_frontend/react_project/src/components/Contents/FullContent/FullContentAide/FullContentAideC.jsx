import React from 'react';

const FullContentAideC = () => {
    return(<div className="aide">
        <p>Bienvenue sur la page des consultants. Voici un guide pour vous aider à naviguer à travers les différentes
            fonctionnalités de cette page.</p>

        <h2>Menu Latéral</h2>
        <ul>
            <li><strong>Dashboard:</strong> Cliquez sur Dashboard pour accéder à une page qui présente des
                statistiques et des représentations visuelles des données.
            </li>
            <li><strong>Timesheet:</strong> Dans cette section, vous pouvez créer, modifier, supprimer et soumettre des
                feuilles de temps. Cela permet de suivre le temps de travail des consultants.
            </li>
            <li><strong>Contact:</strong> Accédez à cette page pour trouver des informations de contact afin de
                communiquer avec les développeurs du site web.
            </li>
            <li><strong>Aide:</strong> Cette page (où vous êtes actuellement) fournit des instructions détaillées sur la
                navigation et l utilisation des différentes sections du site web.
            </li>
        </ul>

        <h2>Fonctionnalités Principales</h2>
        <ul>
            <li><strong>Créer un Timesheet:</strong> Cliquez sur Timesheet dans le menu latéral, puis sélectionnez
                Add row(ajouter une ligne) pour commencer une nouvelle feuille de temps et inserer de nouveaux lignes.
            </li>
            <li><strong>Modifier un Timesheet:</strong> Sélectionnez un timesheet existant dans la liste et cliquez sur
                Modifier pour apporter des changements.
            </li>
            <li><strong>Supprimer un Timesheet:</strong> Sélectionnez le timesheet que vous souhaitez supprimer et
                cliquez sur Supprimer.
            </li>
            <li><strong>Soumettre un Timesheet:</strong> Après avoir complété ou modifié une feuille de temps, cliquez
                sur Submit pour le soumettre et  l envoyer pour approbation.
            </li>
        </ul>

        <h2>Contact et Support</h2>
        <p>Si vous avez des questions ou avez besoin d assistance, accédez à la section Contact pour trouver les
            informations nécessaires pour contacter les développeurs du site web.</p>
    </div>);
};

export default FullContentAideC;