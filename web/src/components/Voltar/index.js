import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

const Voltar = () => {
    return (
        <Link className="voltar" to={'/'}>Voltar</Link>
    );
}

export default Voltar;