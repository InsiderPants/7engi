import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
// import Form from './components/form/Form';
// import Navbar from './components/navbar/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    );
}

export default App;