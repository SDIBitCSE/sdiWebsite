import React from 'react'

export default function Card({img,id,para}) {
	return (
		<div id={id}>
                    <img src={img} className={`${id}_svg`} alt="" />
				<p>{para}</p>
		</div>
	)
}
