import React from 'react'

export default function Card({img,id,para,header}) {
	return (
		<div className = "card">
                    <img src={img} className={`${id}_svg`} alt="" />
				<div className="content">
					<h3>{header}</h3>
					<p >{para}</p>
				</div>
		</div>
	)
}
