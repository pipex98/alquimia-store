import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Add, Delete, Remove } from '@material-ui/icons';
import { mobile } from '../../responsive';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';
import { Announcement } from '../ui/Announcement';
import { privateRequest } from '../../helpers/requestMethods';
import { useNavigate } from 'react-router';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => 
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection : "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection : "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin : "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom : "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${ (props) => props.type === "total" && "500"};
    font-size: ${ (props) => props.type === "total" && "24px"};  
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

export const CartScreen = () => {

    const KEY = 'pk_test_51JxEB0LQSFnIGIUXfDbJWnZzEYaCvzepKgeIS7oMs3QHpZQASWJkUQHe1cb3pGHp9XXz50lnLxuTblaRgkvsWJGR00KCVJgNBf';

    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        
        const makeRequest = async () => {
            try {
                const res = await privateRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                });

                const { data } = res;

                navigate('/success', {
                    state: { data, cart},
                    products: cart });
            } catch (err) {
               console.log(err); 
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate])

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>TU BOLSA</Title>
                <Top>
                    <TopButton>CONTINUAR COMPRANDO</TopButton>
                    <TopTexts>
                        <TopText>Bolsa de la compra(2)</TopText>
                        <TopText>Tu lista de deseos (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">COMPRAR</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        { cart.products.map(product => (
                            <Product>
                                <ProductDetail>
                                    <Image src={ product.img }/>
                                    <Details>
                                        <ProductName>
                                            <b>Product: </b> { product.title }
                                        </ProductName>
                                        <ProductId>
                                            <b>Id: </b> { product._id }
                                        </ProductId>
                                        <ProductColor color={ product.color }/>
                                        <ProductSize><b>Size: </b>{ product.size }</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>{ product.quantity }</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>
                                       $ { product.price * product.quantity }
                                    </ProductPrice>
                                </PriceDetail>
                            </Product> 
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMEN DEL PEDIDO</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ { cart.total } </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Envío estimado</SummaryItemText>
                            <SummaryItemPrice>$ 2000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Descuento de envío</SummaryItemText>
                            <SummaryItemPrice>$ -2000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ { cart.total } </SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Alquimia Store"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={ `Your total is ${cart.total}` }
                            amount={ cart.total*100 }
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>COMPRAR</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
