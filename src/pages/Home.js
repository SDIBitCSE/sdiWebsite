import React from 'react'
import { Button } from 'semantic-ui-react'
import manAndPhone from '../svgs/manAndPhone.svg'
import Contact from '../components/WJS'
import homePageSVG from '../svgs/homePage.svg'
function Home(){
    return(
        <>
        <div className="homeDiv">
            <img className="hps" src={homePageSVG} alt="" />
            <div id="sdi_home_">
                <h1>Hello,</h1>
                <p>This is SDI <br />
                    How can we help you :)
                </p>
                <Button color="teal">Ask Question</Button>
                <img src={manAndPhone} className="manAndPhone"  alt="" />
            </div>
        </div>
        <Contact/>
        </>
    )
}
export default Home;