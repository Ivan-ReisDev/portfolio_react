import Nav from "../nav/Nav"
import { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa";
import "./header.css"


// eslint-disable-next-line react/prop-types
const Header = ({ dark_mode, modoDark }) => {
  const [scroled, setScroled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScroled(true);
      } else {
        setScroled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className={scroled ? "content activeScroll" : "content"}>
      <div className="logo">
        <h1> <a href="/">Ivan<span>.dev</span></a></h1>
      </div>
      <input type="checkbox" id="chk" onClick={dark_mode} />
      <label htmlFor="chk" className="switch">
        <FaMoon/> <FaSun className="sun" />
        { <span className="slider"></span> }
      </label>
      <Nav />
    </div>
  )
}

export default Header