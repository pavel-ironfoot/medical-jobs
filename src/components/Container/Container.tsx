import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { OneOfferPage } from "../OneOfferPage";
import { Companies } from "../Companies";
import { Employers } from "../Employers";
import { Help } from "../Help";

import './Container.scss';

export const Container = () => {
    return (
        <BrowserRouter>
            <div className="container-project">
                <Header />
                <Routes>
                    <Route path='/offers' element={<Main />} />
                    <Route path='/' element={<Main />} />
                    <Route path='/companies' element={<Companies />} />
                    <Route path='/employers' element={<Employers />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/oneoffer/:id' element={<OneOfferPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}