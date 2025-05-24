import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import { Abaut, Account, AddTocart, Checkout, Contact, ExploreOurProducts, Home, InfoPrioduct, Layout, Login, Order, SignUp, Wishlist } from "../pages/lazy";
import { Provider } from 'react-redux'
import { store } from "../entities/store/store";
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Loading from "../pages/loading/loading";

createRoot(document.getElementById("root")).render(<StrictMode>
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="abaut" element={<Abaut />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route path="login" element={<Login />} />
                            <Route path="account" element={<Account />} />
                            <Route path="order" element={<Order />} />
                            <Route path="explorProduct" element={<ExploreOurProducts />} />
                            <Route path="addtocart" element={<AddTocart/>} />
                            <Route path="/infoProduct/:id" element={<InfoPrioduct/>} />
                            <Route path="/checkout" element={<Checkout/>} />
                            <Route path="/wshlist" element={<Wishlist/>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    </StrictMode>
</StrictMode>);
