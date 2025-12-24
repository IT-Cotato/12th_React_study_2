import './Nav.css'

import React, { useEffect, useState }  from 'react'

import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener("scroll", () => {
        console.log("scrolling");
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    );
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className ={`nav ${show && 'nav__black'}`}>
        <img alt ="Netflix Logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className='nav__logo' 
        onClick={() => window.location.reload()}
        />
        <input value={searchValue} onChange={handleChange} className="nav__input" type="text" placeholder="영화를 검색해 주세요"/>
        <img
        alt ="User Logged"
        src = "https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        className='nav__avatar'
        />
    </nav>
  )
}
