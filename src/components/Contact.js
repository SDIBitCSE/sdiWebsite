import React from 'react'
import exams from '../svgs/Contact/exams.svg'
import ladyPhone from '../svgs/Contact/ladyPhone.svg'
import newIdeas from '../svgs/Contact/newIdeas.svg'
import wavyMiddleBottom from '../svgs/Contact/wavyMiddleBottom.svg'
import socialImage from '../svgs/Contact/socialImage.svg'
import Card from './Card'
function Contact(){
    let ids =["sdi_card_left","sdi_card_middlee","sdi_card_right" ]
    let img = [ladyPhone,exams,newIdeas]
    let para = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, corporis! Distinctio maiores magnam corporis dicta vitae tenetur inventore, quaerat eveniet illum harum reprehenderit perferendis ea tempora nostrum, enim quidem possimus!"]
    return(
        <div className="contactUsDiv">
            <p className="sdi_join">Why Join SDI?</p>
            <div className="cardHolder" >
                    {ids.map((id,index)=> <Card id={id} img = {img[index]} para={para[0]} key={`${index}-${id}`}/>)}
            </div>
            {/* <img src={wavyMiddleBottom} alt="" id="sdi_contact_middle_bottom" /> */}

            <h1 className="contact_us_header">Contact Us</h1>
            {/* <Card img={socialImage} id="sdi_contact_image"/> */}
        </div>
    )
}

export default Contact;