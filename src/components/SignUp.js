import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


function SignUp() {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");

    function submit(e) {
        e.preventDefault();
        const user = {
            email,
            name,
            cpf,
            password
        };
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", user);
        promise.then(() => navigate("/"));
        promise.catch(() => alert("Houve um erro no servidor! Tente novamente."));
    }

    return (
        <Container>
            <form onSubmit={submit}>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                    required
                />
                <input 
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="CPF"
                    required
                />
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required
                />
                <input 
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                />
                <button type="submit">CADASTRAR</button>
            </form>
            <Link to="/">
                Já possuí uma conta? Entre
            </Link>
        </Container>
        
    )
}

export default SignUp;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0E0E13;
    padding: 22vh 3.8vw;
    font-family: 'Roboto', sans-serif;
    font-size: 2.1vh;
    line-height: 2.4vh;
    box-sizing: border-box;

    form {
        box-sizing: border-box;
    }

    input {
        width: 100%;
        height: 7.8vh;
        background-color: #FFFFFF;
        padding-left: 3.73vw;
        margin-bottom: 2.4vh;
        box-sizing: border-box;
        border-radius: 8px;

        &::placeholder {
            color: #7E7E7E;
        }
    }

    button {
        margin-top: 2.1vh;
        margin-bottom: 3.6vh;
        background-color: #FF4791;
        border: none;
        color:#FFFFFF;
        font-weight: bold;
        width: 100%;
        height: 7.8vh;
        border-radius: 8px;
    }

    a {
        color: #FFFFFF;
        text-decoration-color: #FFFFFF;

        &:hover {
            filter: brightness(0.8);
        }
    }
`