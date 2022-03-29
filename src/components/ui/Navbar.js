import { Badge } from '@material-ui/core';
import { ExitToAppOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { startLogout } from '../../actions/auth';
import { cartLogout } from '../../actions/cart';
import { mobile } from '../../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })}
`
const Languaje = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
    ${mobile({ marginRight: "5px" })}
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center
`
const Center = styled.div`
    flex: 1
    text-align: center
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "22px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent: "center", alignItems: "center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft:"10px" })}
`

export const Navbar = () => {

    const dispatch = useDispatch();
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.auth.currentUser.username);

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languaje>EN</Languaje>
                    <SearchContainer>
                        <Input placeholder="Buscar"/>
                        <Search style={{ color: "gray", fontSize:16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>ALQUIMIA.</Logo>
                </Center>
                <Right>
                    <MenuItem>{ user }</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                        <Badge color="primary" badgeContent={quantity}>
                            <ShoppingCartOutlined />
                        </Badge>
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        <ExitToAppOutlined onClick={ handleLogout }/>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
