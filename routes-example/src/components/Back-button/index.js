import React, { Component } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

class BackButton extends Component{
    render(){
        return (
            <div className='back'>
                <Link to='/'>Voltar</Link>
            </div>
        );
    }
}

export default BackButton;