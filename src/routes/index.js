import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
// import SignInPage from "../pages/SignInPage/SignInPage";

export const routes = [
    { path: '/', element: <HomePage />, isShowHeader: true },
    { path: '/order', element: <OrderPage />, isShowHeader: true },
    { path: '/products', element: <ProductsPage />, isShowHeader: true },
    // { path: '/sign-in', element: <SignInPage />, isShowHeader: false },
    { path: '/*', element: <NotFoundPage /> },
]