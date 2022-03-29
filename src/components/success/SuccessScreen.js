import React, { useEffect, useState } from 'react'
import {
    Link,
  } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router'
import styled from 'styled-components';
import { privateRequest } from '../../helpers/requestMethods';

const StyledLink = styled(Link)`
    margin: 5px 0px;
    font-size: 12;
    text-decoration: underline;
    cursor: pointer;
    color: #000;
`

export const SuccessScreen = () => {

    const location = useLocation();
    const data = location.state.data.stripeRes;
    const cart = location.state.cart;
    const currentUser = useSelector(state => state.auth.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await privateRequest.post('/orders/add', {
                    userId: currentUser.uid,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });

                setOrderId(res.data.order._id);

            } catch (err) {
                console.log(err);
            }
        };
        data && createOrder();
    }, [cart, data, currentUser]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            { orderId 
                ? `El pedido se ha creado correctamente. tu numero de orden es ${orderId}`
                : `Exitoso. Se está preparando su pedido ...`}
                <StyledLink to="/">Ir a la página de inicio</StyledLink>
        </div>
    )
}
