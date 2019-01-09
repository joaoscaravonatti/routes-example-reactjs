import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        repositories: [],
        user: 'manfe',
    };

    componentDidMount(){
        this.loadRepositories();
    }

    loadRepositories = async () => {
        try {
            const response = await api.get(`/users/${this.state.user}/repos`);    
            this.setState({ repositories: response.data });
        } catch (error) {
            alert(error);
        }
    }

    render (){
        const { repositories, user } = this.state;

        return (
            <div className='product-list'>
                {repositories.map(repository => (
                    <article key={repository.id}>
                        <strong>{repository.name}</strong>
                        <Link to={`/repository/${user}/${repository.name}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        )
    }
}