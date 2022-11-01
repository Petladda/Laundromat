import React from "react";
import './Washingmachine.css';

function WashingMacine(){
    
    return(
        <div className="machine-grid">
            <div className="machine-item">
                <a href="#"><img src="/image/10kg.webp"/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20 coin</h3>
                <h4>&nbsp;&nbsp;&nbsp;Washing Machine 10 KG</h4>
                </a>
            </div>
            <div className="machine-item">
                <a href="#"><img src="/image/10kg.webp"/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20 coin</h3>
                <h4>&nbsp;&nbsp;&nbsp;Washing Machine 10 KG</h4></a>
            </div>
            <div className="machine-item">
                <a href="#"><img src="/image/12kg.jpg"/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30 coin</h3>
                <h4>&nbsp;&nbsp;&nbsp;Washing Machine 12 KG</h4></a>
            </div>
            <div className="machine-item">
                <a href="#"><img src="/image/15kg.webp"/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30 coin</h3>
                <h4>&nbsp;&nbsp;&nbsp;Washing Machine 15 KG</h4></a>
            </div>
            <div className="machine-item">
                <a href="#"><img src="/image/16kg.jpg"/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40 coin</h3>
                <h4>&nbsp;&nbsp;&nbsp;Washing Machine 16 KG</h4></a>
            </div>
            <div className="machine-item">
                <a href="#"><img src="/image/20kg.webp"/>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40 coin</h3>
                <h4>&nbsp;&nbsp;&nbsp;Washing Machine 20 KG</h4></a>
            </div>

        </div>
    );
}

export default WashingMacine;