import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { FuturePage } from "../FuturePage";

import './Container.scss';

export const Container = () => {
    return (
        <BrowserRouter>
            <div className="container-project">
                <Header />
                <Routes>
                    <Route path='/offers' element={<Main />} />
                    <Route path='/' element={<Main />} />
                    <Route path='/companies' element={<FuturePage />} />
                    <Route path='/employers' element={<FuturePage />} />
                    <Route path='/help' element={<FuturePage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}