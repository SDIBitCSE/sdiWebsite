import React ,{useState} from 'react'
import  arrow from  '../../svgs/arrow.svg'
export const SingleSubject = ({name,links,id}) => {
	const [show, setShow] = useState(false);
	const transitionHandle=()=>{
		let arrow = document.getElementsByClassName("arrow");
		let dd =  document.getElementsByClassName("dropDown");
		let links =  document.getElementsByClassName("aLinks");
		setShow(!show)
		dd[id].classList.toggle("visible");
		arrow[id].classList.toggle("arrow-inv");
		let i=0 ;
		let numberOfMods=5;
		// console.log(links)
		for(i = id*numberOfMods;i<(id+1)*numberOfMods;i++){
			// console.log(i);
			links[i].classList.toggle("linksVisibility");
		}
	}
	return (
		<>
		<div className="modLinks">
			<div className="posDeneWala">
				<img src ={arrow} alt ="dropdown"  className="arrow" onClick={transitionHandle}/> 
			<h3>{name}</h3>
			</div>
		 </div>
		 <div className="dropDown">
		 	{ links.map((e,i)=><a className="aLinks" href={e} key={`MOD:${i+1}`}>{`MODULE-${i+1}`}</a>) }
		 </div>
	   
	  </>
	)
}
