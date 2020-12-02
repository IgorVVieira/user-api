import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

class Main extends Component {

    state = {
        users: [],
    }

    async componentDidMount() {
        const response = await api.get('/users');

        this.setState({
            users: response.data,
        });
    }

    async deleteUser(id) {
        await api.delete(`/users/${id}`);
    }

    render() {
        const { users } = this.state;

        return (
            <main>
                <Link className="new-user" to={`/users`}>Cadastrar novo usuário</Link>

                <div className="users-list">
                    {users.map(users => (
                        <article key={users.id}>
                            <strong>Nome: {users.name}</strong>
                            <p>Email: {users.email}</p>
                            <p>Idade: {users.age}</p>
                            <Link to={`user/${users.id}`}>Editar</Link>
                            <Link onClick={async () => {
                                await api.delete(`/users/${users.id}`)
                            }} to="/">Deletar usuário</Link>
                        </article>
                    ))}
                </div>
            </main>
        );
    }
}

export default Main;