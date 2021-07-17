import React from 'react'
import {data} from './Links';
import { SingleSubject } from './SingleSubject';
export default function SubjectHolder({header}) {
	return (
		<div className="notesWrapper">
		<section className="mainDiv">
		    <h1>subjects</h1>
	 		{
				data.map((e,id) => {
					return <SingleSubject key={id} name={e.name} links= {e.links} id={id} />
				})        
			}
			</section>
	 	</div >
	)
}

