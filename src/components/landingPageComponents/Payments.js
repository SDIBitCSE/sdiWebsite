import React from 'react'
import { useFormik } from 'formik'
import swal from 'sweetalert';

export const Payments = () => {
	const validateLogic = val =>{
		const error ={}
		 // eslint-disable-next-line
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!re.test(val.email)){
		    error.email="proper email needed"
		}
		if(!val.name){
		    error.name="name needed"
		}
		if(!val.semester)
		return error;
	 }
	 const submitHandler=async val=>{
		let response = await window.emailjs.send(
			"doot-doot","template_cj0",
			{from_name: val.name,
				email:val.email,
				content:val.message
				}
			)
		// console.log("resposonse is ",response.status)
		response.status === 200 ? swal("Nice, the mail was sent","I will contact you ASAP!!","success"):console.log(response)
	 }
	const formik = useFormik({
		initialValues:{
		    name:"",
		    email:"",
		    semester:"",
		    section:"",
		    batch:"",
		    phone:"",
		    password:""
		},
		validate:validateLogic,
		onSubmit:submitHandler
		
	 })
	return (
		<div>
			
		</div>
	)
}
