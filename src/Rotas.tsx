import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../src/Main"
import { Contato } from "./Contact"


export const Rotas = () => {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Main/>}/>
                <Route path="/contact" element={<Contato/>}/>

            </Routes>
        </BrowserRouter>

    );

}