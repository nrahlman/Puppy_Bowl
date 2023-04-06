import React from 'react';
import { Route, Routes} from "react-router-dom";
import SingleDog from './SingleDog';
import Home from './Home';



const RRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:id" element={<SingleDog />}></Route>
            </Routes>
        </div>
    );
};

export default RRoutes;