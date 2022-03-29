import { Route, Routes } from "react-router"
import { CartScreen } from "../components/cart/CartScreen"
import { DetailProduct } from "../components/detail-product/DetailProduct"
import HomeScreen from "../components/home/HomeScreen"
import { ProductsListScreen } from "../components/product-list/ProductsListScreen"
import { SuccessScreen } from "../components/success/SuccessScreen"


export const CartRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <HomeScreen /> } />
            </Routes>
            <Routes>
                <Route path="/products/:category" element={ <ProductsListScreen /> } />
            </Routes>
            <Routes>
                <Route path="/product/:id" element={ <DetailProduct /> } />
            </Routes>
            <Routes>
                <Route path="/cart" element={ <CartScreen /> } />
            </Routes>
            <Routes>
                <Route path="/success" element={ <SuccessScreen /> } />
            </Routes>
        </div>
    )
}
