import React from 'react'
import { Button } from 'semantic-ui-react'
import manAndPhone from '../svgs/manAndPhone.svg'

function Home(){
    return(
        <>
        <svg id="home_svg1" viewBox="0 0 593 1512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M285.111 407.353C-136.561 582.299 2.62679 950.518 117.808 1076.15C117.808 1076.15 803.426 1869.9 820.293 1315.07C837.16 760.243 769.692 -64 769.692 -64L153.821 -44.0062C321.426 -35.1756 696.543 236.656 285.111 407.353Z" fill="#B2FFF7"/>
        </svg>
        <div id="sdi_home_">
            <div>Hello,</div>
            <br />
            <p>This is SDI <br />
            How can we help you :)
            </p>
            <Button color="teal">Ask Question</Button>
        </div>
        <img src={manAndPhone} className="sdi_image"  alt="" />
        </>
    )
}
export default Home;