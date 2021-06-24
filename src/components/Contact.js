import React from 'react'
import wavyTop from '../svgs/Contact/wavyTop.svg'
import contactLeft from '../svgs/Contact/contactLeft.svg'
import contactMiddle from '../svgs/Contact/contactMiddle.svg'
import contactRight from '../svgs/Contact/contactRight.svg'
import wavyMiddleBottom from '../svgs/Contact/wavyMiddleBottom.svg'
import socialImage from '../svgs/Contact/socialImage.svg'
import wavyBottom from '../svgs/Contact/wavyBottom.svg'
function Contact(){
    return(
        <div>
            <img src={wavyTop} alt="" id="sdi_contact_above" />
            <p className="sdi_join">Why Join SDI?</p>
            <div>
                <div id="sdi_contact_left"  >
                    <img src={contactLeft} alt="" />
                    <p>Something</p>
                </div>
                <div id="sdi_contact_middle" >
                    <img src={contactMiddle} alt="" />
                    <p>Something</p>
                </div>
                <div id="sdi_contact_right" >
                    <img src={contactRight} alt="" />
                    <p>Something</p>
                </div>
            </div>
            <img src={wavyMiddleBottom} alt="" id="sdi_contact_middle_bottom" />
            <div>
                <img src={socialImage} alt="" id="sdi_contact_image" />
                <p className="contact_us">Contact Us</p>
                <img src={wavyBottom} alt="" id="sdi_contact_bottom" />
            </div>
        </div>
    )
}

export default Contact;