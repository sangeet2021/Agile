import React from "react";
import {Route, Routes} from "react-router-dom";
import Form from "./Form/Form";

const Body = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Form/>}/>
            </Routes>
        </div>
    )
}

export default Body;
