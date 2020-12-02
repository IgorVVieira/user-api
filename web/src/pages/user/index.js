import React, { Component } from 'react';

import Voltar from '../../components/Voltar';
import api from '../../services/api';

import './styles.css';

class User extends Component {
    state = {
        user: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = api.get(`/users/${id}`);
        this.setState({ user: (await response).data });
    }

    render() {
        const { user } = this.state;

        return (
            <div className="user-info">
                <Voltar></Voltar>
                <h1>Nome: {user.name}</h1>
                <p>Email: {user.email}</p>
                <p>Idade: {user.age}</p>
            </div>
        );
    }
}

export default User;

