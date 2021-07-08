import React from 'react'
import exams from '../svgs/Contact/exams.svg'
import ladyPhone from '../svgs/Contact/ladyPhone.svg'
import newIdeas from '../svgs/Contact/newIdeas.svg'
import Card from './Card'
function Contact(){
    let ids =["sdi_card_left","sdi_card_middlee","sdi_card_right" ]
    let img = [ladyPhone,exams,newIdeas]
    let para = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, corporis! Distinctio maiores magnam corporis dicta vitae tenetur inventore, quaerat eveniet illum harum reprehenderit perferendis ea tempora nostrum, enim quidem possimus!"]
    let header = ["New Ideas"]
    return(
        <div className="contactUsDiv">
            
            <h1 >Why Join SDI?</h1>
            <div className="cardHolder" >
                    {ids.map((id,index)=> <Card id={id} img = {img[index]} header={header[0]} para={para[0]} key={`${index}-${id}`}/>)}
            </div>
        </div>
    )
}

export default Contact;