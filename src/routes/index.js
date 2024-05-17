import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    { path: '/', element: <HomePage />, isShowHeader: true },
    { path: '/order', element: <OrderPage />, isShowHeader: true },

    { path: '/products', element: <ProductsPage />, isShowHeader: true },
    { path: '/products-details', element: <ProductDetailsPage />, isShowHeader: true },
    { path: '/products-type', element: <TypeProductPage />, isShowHeader: true },

    { path: '/sign-in', element: <SignInPage />, isShowHeader: false },
    { path: '/sign-up', element: <SignUpPage />, isShowHeader: false },

    { path: '/*', element: <NotFoundPage /> },
]