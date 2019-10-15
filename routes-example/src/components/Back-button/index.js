import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function BackButton() {
    return (
        <div className='back'>
            <Link to='/'>Voltar</Link>
        </div>
    );
}
