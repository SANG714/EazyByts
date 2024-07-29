import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import news_logo from '../assets/news_logo.svg';

import countries from './Countries'
// import downArrow from './../assets/downarrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';

function Header(){

    const [active, setActive] = useState(false)
    const [showCountryDropdown, setShowCountryDropdown] =useState(false)
    const[showCategoryDropdown, setShowCategoryDropdown] = useState(false)
    const [theme, setTheme] = useState("light-theme")
    const categories = ["business", "entertainment", "general", "health","science","sports"]

    useEffect (()=> {
        document.body.className =  theme;
    },[theme])

    function toggleTheme(){
        if(theme === "light-theme"){
            setTheme("dark-theme")
        }
        else{
            setTheme("light-theme")
        }
    }

    return(
        <header>
            <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">

                <h3 className="relative heading font-bold md: basis-1/6 text-2xl xs:basis-4/12 z-50 md-5">
                
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTn-gQXtrxGboqKJJdn24Pt_r0viSEJW32Q&s" alt = "News_Aggregator" className="logo"/>
                

                </h3>
<ul className={active?"nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
    <li>
        <Link className="no-underline font-semibold" to="/" onClick={()=> {setActive(!active)}} >All News</Link>
    </li>
    <li className="dropdown-li">
        <Link className="no-underline font-semibold flex items-center gap-2" onClick={()=> {setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false)}}>Top-Headlines
        <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
        </Link>
    {/* </li> */}
        <ul className={showCategoryDropdown? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
            {categories.map((element, index)=>{
                return(
                <li key={index} onClick={()=> {setShowCategoryDropdown(!showCategoryDropdown)}}>
                     <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn"
                      onClick={() => {
                        setActive(!active)
                      }}>
                      {element}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="dropdown-li"><Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false) }}>Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} /></Link>
            <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
              {countries.map((element, index) => {
                return (
                  <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown) }}>
                    <Link to={`/country/${element?.iso_2_alpha}`} className="flex gap-3" onClick={()=>{setActive(!active)}}>
                    <img src = {element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt="{element?.countrName}"/>
                    <span>{element?.countryName}</span>
                    </Link>
                </li>
                )
})}
        </ul>
    </li>


    <li>
        <div className="no-underlinefont-semibold dark-theme" to="#" onClick={toggleTheme}>
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">
        <FontAwesomeIcon icon="fa-solid fa-moon" style={{color: "#74C0FC"}} />
            <FontAwesomeIcon icon="fa-regular fa-sun" style={{color: "#FFD43B"}} />
            <span className="ball"></span>
        </label>
        </div>
    </li>
</ul>
<div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active) }}>
<span className="lines line-1"></span>
<span className="lines line-2"></span>
<span className="lines line-3"></span>
</div>

            </nav>
        </header>


    )
}
export default Header