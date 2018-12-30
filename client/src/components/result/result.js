import React from 'react';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

class Result extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                result
                <Link to="/">
                    <button>home</button>
                </Link>
            </div>
        );
    }
}

export default Result;