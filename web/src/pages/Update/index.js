import React, { Component } from 'react';

import api from '../../services/api';
import Voltar from '../../components/Voltar';

import './styles.css';

class Update extends Component {

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
            <div className="form-user">
                <Voltar></Voltar>
                <h1>Edite o Usuário <strong>{user.name}</strong></h1>
                <form >
                    <input type="text" placeholder="Nome" required value={user.name} />
                    <input type="email" placeholder="Email" required value={user.email} />
                    <input type="number" placeholder="Idade" required value={user.age} />

                    <button type="submit">Editar</button>
                </form>
            </div>
        );
    }
}

export default Update;