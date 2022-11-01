import React from "react";
import './Banner.css';


function Banner() {
    return (
        <div className="banner-bg">
            <div className="contrainer">
                <div className="search">
                    <input 
                    className="search-input"
                    type="text"
                    placeholder="Search"

                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;