import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { startRegister } from '../../actions/auth'
import { mobile } from '../../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), 
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') 
    center;
    background-size: cover; 
    display: flex;
    justify-content:center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if ( password !== confirmPassword ) {
            return console.log('Las contraseñas no son iguales');
        }

        dispatch( startRegister( {name, lastname, username, email, password} ) )
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREAR UNA CUENTA</Title>
                <Form>
                    <Input 
                        placeholder="nombre"
                        type="text"
                        onChange={ (e) => setName(e.target.value) }
                    />
                    <Input 
                        placeholder="apellido"
                        type="text"
                        onChange={ (e) => setLastname(e.target.value) }
                    />
                    <Input 
                        placeholder="usuario"
                        type="text"
                        onChange={ (e) => setUsername(e.target.value) }
                    />
                    <Input 
                        placeholder="correo electronico"
                        type="email"
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <Input 
                        placeholder="contraseña"
                        type="password"
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                    <Input 
                        placeholder="confirmar contraseña"
                        type="password"
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                    <Agreement>
                        Al crear una cuenta, doy mi consentimiento para el procesamiento de mi
                        datos de acuerdo con la <b> POLÍTICA DE PRIVACIDAD </b>
                    </Agreement>
                    <Button onClick={ handleRegister }>CREAR</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
