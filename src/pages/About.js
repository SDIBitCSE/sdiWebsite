import React from 'react'
import gS from '../svgs/groupSelfie.svg'
import wT from '../svgs/wavyTop.svg'
import wB from '../svgs/wavyBottom.svg'
function About(){
    return(
        <>
            <img id="wT" src={wT} alt="" />
            <h1>About Us</h1>
            <img src={gS} className="gS" alt="" />
            <img  id="wB" src={wB} alt="" />
        </>
    )
}

export default About;   