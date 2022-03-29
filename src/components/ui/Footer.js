import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import { mobile } from '../../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${ props => props.color };
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ALQUIMIA.</Logo>
                <Desc>
                    Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, 
                    pero la mayoría han sufrido alteración de alguna forma, por inyección
                    humor o palabras aleatorias que no parecen ni un poco creíbles.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Enlaces útiles</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Moda Masculina</ListItem>
                    <ListItem>Moda Femenina</ListItem>
                    <ListItem>Accesorios</ListItem>
                    <ListItem>Mi Cuenta</ListItem>
                    <ListItem>Rastreo de orden</ListItem>
                    <ListItem>Lista de deseos</ListItem>
                    <ListItem>Condiciones</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>CRA 72 A # 95 - 31
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>3005099858
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} />alquimiastore12@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}
