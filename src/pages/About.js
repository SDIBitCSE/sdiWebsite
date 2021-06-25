import React from 'react'
import { Button } from 'semantic-ui-react'
import groupSelfie from '../svgs/groupSelfie.svg'

function About(){
    return(
        <>
        <div id="sdi_about">
            <div>
                About US
            </div>
            <p>
            There are many variations of passages of Lorem Ipsum available, <br />
            but the majority have suffered alteration in some form, <br />
            by injected humour, or randomised words which don't look <br />
            even slightly believable. <br />
            If you are going to use a passage of Lorem Ipsum, you <br />
            need to be sure there <br />
            isn't anything embarrassing hidden in the middle of text. <br />
            </p>
            <Button color="teal">Know More About US</Button>
        </div>
        <img src={groupSelfie} className="sdi_image_about"  alt="" />
        </>
    )
}

export default About;