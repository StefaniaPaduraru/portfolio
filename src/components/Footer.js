import React from "react";

function Footer(){
    const country = 'Romania';
    const continent = 'EU';
    return(
        <>
        <p style={{textAlign: 'center'}}> {country}, {continent}</p>
        </>
    );
}
export default Footer;