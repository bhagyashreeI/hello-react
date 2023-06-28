import React from 'react';
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from "./../utils/constants"
import  Header  from "./components/Header";
import  Body  from "./components/Body";

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header logo={LOGO_URL}/>
            <Body />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);