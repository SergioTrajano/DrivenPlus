import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

import UserContext from "../context/UserContext";

import Logo from "../assets/Driven_white 1.png";

function Login() {

    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        const user = {
            email,
            password
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", user);
        promise.then((response) => redirect(response.data));
        promise.catch(() => alert("Você não possui conta. Que tal se cadastrar?"));
    }

    function redirect(data) {
        setUser(data);
        if (data.membership) navigate("/home");
        else navigate("/subscriptions");
    }

    return (
        <Container>
            <img src={Logo} alt="Logo" />
            <form onSubmit={submit}>
                <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/sign-up">
                Não possuí uma conta? Cadastre-se
            </Link>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0E0E13;
    padding: 20.1vh 3.8vw 21.9vh 3.8vw;
    font-family: 'Roboto', sans-serif;
    font-size: 2.1vh;
    line-height: 2.4vh;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 7vh;
        margin-bottom: 15vh; 
    }

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