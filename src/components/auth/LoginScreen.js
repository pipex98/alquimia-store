import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link,
  } from "react-router-dom";
  
import styled from 'styled-components';
import { startLogin } from '../../actions/auth';
import { mobile } from '../../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), 
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    center;
    background-size: cover; 
    display: flex;
    justify-content:center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`

const StyledLink = styled(Link)`
    margin: 5px 0px;
    font-size: 12;
    text-decoration: underline;
    cursor: pointer;
    color: #000;
`

const Error = styled.span`
    color: red
`

export const LoginScreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin({ username, password }))
    }

    return (
        <Container>
            <Wrapper>
                <Title>INICIAR SESIÓN</Title>
                <Form>
                    <Input 
                        placeholder="usuario"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input 
                        placeholder="contraseña"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={ handleLogin } disabled={isFetching}>INGRESAR</Button>
                    { error && <Error>{ error }</Error>}
                    <StyledLink to="#">NO RECUERDAS LA CONTRASEÑA?</StyledLink>
                    <StyledLink to="/auth/register">
                        CREAR UNA NUEVA CUENTA
                    </StyledLink>
                </Form>
            </Wrapper>
        </Container>
    )
}
