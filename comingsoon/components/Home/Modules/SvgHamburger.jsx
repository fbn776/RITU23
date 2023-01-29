import React, { useState } from 'react'

/***
 * A hamburger class following the figma design
 * The component has an action attribute that takes in a function and
 * executes it every time it gets clicked and has the state of the click passed on
 * @fbn776
**/
function SvgHamburger({action}){
	const [burger_class, setBurgerClass] = useState("svg-burger-bar unclicked")
	const [isMenuClicked, setIsMenuClicked] = useState(false)

	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass("svg-burger-bar clicked")
		}
		else {
			setBurgerClass("svg-burger-bar unclicked")

		}
		setIsMenuClicked(!isMenuClicked)
	}
	
	return (<div className="svg-hamburger" onClick={()=>{
		updateMenu()
		action(isMenuClicked);
	}} style={{
		padding: '10px'
	}}><svg style={{overflow: 'visible'}} className={burger_class} width={25} height={20} viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <path d="M0 3C0 1.34315 1.34315 0 3 0H25V1C25 2.65685 23.6569 4 22 4H0V3Z" fill="white" />
		<path d="M0 11C0 9.34315 1.34315 8 3 8H25V9C25 10.6569 23.6569 12 22 12H0V11Z" fill="white" />
  	<path d="M0 19C0 17.3431 1.34315 16 3 16H25V17C25 18.6569 23.6569 20 22 20H0V19Z" fill="white" />
	</svg></div>);
}

export default SvgHamburger;