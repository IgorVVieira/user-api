import React, { Component } from 'react';
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
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.age}</p>
            </div>
        );
    }
}

export default User;

