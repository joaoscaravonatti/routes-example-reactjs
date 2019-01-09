import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import BackButton from '../../components/Back-button';

class Repository extends Component{
    state = {
        repository: [],
    };

    async componentDidMount(){
        const { user, name } = this.props.match.params;
        try{
            const response = await api.get(`/repos/${user}/${name}`);
            this.setState({ repository: response.data });
        } catch(error){
            alert(error);
        }
    }

    render(){
        const { repository } = this.state;
        return (
            <div className='product-info'>
                <h1>{repository.name}</h1>
                <p>{repository.description}</p>
                <p>
                    URL: <a href={repository.html_url}>{repository.html_url}</a>
                </p>
                <BackButton />
            </div>
        );
    }
}

export default Repository;