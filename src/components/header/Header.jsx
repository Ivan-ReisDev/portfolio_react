import Nav from "../nav/Nav"
import { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa";
import "./header.css"

const Header = (props) => {
  const [scroled, setScroled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if(scrollTop > 100) {
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

  const [checkedDark, setCheckedDark] = useState(true)
  const modo_dark = () => {
    setCheckedDark(!checkedDark)
    props.dark_mode(checkedDark)
  }  


  return (
    <div className={scroled ? "content activeScroll" : "content" }>
        <div className="logo">
            <h1> <a href="/">Ivan<span>.dev</span></a></h1>
        </div>
        <input type="checkbox" id="chk" onClick={modo_dark} />
        <label for="chk" class="switch">
        <FaMoon/><FaSun className="sun"/>
          <span class="slider"></span>
        </label>
        <Nav/>
    </div>
  )
}

export default Header