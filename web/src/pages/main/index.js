import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

class Main extends Component {

    state = {
        users: [],
    }

    async componentDidMount() {
        const resposnse = await api.get('/users');

        this.setState({
            users: resposnse.data,
        });
    }

    render() {
        const { users } = this.state;

        return (
            <main>
                <Link className="new-user" to={`/users`}>Cadastrar novo usuário</Link>

                <div className="users-list">
                    {users.map(users => (
                        <article key={users.id}>
                            <strong>{users.name}</strong>
                            <p>{users.email}</p>
                            <p>{users.age}</p>
                            <Link to={`users/${users.id}`}>Editar</Link>
                        </article>
                    ))}
                </div>
            </main>
        );
    }
}

export default Main;