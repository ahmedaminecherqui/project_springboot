import React from 'react';
import PropTypes from 'prop-types';
import ContentHeaderListeV from '../ContentHeaders/ContentHeaderListeV.jsx';
import MainPageListeV from '../ListeVContent/MainPageListeV.jsx';
import '../../../styles/content.css';

const FullContentListeV = ({ validators }) => {
    return (
        <div>
            <div>
                <ContentHeaderListeV />
            </div>
            <MainPageListeV validators={validators} />
        </div>
    );
};

FullContentListeV.propTypes = {
    validators: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nom: PropTypes.string.isRequired,
            tel: PropTypes.string.isRequired,
            consultants: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FullContentListeV;


