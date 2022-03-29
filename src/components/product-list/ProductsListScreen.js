import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components'
import { mobile } from '../../responsive';
import { Newsletter } from '../newsletter/Newsletter';
import { Products } from '../products/Products';
import { Announcement } from '../ui/Announcement';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0" })}
`

const Option = styled.option``

export const ProductsListScreen = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Productos:</FilterText>
                    <Select name="color" onChange={ handleFilters }>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={ handleFilters }>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar Productos</FilterText>
                    <Select onChange={(e) => setSort(e.target.value) }>
                        <Option value="newest">
                            El mas nuevo
                        </Option>
                        <Option value="asc">Precio (asc)</Option>
                        <Option value="desc">Precio (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}
