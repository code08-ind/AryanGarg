import React from 'react';
import Navbar from './Navbar';

const Error = () => {
    document.title = "404! Something Went Wrong";
    return (
        <>
            <Navbar/>
            <div className="container err">
                <h1 className="text-center mt-4">Oops! Something Went Wrong</h1>
                <h3 className="text-center mt-1">Sorry! Page Not Found</h3>
                <img src="https://www.quadient.com/themes/quadient/assets/404.svg" alt="Error" />
            </div>
        </>
    );
}

export default Error;
