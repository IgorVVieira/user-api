import React, { useState } from 'react';
import api from '../../services/api';

import Voltar from '../../components/Voltar';

import './styles.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, email, age,
        }

        if (age < 0 || age >= 101) {
            alert('Idade inválida!');
        }
        else {
            try {
                const response = await api.post('/users', data);
                alert(`Obrigado pelo cadastro: ${response.data.name}`);
            } catch (error) {
                alert('Erro ao cadastrar, tente novamente!');
            }
        }
    }

    return (
        <div className="form-user">
            <Voltar></Voltar>
            <h1>Cadastre um novo usuário</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nome" required value={name}
                    onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Email" required value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input type="number" placeholder="Idade" required value={age}
                    onChange={e => setAge(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Form;