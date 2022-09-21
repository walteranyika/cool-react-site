import React from "react";
import AboutUsPage from "./pages/AboutUsPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUsPage from "./pages/ContactUsPage";
import OurWorkPage from "./pages/OurWorkPage";
import {Route, Routes, useLocation} from  'react-router-dom'
import MovieDetailsPage from "./pages/MovieDetailsPage";

//Anims
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <AnimatePresence mode="wait"> {/* Detects when components mounts then animates*/}
                <Routes location={location} key={location.pathname}>
                    <Route path="/" exact element={<AboutUsPage/>}/>
                    <Route path="/work" exact element={ <OurWorkPage/>}/>
                    <Route path="/work/:id" element={ <MovieDetailsPage/>}/>
                    <Route path="/contact" element={ <ContactUsPage/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
