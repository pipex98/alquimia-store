import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Newsletter } from '../newsletter/Newsletter';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Announcement } from '../ui/Announcement';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';
import { publicRequest } from '../../helpers/requestMethods';
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../actions/cart';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
     width: 30px;
     height: 30px;
     border-radius: 10px;
     border: 1px solid teal;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

export const DetailProduct = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data.product);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [id])

    const handleInc = () => {
        setQuantity( quantity + 1 );
    }

    const handleDec = () => {
        quantity > 1 && setQuantity( quantity - 1 );
    }

    const handleAdd = () => {
        dispatch( addProductCart({...product, quantity, color, size}))
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={ product.img } />
                </ImgContainer>
                <InfoContainer>
                    <Title>{ product.title }</Title>
                    <Desc>
                        { product.desc }
                    </Desc>
                    <Price>$ { product.price }</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            { product.color?.map((c) => ( 
                                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={ handleDec } />
                            <Amount>{quantity}</Amount>
                            <Add onClick={ handleInc }  />
                        </AmountContainer>
                        <Button onClick={ handleAdd }>AGREGAR AL CARRITO</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}
